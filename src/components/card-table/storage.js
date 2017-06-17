/* global  localStorage */
let store;
function testStorage () {
  try {
    const x = 'test-localstorage-' + Date.now();
    localStorage.setItem(x, x);
    const y = localStorage.getItem(x);
    localStorage.removeItem(x);
    if (y !== x) {
      throw new Error();
    }
    store = localStorage; // localStorage is fully functional!
  } catch (e) {
    store = {
      data: {},
      getItem (key) {
        return this.data[key];
      },
      setItem (key, val) {
        this.data[key];
      }
    };
  }
}

testStorage();
exports.get = (key) => store.getItem(key);
exports.set = (key, value) => store.setItem(key, value);
