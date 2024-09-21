const os = require('os');

// info about current user
const user = os.userInfo();


// method returns the system uptime in seconds

setInterval(() => {
  const uptime = os.uptime();
  console.log(uptime);
}, 1000);

const currentOS = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);
