const { CookieJar } = require('tough-cookie');
const { post } = require('./adapter');
const getSession = require('./get-session');

const URI = '/Register.aspx/POST_REGISTER';

const create = async () => {
  const { cookie, captcha } = await getSession();
  console.log({ cookie, captcha })

  const cookieJar = new CookieJar();
  await new Promise((resolve, reject) => cookieJar.setCookie(cookie, 'http://furysro.ddns.net', (err, cookie) => {
    if (err) return reject(err);
    resolve(cookie);
  }));

  const response = (await post(URI, {
    cookieJar,
    headers: {
      Origin: 'http://furysro.ddns.net',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json, text/javascript, */*; q=0.01',
      Referer: 'http://furysro.ddns.net/Register.aspx',
      'X-Requested-With': 'XMLHttpRequest',
      Connection: 'keep-alive'
    },
    body: JSON.stringify({
      name: 'testefur3',
      pass: 'Rgs84060989',
      cpass: 'Rgs84060989',
      email: 'acaraje@adssad.com.br',
      answer: '12135456454',
      captcha,
    }),
  })).body;

  return response.d;
};

module.exports = create;
