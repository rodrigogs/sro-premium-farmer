const { get } = require('./adapter');
const solveCaptcha = require('./captcha-solver');

const URI = '/ascx/Captcha.aspx';

const getSession = async () => {
  const response = await get(URI, { encoding: null }); 
  const cookie = response.headers['set-cookie'][0].split(';')[0];
  const captcha = (await solveCaptcha(response.body)).match(/\d+/g).join('');

  return {
    cookie,
    captcha,
  };
};

module.exports = getSession;
