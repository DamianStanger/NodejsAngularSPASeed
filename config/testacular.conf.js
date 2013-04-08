basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'public/lib/angular/angular.js',
  'public/lib/angular/angular-*.js',
  'test/lib/node/**/*.js',
//  'node_modules/requirejs/**/*.js',
//  'node_modules/express/node_modules/connect/lib/connect.js',
//  'node_modules/express/lib/express.js',
  'test/lib/angular/angular-mocks.js',
  'public/js/**/*.js',
  'routes/**/*.js',
  'services/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
