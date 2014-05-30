var test = require('tape');
var ig = require('./')({
    clientId: 'afeb4fbe290349c69dec07d432483679'
});

ig({
    method: 'GET',
    uri:    '/users/9243'
}, function (err, body) {
    test('HTTP GET', function (t) {
        t.equal(err, null, 'errors should be null');
        t.equal(typeof body, 'object', 'response body should be an object');
        t.end();
    });
});
