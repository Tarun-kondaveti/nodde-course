const { log } = require('console');
const path=require('path')
console.log(path.sep)
const filepath=path.join('/nodeJs','globals.js')
console.log(filepath);
const basename=path.basename(filepath)
console.log(basename);
  