// Karma configuration
// Generated on Mon Sep 23 2013 20:00:56 GMT+0200 (Rom, sommertid)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../../',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
        {pattern: 'tests/lib/jquery.js', included: false},
        {pattern: 'tests/lib/jasmine-jquery.js', included: false},
        {pattern: 'tests/lib/sinon.js', included: false},
        {pattern: 'tests/fixtures/**/*.html', included: false},
        {pattern: 'lib/**/*.js', included: false},
        {pattern: 'src/**/*.js', included: false},
        {pattern: 'tests/**/*Spec.js', included: false},
        'tests/test-main.js'
    ],


    // list of files to exclude
    exclude: [
      'src/main.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: [
  //      'progress'
  //    , 'coverage'
			, 'dots'

    ],


      preprocessors: {
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          // (these files will be instrumented by Istanbul)
//          'src/**/*.js': ['coverage']
      },

      coverageReporter: {
          //type : 'text'
     //     dir : 'tests/coverage/'
      },



      // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
      //logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
      //'C:/Program Files (x86)/Mozilla Firefox/firefox.exe'
//WIN    browsers: ['Chrome' , 'Safari',  'IE' , 'C:/Program Files (x86)/Mozilla Firefox/firefox.exe' /* ,  'C:/Program Files (x86)/Opera/launcher.exe' /*, 'ChromeCanary'*/],
      browsers: [
          'Chrome'
      //    , 'Safari'
       //   , 'Firefox'
       //   , 'Opera'
      /*    , 'IE8 - WinXP'
          , 'IE9 - Win7'
          , 'IE10 - Win7'
          , 'IE11 - Win7'
          */],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
