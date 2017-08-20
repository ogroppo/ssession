Package.describe({
  summary: "Shortcuts for Meteor Session functions",
  version: "0.1.1",
  name: "onestone:ssession",
  git: "https://github.com/ogroppo/ssession.git"
});

Package.onUse(function (api) {
    api.addFiles('lib/session.js', 'client');
    api.export(['set', 'get', 'reset', 'unset'], 'client');
});
