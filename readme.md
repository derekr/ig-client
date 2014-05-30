# ig-client
#### Streaming Instagram API client.

```
npm install ig-client
```

# Usage

```js
var ig = require('ig-client')({
    clientId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
});

var r = ig({
    method: 'GET',
    uri: '/users/9243'
}).pipe(process.stdout);

r.on('error', function (err) {
    console.log('oh oh');
});
```

Supports callbacks as well.

```js
ig({
    method: 'GET',
    uri: '/users/9243'
}, function (err, body) {
    if (err) console.log('uh oh');

    console.log(body); // json object
});
```

Authenticated requests can be made by passing an `access_token`
as the `token` item in the request options.

```js
ig({
    method: 'GET',
    uri: '/users/9243',
    token: 'xxxx.xxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
}, function (err, body) {});
```

Simple GET requests can just provide a string uri.

```js
ig('/users/9243').pipe(process.stdout);
```

# Intention

This is mean to be a simple abstraction on top of `request`
to remove some boilerplate when building up Instagram API
calls. Would be cool to pair w/ an Instagram version of something
like [github-oauth](https://github.com/maxogden/github-oauth) to
get an access token for making authenticated requests.

If you want to just mess around – when you explore the
[Instagram API Docs](http://instagram.com/developer/endpoints/users/#) you can use the generated `access_token` they
provide.
