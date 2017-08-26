Tinytest.add('set works correctyly', function( test ) {
	set('test', 'testVal');
	test.equal(Session.get('test'), 'testVal');
	set('test2', 'testVal', 'mammolo');
	test.equal(Session.get('test2').mammolo, 'testVal');
});

Tinytest.add('get works correctyly', function( test ) {
	set('test', 'testVal');
	test.equal(get('test'), 'testVal');
	set('test2', 'testVal', 'mammolo');
	test.equal(get('test2', 'mammolo'), 'testVal');
});

Tinytest.add('reset works correctyly', function( test ) {
	set('retest', 'testVal');
	test.equal(get('retest'), 'testVal');
	reset('retest', 'canullo');
	test.equal(get('retest'), 'canullo');
});

Tinytest.add('unset works correctyly', function( test ) {
	set('test', 'testVal');
	test.equal(get('test'), 'testVal');
	unset('test');
	test.equal(get('test'), null);
	test.equal(get('test', 'mammolo'), null);
});