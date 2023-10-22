const { exec } = require('node:child_process');
import { fileRemover } from '../helper/removerFunctions';

export async function typescriptCompiler(filePath){
    return new Promise((resolve, reject) => {
        // Set the PATH environment variable explicitly for ubuntu only
			//FIXME - uncomment below line when uploading to ec2
			// process.env.PATH = `${process.env.PATH}:/usr/local/bin`;

			// Compile and run
			exec(`tsc ${filePath}`, async (compileErr) => {
				if (compileErr) {
					console.error(`Compilation error: ${compileErr}`);

					fileRemover(filePath);
                    resolve({massege:'Syntax error in the code.',s:400})
					
				} else {
					// Execute the compiled program and capture the output
					exec(`node ${filePath.replace('.ts', '.js')}`, (execErr, stdout, stderr) => {
						// console.log('.js filePath', filePath.replace('.ts', '.js'));
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
							fileRemover(`${filePath.replace('.ts', '.js')}`);
						}
					});
                }
			});
    });
}