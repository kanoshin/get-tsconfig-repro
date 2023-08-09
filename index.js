const { getTsconfig } = require('get-tsconfig');

// Searches for tsconfig.json starting in the current directory
console.log(getTsconfig());
