/*
 * Licensed Materials - Property of IBM
 *
 * 5725-M39
 *
 * (C) Copyright IBM Corp. 2020 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp.
 */

/**
 * createdBy: lcassa@br.ibm.com
 * Rectangle with contains capability
 */
define("platform/map/RectD",
[ "dojo/_base/declare", "platform/logging/Logger" ], 
function(declare, Logger) {
	return declare(null, {
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		_className: "platform.map.RectD",

		constructor: function(left, top, right, bottom) {
			this.left = left;
			this.top = top;
			this.right = right;
			this.bottom = bottom;
		},

/**@memberOf platform.map.RectD */
		contains: function(x, y) {
			if(x > this.left && x < this.right) {
				if(y > this.top && y < this.bottom) {
					return true;
				}
			}
			return false;
		}
	});
});
