Package.describe({
	summary: "Shortcuts for Session manipulation",
	version: "1.0.0",
	name: "onestone:ssession",
	git: "https://github.com/ogroppo/ssession.git"
});

Package.onUse(function (api) {
	api.use('session', 'client');
    api.mainModule('ssession.js', 'client');
    api.export(['set', 'get', 'reset', 'unset'], 'client');
});

Package.onTest(function(api) {
  	api.use(["session", "onestone:ssession", "tinytest"], 'client');
  	api.addFiles('ssession-tests.js', 'client');
});
