const path = require('path');
const https = require('https');
const fs = require('fs');

const downloadPDF = (url, fileName) => {
    const filePath = path.resolve(__dirname, '../data');
    const file = fs.createWriteStream(`${filePath}/${fileName}.pdf`);

    const request = https.get(url, function (response) {
        response.pipe(file);
        file.on("finish", () => {
            file.close();
            console.log("Download Completed");
        });
    });
}

exports.downloadPDF = downloadPDF;