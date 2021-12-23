const os = require('os');

console.log('[USER]', os.userInfo().username);
console.log('[HOME]', process.env.HOME);
