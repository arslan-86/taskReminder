const cron = require('node-cron');
const fs = require('fs');


const d = fs.readFileSync('./data/task.js', 'utf-8');
const data = JSON.parse(d);
const deadline = new Date(data[1].deadline)

const today = Date.now();

let remainingTime = Math.floor((deadline - today) / (1000 * 60 * 60));

console.log(remainingTime)
