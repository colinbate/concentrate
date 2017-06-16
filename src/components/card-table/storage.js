/* global  localStorage */
exports.get = (key) => localStorage.getItem(key);
exports.set = (key, value) => localStorage.setItem(key, value);
