/*
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2013,2020 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */

define("platform/util/AsyncAwareMixin", [
	"dojo/_base/declare", 
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/Deferred",
	"dojo/promise/all",
	"dojo/_base/array",
	"platform/logging/Logger"], 
function(declare, lang, aspect, Deferred, all, arrayUtil, Logger){
	return declare(null, {		
		__promisesStack: null,
		__promisesStackController: null,
/**@memberOf platform.util.AsyncAwareMixin */
		__popPromiseFromStack: function(){
			return this.__promisesStackController.__promisesStack.pop();
		},
		__pushNullIntoStack: function(){
			this.__promisesStackController.__promisesStack.push(null);
		},
		__peekPromiseFromStack: function(){
			var ctrl = this.__promisesStackController;
			if (ctrl.__promisesStack.length === 0){
				return null;
			}
			return ctrl.__promisesStack[ctrl.__promisesStack.length - 1];
		},
		__setPromiseInStack: function(promise){
			var ctrl = this.__promisesStackController;
			var pos = (ctrl.__promisesStack.length === 0) ? 0 : ctrl.__promisesStack.length - 1;
			ctrl.__promisesStack[pos] = promise;
		},
		postscript: function(){
			var self = this;
						
			self.__promisesStack = [];
			self.__promisesStackController = self;
			for (var methodName in self){
				if(!lang.isFunction(self[methodName]) || !/^async.*/.test(methodName)){
					continue;
				}
				/* if (!lang.isFunction(self[methodName]) ||
					/^__|postscript|constructor/.test(methodName)){					
					continue;
				}*/				
				aspect.around(self, methodName, function(originalFunc){
					return (function(){
						var currentMethod = methodName;

						return function(){
							Logger.trace('Method ' + currentMethod + ' was called.');
							//Convert arguments object into an array
							var originalArgs = arrayUtil.map(arguments, "return item;");
							var deferred = new Deferred();
							var promise = deferred.promise;
							var lastPromise = self.__peekPromiseFromStack();
							var currentMethodPromiseInStack = false;
							if (!lastPromise || lastPromise.isFulfilled()){
								Logger.trace('Method ' + currentMethod + ' will be executed now.');
								self.__setPromiseInStack(promise);
								currentMethodPromiseInStack = true;
								lastPromise = new Deferred().resolve();
							} else {
								Logger.trace('Method ' + currentMethod + ' will be executed after previous method completes.');								
							}
							
							lastPromise.then(function(){
								self.__pushNullIntoStack();
								var hasArgsAsPromise = arrayUtil.some(originalArgs, function(arg){
									return ((arg) && (lang.isObject(arg)) && ('then' in arg));
								});
								//Redirect the promisesStackController of all AsyncAware type arguments to self
								//so any promises generated by external objects are also guaranteed to
								//be executed in sequence
								arrayUtil.forEach(originalArgs, function(arg){
									if ((arg) && (lang.isObject(arg)) && ('__promisesStack' in arg)){
										arg.__previousPromisesStackController = arg.__promisesStackController;
										arg.__promisesStackController = self;
									}
								});
								
								var argsPromise = null;
								if (hasArgsAsPromise){
									//Some arguments are promises, so wait until all are resolved 
									//and then execute the method with the actual resolved values
									argsPromise = all(originalArgs);
								} else {
									argsPromise = new Deferred().resolve(originalArgs);
								}
								
								argsPromise.then(function(){
									var start = new Date();									
									Logger.trace('Executing method ' + currentMethod);
									var ret = null;
									try{
										var callerArguments = arguments[0];
										var args = callerArguments;
										if (callerArguments && !callerArguments.length){
											args = [callerArguments];
										}

										ret = originalFunc.apply(self, args);
									} catch (e) {										
										Logger.trace('Method ' + currentMethod + ' failed with this error: ' + e);
										self.__popPromiseFromStack();
										deferred.reject(e);
										return;
									}
									
									var lastInnerPromise = self.__popPromiseFromStack();
									
									if (!lastInnerPromise){ //last method didn't generate any promises
										lastInnerPromise = new Deferred().resolve();
									}
									lastInnerPromise.then(function(){
										var returnPromise = (ret && ret.then) ? ret : new Deferred().resolve(ret);
										returnPromise.then(function(value){
											var diff = new Date().getTime() - start.getTime();
											Logger.trace('Method ' + currentMethod + " executed successfully (" + diff + "ms)");
											if (self.__promisesStackController.__promisesStack.length === 1){
												self.__popPromiseFromStack();
											}
											deferred.resolve(value);
										}).
										otherwise(function(err) {
											self.__popPromiseFromStack();
											deferred.reject(err);
										});
									}).
									otherwise(function(err) {
										self.__popPromiseFromStack();
										deferred.reject(err);
									});										
								}).
								otherwise(function(err) {
									Logger.trace('Failed to evaluate arguments for method ' + currentMethod + " execution");
									self.__popPromiseFromStack();
									deferred.reject(err);
								});
							}).
							otherwise(function(err) {
								self.__popPromiseFromStack();
								deferred.reject(err);
							});
							if (!currentMethodPromiseInStack){
								self.__setPromiseInStack(promise);
							}
	
							return promise;
						};
					})();
				});
			}
		}
	});
});
