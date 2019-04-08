const fs = require("fs");

// Reads current directory
fs.readdir(__dirname, (err, files) =>
{
    // Covers error reading the directory
    if (err) console.error(err);

    files.forEach((file) =>
    {
        let fileName = directoryPath + "\\" + file;

        // Opens the file itself from the directory
        fs.readFile(fileName, 'utf8', (err2, data) =>
        {
            if (err) console.error(err);

            console.log("Data: ");
            console.log(data);
        });
    });
});