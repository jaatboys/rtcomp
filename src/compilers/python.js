const { exec} = require('node:child_process');
const path = require('node:path');
import { fileRemover, folderRemover } from "../helper/removerFunctions";

export function pythonCompiler(filePath,langDir){
        
		 return new Promise((resolve, reject) => {
	 // Execute the Python code
		 exec(`py -m py_compile ${filePath}`, (syntaxError, stdout, stderr) => {
				if (syntaxError) {
					console.error(syntaxError);
					fileRemover(filePath);
                     resolve({massege:'Syntax error in the code.\r\n',s:400})
				} else {
				
					exec(`py ${filePath}`, async (executeError, executeStdout, executeStderr) => {
						let status;
						let massege;
						let s;
						if (executeError) {
							console.error(executeError);
							status = true;
							  massege = 'An error occurred while executing the code.\r\n';
							  s = 500;
						}else{
							const output = executeStderr || executeStdout;
							console.log('output is: ', output);
							status = true;
							massege = output.trim();
							s = 200;
						}
						if (status) {
							fileRemover(filePath);
							// to delete .pyc file created by python3.
							fileRemover(path.join(langDir, `./__pycache__/${filePath.slice(filePath.lastIndexOf('\\'), filePath.lastIndexOf('.'))}.cpython-311.pyc`));
						}
						resolve({massege,s})
					});
				
				}
			});
	});
}