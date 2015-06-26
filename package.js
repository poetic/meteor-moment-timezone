Package.describe({
  name: 'poetic:moment-timezone',
  version: '0.4.0',
  summary: 'current version of Moment Timezone (v0.4.0)',
  git: 'https://github.com/poetic/meteor-moment-timezone',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  var where = ['client', 'server'];

  api.versionsFrom('1.1.0.2');

  api.use('momentjs:moment@2.10.3', where);
  api.imply('momentjs:moment@2.10.3', where);

  api.addFiles('pre.js', where);
  api.addFiles('moment-timezone.js', where);
  api.addFiles('post.js', where);
});
