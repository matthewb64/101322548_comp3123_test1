//fs module
const fs = require('fs');

// checks for - if not - Create Logs directory
if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}
// Change the current process to Logs directory
process.chdir("Logs");
// 10 log files .txt created
for(let i = 0; i < 10; i++) {
    const filename = `log${i}.txt`;
    fs.writeFile(filename, 'log text here', (err) => {
        if (err) {
            throw err;
        }
    });
    // print to console
    console.log(filename);
}