// const builtin = require('module').builtinModules;
// console.log(builtin);
// console.log(`${typeof builtin}`);


// createRequire 

const { createRequire } = require('module')
const require = createRequire(import.meta.url);
console.log(require);