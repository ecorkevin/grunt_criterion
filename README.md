<tt>grunt_criterion</tt>
===============

> Helps keep code to defined standards

### <tt>Getting Started</tt>
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-criterion --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-criterion');
```


**Takes .js files inside of the working directory and runs one or more of the following tasks**

### <tt>JSHINT</tt>

		grunt (jshint)

Outputs a list of errors to log.json.  By default, ignores the following errors:

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
		
on your directory.  Every changed file will be jshinted, and all errors will automatically show up on localhost

### <tt>Code Coverage</tt>

You want coverage tests of your code?  Write your own mocha tests, and run

		grunt mocha

Your coverage test will be outputted to /coverage

If you're so inclined, you can run coverage tests on each js file in your directory.  Run

		grunt cover

Your coverage test will be outputted to /coverage.

### <tt>JS DUCK</tt>

If you'd like to document your code using jsduck format, just simply run

		grunt duck
		
You'll be prompted for input directories (comma delimited list, no spaces), and docs will output to /docs
