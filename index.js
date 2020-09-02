var fs = require('fs');

/**
 * @param {String} directory
 */
function mkdirSync(directory) {
  const paths = directory.replace(/\/$/, '').split('/');

  paths.forEach((_, index, dir) => {
    index += 1;
    const path = dir.slice(0, index).join('/');
 
    !fs.existsSync(path) ? fs.mkdirSync(path) : null;
  });
}

module.exports = {
  mkdirSync,
};
