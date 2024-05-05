const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'js');
const docsPath = path.join(__dirname, 'docs');
const jsFiles = fs.readdirSync(jsPath).filter(file => file.endsWith('.js'));

const filesString = jsFiles.map(file => `"${path.join(jsPath, file)}"`).join(' ');

exec(`jsdoc ${filesString} -d "${docsPath}"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Execution error: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
});
