// import assign from 'object-assign';
const assign = require('object-assign');

function makeBaseDeck (values, fn) {
  return values.concat(values).map(value => assign({}, fn(value), {show: false, matched: false}));
}

function makeCharDeck (values) {
  return makeBaseDeck(values, value => ({value}));
}

function makeIconDeck (values) {
  return makeBaseDeck(values, value => ({value, klass: `icon-${value}`}));
}

function makeUnsplashItDeck (values) {
  const minSize = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
  const smaller = Math.ceil(minSize / 2);
  return makeBaseDeck(values, value => ({
    value,
    klass: 'full',
    valueStyle: {
      backgroundImage: `url(https://unsplash.it/${smaller}/?image=${value})`
    }
  }));
}

module.exports = {
  numbers: () => makeCharDeck([1, 2, 3, 4, 5, 6, 7, 8]),
  letters: () => makeCharDeck(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']),
  geeky: () => makeIconDeck(['github', 'npm', 'tux', 'appleinc', 'android', 'windows', 'chrome', 'firefox']),
  emoticons: () => makeIconDeck(['happy', 'tongue', 'sad', 'cool', 'baffled', 'confused', 'hipster', 'wondering']),
  photos: () => makeUnsplashItDeck([1080, 1074, 1069, 1040, 998, 901, 867, 815]),
  photos2: () => makeUnsplashItDeck([755, 767, 724, 718, 696, 674, 631, 618])
};
