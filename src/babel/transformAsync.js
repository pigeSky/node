var babel = require("@babel/core");

let code = 'import vue from "vue"; function abc(){ () => {console.log(1)} }'

const result = babel.transformAsync(code, {
  "presets": [
    "@babel/preset-env"
  ]
} );
console.log(result.then( result => console.log(result))); // => { code, map, ast }
export default code
