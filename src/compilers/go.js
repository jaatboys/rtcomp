const { exec } = require('node:child_process');
import { fileRemover } from '../helper/removerFunctions';

export async function goCompiler(filePath){
    return new Promise((resolve, reject) => {
        // Set the PATH environment variable explicitly for ubuntu only
			//FIXME - uncomment below line when uploading to ec2
			//process.env.PATH = `${process.env.PATH}:/usr/local/go/bin`;
			// Compile the PHP code
			exec(`go run ${filePath}`, async (executionErr, stdOut, stdErr) => {
				if (executionErr) {
					console.error('error while execution', executionErr);
					fileRemover(filePath);
                    resolve({massege:'Syntax error in the code.',s:400})
				
				} else {
					let output;
					stdOut ? (output = stdOut) : (output = stdErr);
					fileRemover(filePath);
                    resolve({massege:output,s:200})
				}
			});
    });
}