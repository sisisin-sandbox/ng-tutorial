module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify'],
    files: [
      'src/*.js',
      'test/**/*Spec.js'
    ],
    exclude: [],
    preprocessors: {
      'test/**/*Spec.js': ['browserify'],
      'src/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['espowerify']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
