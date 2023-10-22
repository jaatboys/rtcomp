const { exec } = require('node:child_process');
import { fileRemover } from '../helper/removerFunctions';

export async function rCompiler(filePath){
    return new Promise((resolve, reject) => {
        // Compile the PHP code
			exec(`Rscript ${filePath}`, async (executionErr, stdOut, stdErr) => {
				let status;
				if (executionErr) {
					console.error('error while execution', executionErr);
					status = true;
                    resolve({massege:"Syntax error in the code.",s:400})
					
				} else {
					let output;
					stdOut ? (output = stdOut) : (output = stdErr);
					status = true;
                    resolve({massege:output,s:200})
				}
				fileRemover(filePath);
			});
    });
}