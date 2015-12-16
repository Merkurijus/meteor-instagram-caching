Package.describe({
  name: 'tapfuse:instagram-caching',
  version: '0.0.1',
  summary: 'User image caching from Instagram for Meteor',
  git: 'https://github.com/TapFuse/meteor-instagram-caching.git',
  documentation: 'README.md'
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  // Core
  api.use(['templating','ecmascript','mongo']);
  // 3rd party
  api.use('tapfuse:instagram-api@1.0.0');
  api.use('tapfuse:collection-global@1.0.0');

  // Files
  api.addFiles('lib/tapfuse-instagram-caching.js', S);
  api.addFiles('lib/globals-server.js', S);
  api.addFiles('lib/globals-client.js', C);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tapfuse:instagram-caching');
  api.addFiles('tests/package-tests.js');
});
