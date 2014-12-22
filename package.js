Package.describe({
  name: 'harrison:babyparse',
  summary: 'BabyParse is a fast, reliable CSV parser based on PapaParse',
  version: '1.0.0',
  git: 'https://github.com/harrisonhunter/baby-parse-meteor.git'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.3");
  api.addFiles('harrison:babyparse.js', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('harrison:babyparse');
  api.addFiles('harrison:babyparse-tests.js', ['server']);
});
