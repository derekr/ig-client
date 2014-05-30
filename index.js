// @todo update w/ `nets` module when streaming support is fixed
var nets = require('request');

module.exports = function (opts) {
    opts = opts || {};

    if (typeof opts.clientId !== 'string') opts.clientId = '';
    if (typeof opts.version !== 'string') opts.version = 'v1';
    if (typeof opts.host !== 'string') opts.host = 'https://api.instagram.com';


    return function (req, callback) {
        if (typeof req === 'string') req = { uri: req };

        req.url = opts.host + '/' + opts.version + req.uri;
        delete req.uri;

        req.qs = {};

        if (req.body) req.qs = req.body;
        delete req.body;

        if (req.token) {
            req.qs.access_token = req.token;
            delete req.token;
        }

        if (opts.clientId) {
            req.qs.client_id = opts.clientId;
        }

        if (typeof callback !== 'function') return nets(req);

        nets(req, function (err, res, body) {
            if (err) return callback(err);
            callback(null, JSON.parse(body));
        });
    };
};
