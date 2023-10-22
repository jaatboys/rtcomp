// Compile and execute JavaScript code
// importing packages
const { spawn } = require('node:child_process');

export async function javascriptCompiler(code){
	return new Promise((resolve, reject) => {
	// Create a child process to execute the JavaScript code
	const childProcess = spawn('node', ['-e', code]);

	let output = '';

	// Collect the output from the child process
	childProcess.stdout.on('data', (data) => {
		output += data.toString();
	});

	// Handle any errors that occur during execution
	childProcess.on('error', (error) => {
		console.error(error);
        resolve({massege:'An error occurred while executing the code.',s:500});
	});

	// Handle the process exit event
	childProcess.on('exit', (code) => {
		if (code === 0) {
			resolve({massege: output.trim() , s:200});
		} else {
            resolve({massege:'Syntax error in the code.',s:400});
		}
	});
});
};
