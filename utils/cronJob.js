const cron = require('node-cron');
const fs = require('fs');


const rawData = fs.readFileSync('./data/task.js', 'utf-8');
const data = JSON.parse(rawData);
const dataLength = data.length;




cron.schedule("*/2 * * * * *", function() {
    for(let i = 0; i < dataLength; i++) {
        const deadline = new Date(data[i].deadline)
        const today = Date.now();
        let remainingTimeInHours = Math.floor((deadline - today) / (1000 * 60 * 60));
        console.log(remainingTimeInHours)
        if(remainingTimeInHours === 18 ){
            console.log('Remaining Time is under 18 hours')
        }
        if(remainingTimeInHours === 4 ){
            console.log('Remaining Time is under 4 hours')
        }
        if(remainingTimeInHours === 0){
            console.log('Remaining Time is under 0 hours')
        }
        if(remainingTimeInHours < 0){
            console.log('Remaining Time in negative');
        }
} 
})

