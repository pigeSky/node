const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(path.resolve(__dirname,'test.js'),'utf-8');
// const file = fs.readFileSync('D:\\workspace\\Study\\nodejs\\node\\src\\readFile\\test.js');



console.log(file.replace(/ /g,''));
