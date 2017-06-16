module.exports = function (elem) {
  const width = parseInt(window.innerWidth, 10);
  const compStyle = parseInt((window.getComputedStyle
    ? window.getComputedStyle(elem, null)
    : elem.currentStyle).width, 10);

  return compStyle === width;
};
