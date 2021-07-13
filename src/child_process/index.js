// 引入创建子进程的模块
const childProcess = require('child_process')
// 获取cpu的数量
const cpuNum = require('os').cpus().length
console.log(cpuNum)

// 创建与cpu数量一样的子进程
// for (let i = 0; i < cpuNum; ++i) {
//   childProcess.fork('./worker.js')
// }
