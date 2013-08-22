<tt>grunt_formatter</tt>
===============

**Takes all .js files inside of the working directory and runs one or more of the following tasks**

### <tt>JSHINT</tt>

		grunt (jshint)

Outputs a list of errors to log.json.  By default, ignores the following errors:

		{a}' is not defined. -- W117
		Mixed spaces and tabs -- W099
		
### <tt>BEAUTIFY</tt>

		grunt b
		
Once jshint passes to satisfaction, it's recommended to run this to neatly format the code.  Note this takes care of the defaulted second error, aforementioned. 
		
### <tt>COPYRIGHT NOTICE</tt>

		grunt c

This adds a custom comment to the beginning of your js file, should you choose.   (WORK IN PROGRESS)

### <tt>TABLE OF JSHINT ERRORS</tt>

If you're so inclined, this package takes advantage of an express webserver.  Running

		node web.js
		
Fires a webserver on port 3000 that keeps track of your log.json file for easy viewing.  Simply navigate to

		localhost:3000

to view any errors.  Refreshing the page after a grunt will also show the latest errors/changes to your directory.

### <tt>Watcher</tt>

To make that table above even easier to use, you can run

		grunt watch
		
on your directory.  Every changed file will be jshinted, and all errors automatically will show up on localhost
