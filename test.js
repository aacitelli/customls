const fs = require("fs");

// Reads current directory
fs.readdir(__dirname, (err, files) =>
{
    // Covers error reading the directory
    if (err) console.error(err);

    files.forEach((file) =>
    {
        let filePath = __dirname + "\\" + file;

        // Opens the file itself from the directory
        fs.stat(filePath, (err, stats) =>
        {
            if (err) console.error(err);

            displayLine(filePath, stats); 
        });
    });
});

function displayLine(fileName, stats)
{
    console.log("File Name: " + getFileNameFromFilePath(fileName));
    console.log("File Stats: ");
    console.log(stats);

    console.log("--------------------");
}

function getFileNameFromFilePath(filePath)
{
    // Case where it doesn't have a parent directory (doubt this is possible, but covered nonetheless)
    if (filePath.lastIndexOf("\\") == -1)
    {
        return filePath;
    }

    return filePath.substring(filePath.lastIndexOf("\\") + 1, filePath.length);
}