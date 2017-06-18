module.exports = function (elem) {
  const width = parseInt(window.innerWidth, 10);
  const height = parseInt(window.innerHeight, 10);
  const minVal = width < height ? width : height;
  const compStyle = parseInt((window.getComputedStyle
    ? window.getComputedStyle(elem, null)
    : elem.currentStyle).width, 10);

  return compStyle === minVal;
};
