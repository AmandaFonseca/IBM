@echo off
set JAVA_HOME=C:\Program Files\Java\jdk1.8.0_271
IF true == true ( build.cmd %* ) ELSE ( echo "build skipped" )
