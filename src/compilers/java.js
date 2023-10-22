const { exec } = require('node:child_process');
const path = require('node:path');
import { fileRemover } from '../helper/removerFunctions';

export async function javaCompiler(filePath,langDir){
    return new Promise((resolve, reject) => {
        // Compile the Java code
			exec(`javac ${filePath}`, (compileError, compileStdout, compileStderr) => {
				if (compileError) {
					console.error(compileError);

					fileRemover(filePath);
                    resolve({massege:'Syntax error in the code.',s:400})
				} else {
					// Execute the compiled Java code
					exec(`java -cp ${langDir} ${filePath.substring(filePath.lastIndexOf('M'), filePath.lastIndexOf('.'))}`, async (executeError, executeStdout, executeStderr) => {
						let status;
						if (executeError) {
							console.error(executeError);
							status = true;
                            resolve({massege:'An error occurred while executing the code.',s:500})
						} else {
							const output = executeStderr || executeStdout;
							status = true;
                            resolve({massege: output.trim(), s:200})
						}

						if (status) {
							fileRemover(filePath);
							fileRemover(path.join(langDir, 'Main.class'));
						}
					});
				}
			});
    });
}