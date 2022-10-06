//fs & path modules
const fs = require('fs');
const path = require('path');

// If Logs directory exists
if(fs.existsSync("Logs")) {
    // shows all files
    fs.readdir("Logs", (err, files) => {
        if (err) throw err;
        for (const file of files) {
            const filepath = path.join("Logs", file);
            //delete process
            fs.unlink(filepath, err => {
                if (err) throw err;
            });
            // Print out the file name to console
            console.log(`deleted file ----> ${file}`);
        }
        // Remove from directory
        fs.rmdirSync("Logs");
    });
}