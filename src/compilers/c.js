const { exec } = require('node:child_process');
const path = require('node:path');
import { fileRemover } from '../helper/removerFunctions';

export async function cCompiler(filePath,langDir){
    return new Promise((resolve, reject) => {
        // Compile the program using the C compiler (e.g., gcc)
			exec(`gcc ${filePath}`, async (compileErr) => {
				if (compileErr) {
					console.error(`Compilation error: ${compileErr}`);

					fileRemover(filePath);
                    resolve({massege:'Syntax error in the code.',s:400})
					
				} 
                else {
					// Execute the compiled program and capture the output
					exec(`a.exe`, async (execErr, stdout, stderr) => {
						let status;
						if (execErr) {
							console.error(`Execution error: ${execErr}`);
							status = true;
                            resolve({massege:'An error occurred while executing the code.',s:500})
						} else {
							// console.log(`Program output: ${stdout}`);
							status = true;
                            resolve({massege:stdout.trim(),s:200})
						}

						if (status) {
							fileRemover(filePath);
							fileRemover('./a.exe');
						}
					});
				}
			});
    });
}