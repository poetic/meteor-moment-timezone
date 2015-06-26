Package.describe({
  name: 'poetic:moment-timezone',
  version: '0.0.1',
  summary: 'current version of Moment Timezone (v0.4.0)',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({'moment-timezone': '0.4.0'});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles('moment-timezone.js');
});
