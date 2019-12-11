// import
const fs = require('fs');


// declarations
let converted = {}; // hash map for doing quick lookups during iterations
let finalArr = [];  // output array


//file reads
let rawData = fs.readFileSync('./clicks.json');
const clicks = rawData && JSON.parse(rawData);


const clickTransformer = (allClicks) => {
    converted = {};
    finalArr = [];
    let clicksData = null;
    allClicks ? (clicksData = allClicks) : (clicksData = clicks); // bifurcating internal and external clicks data (to run test cases on different data sets)


    clicksData.forEach((ele, i) => {
        if(ele. ip && ele.timestamp && ele.amount) {
            let periodTime = "period" + (ele.timestamp.split(" ")[1]);
            let periodKey = periodTime.split(":")[0];
            // if any single click has occured 10 or more times, all its occurences are removed
            if (converted[ele["ip"]] && converted[ele["ip"]].count >= 10) {
                delete converted[ele["ip"]];
            } else {
                // check if a given click has occured previosly
                if (converted[ele["ip"]]) {
                    // check if current if is occuring in an existing period
                    if (converted[ele["ip"]][periodKey]) {
                        // update the existing click in the same period
                        if (converted[ele["ip"]][periodKey]["amount"] < ele.amount) {
                            converted[ele["ip"]][periodKey]["amount"] = ele.amount;
                            converted[ele["ip"]]["count"] += 1;
                        } else if (converted[ele["ip"]][periodKey]["amount"] == ele.amount) {
                            let convertedTime = converted[ele["ip"]][periodKey]["timestamp"].split(" ")[1];
                            let currentTime = ele.timestamp.split(" ")[1];
                            let convertedTimeArr = convertedTime.split(":");
                            let currentTimeArr = currentTime.split(":");
                            if ((convertedTimeArr[0] * 60 + convertedTimeArr[1]) * 60 + convertedTimeArr[2] > (currentTimeArr[0] * 60 + currentTimeArr[[1]]) * 60 + currentTime[2]) {
                                converted[ele["ip"]][periodKey][timestamp] = ele.timestamp;
                                converted[ele["ip"]]["count"] += 1;
                            }
                        }
                    } else {
                        // create entry in same ip under different period
                        converted[ele["ip"]][periodKey] = {
                            "ip": ele.ip,
                            "amount": ele.amount,
                            "timestamp": ele.timestamp,
                            "period": (ele.timestamp.split(" ")[1].split(":")[0]) - 1
                        };
                        converted[ele["ip"]]["count"] += 1;
                    }
                } else {
                    // create a new entry for the click if not previosly occured
                    converted[ele["ip"]] = {};
                    converted[ele["ip"]][periodKey] = {
                        "ip": ele.ip,
                        "amount": ele.amount,
                        "timestamp": ele.timestamp,
                        "period": (ele.timestamp.split(" ")[1].split(":")[0]) - 1
                    };
                    converted[ele["ip"]]["count"] = 1;
                }
            }
        } else {
            // error handling for corrupt data
            // throw new Error('Corrupt data set! Kindly provide dataset containing ip, timestamp and amount attributes for each click!');
        }
    });

    for (const ele in converted) {
        converted[ele]["count"] && delete converted[ele]["count"];
        for (const click in converted[ele]) {
            delete converted[ele][click].period;
            finalArr.push(converted[ele][click]);
        }
    }

    return finalArr;
}

clickTransformer(); // initial call


// file writes
let resultstr = JSON.stringify(finalArr);
fs.writeFileSync('result.json', resultstr, (err) => {
    if (err) {
        throw err;
    }
});

// exports
module.exports = clickTransformer;