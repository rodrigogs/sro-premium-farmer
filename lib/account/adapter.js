const got = require('got');

const BASE_URL = 'http://furysro.ddns.net';
const request = got.extend({
  baseUrl: BASE_URL,
});

const get = (uri, options) => request.get(uri, options);

const post = (uri, options) => request.post(uri, options);

module.exports = {
  get,
  post,
};
