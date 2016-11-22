// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: './',

        // List of test frameworks you want to use. Typically, you will set this to ['jasmine'], ['mocha'] or ['qunit']...
        frameworks: ['mocha'],

        // A list of browsers to launch and capture.
        browsers: ['Chrome'],

        //  How long will Karma wait for a message from a browser before disconnecting from it (in ms).
        browserNoActivityTimeout: 30000,

        // List of files/patterns to load in the browser.
        files: [
            './test/test.js'
        ],

        // List of plugins to load. A plugin can be a string (in which case it will be required by Karma) or an inlined plugin - Object.
        plugins: [
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-webpack'
        ],

        // Preprocessors in Karma allow you to do some work with your files before they get served to the browser.
        // These are configured in the preprocessors block of the configuration file:
        preprocessors: {
            './test/test.js': ['webpack'],
        },

        webpack: require('./webpack.config.js'),

        // A list of reporters to use.
        reporters: ['mocha'],

        // The port where the web server will be listening.
        port: 9876,

        // Enable or disable colors in the output (reporters and logs).
        colors: true,

        // Level of logging.
        logLevel: config.LOG_INFO,

        // test 監聽
        autoWatch: false,

        // Continuous Integration mode.
        // If true, Karma will start and capture all configured browsers, run tests
        // and then exit with an exit code of 0 or 1 depending on whether all tests passed or any tests failed.
        singleRun: true,

        // How many browsers Karma launches in parallel.
        concurrency: Infinity
    });
};
