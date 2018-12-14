const Tesseract = require('tesseract.js')

const solveCaptcha = async (image) => {
  const result = await Tesseract.recognize(image);
  return result.text;
};

module.exports = solveCaptcha;
