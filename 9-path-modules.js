const path = require('path')
console.log(path.sep)

const fp = path.join('/content','/subfolder','test.txt')
console.log(fp)

const base = path.basename(fp)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)