const path = require('path');

function resolve(dir) {
  const a = path.join(__dirname, '..', dir);
  console.log(a);
  return a;
}

module.exports = resolve;
