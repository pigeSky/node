var babel = require("@babel/core");
// import { transform } from "@babel/core";
// import * as babel from "@babel/core";

let code = 'import vue from "vue"; function abc(){ console.log(1); }'
// const code = "{name:'pige'}"

const result = babel.transformSync(code, {} );
// const {code} = result
console.log(result); // => { code, map, ast }


