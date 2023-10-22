const { exec } = require('node:child_process');
import { fileRemover } from '../helper/removerFunctions';

export async function cppCompiler(filePath){
    return new Promise((resolve, reject) => {
        // Compile the program using the C++ compiler (e.g., g++)
			exec(`g++ ${filePath} -o ${filePath}.exe`, async (compileErr) => {
				if (compileErr) {
					console.error(`Compilation error: ${compileErr}`);

					fileRemover(filePath);
                    resolve({massege:'Syntax error in the code.',s:400})
					
				} else {
					// Execute the compiled program and capture the output
					exec(`${filePath}.exe`, async (execErr, stdout, stderr) => {
						let status;
						if (execErr) {
							console.error(`Execution error: ${execErr}`);
							status = true;
                            resolve({massege:'An error occurred while executing the code.',s:500})
						} else {
							console.log(`Program output: ${stdout}`);
							status = true;
                            resolve({massege:stdout,s:200})
						}

						if (status) {
							fileRemover(filePath);
							fileRemover(`${filePath}.exe`);
						}
					});
				}
			});
    });
}