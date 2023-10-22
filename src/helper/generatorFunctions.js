//* helper function file that generates a new file and writes code to it & returns that file's path.

// importing packages
const fs = require('node:fs');
const path = require('node:path');
const { v4: uuid } = require('uuid');

// due to type set as Esmodule , must manually define __filename & __dirname by using fileURLToPath
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.resolve(path.dirname(__filename));
// console.log('dirname: ', __dirname);
// console.log('filename: ', __filename);

const tempDir = path.join(__dirname, '../temp');
const typescriptDir = path.join(tempDir, './ts');
const javaDir = path.join(tempDir, './java');
const cppDir = path.join(tempDir, './cpp');
const cDir = path.join(tempDir, './c');
const csharpDir = path.join(tempDir, './csharp');
const pythonDir = path.join(tempDir, './python');
const phpDir = path.join(tempDir, './php');
const goDir = path.join(tempDir, './go');
const swiftDir = path.join(tempDir, './swift');
const rDir = path.join(tempDir, './r');

 export const generateFile = async (language, content) => {
	if (!fs.existsSync(tempDir)) {
		fs.mkdir(tempDir, { recursive: true }, (err) => {
			if (err) {
				console.log(`Error while creating temp folder: ${err}`);
				throw new Error('Error while creating temp folder.');
			}
		});
	}

	const jobId = uuid();
	let filename;
	// language === 'java' || 'cs' ? (filename = `Main.${language}`) : (filename = `${jobId}.${language}`);
	let langDir;
	switch (language) {
		case 'java':
			fs.mkdir(`${javaDir}`, { recursive: true }, (err) => {
				if (err) {
					throw new Error('Error While creating langDir');
				}
			});
			filename = `Main.java`;
			langDir = javaDir;
			break;
		case 'go':
			fs.mkdir(`${goDir}`, { recursive: true }, (err) => {
				if (err) {
					throw new Error('Error While creating langDir');
				}
			});
			filename = `${jobId}.go`;
			langDir = goDir;
			break;

		case 'python':
			fs.mkdir(`${pythonDir}`, { recursive: true }, (err) => {
				if (err) {
					throw new Error('Error While creating langDir');
				}
			});
			filename = `${jobId}.py`;
			langDir = pythonDir;
			break;

		case 'c':
			fs.mkdir(`${cDir}`, { recursive: true }, (err) => {
				if (err) {
					throw new Error('Error While creating langDir');
				}
			});
			filename = `${jobId}.c`;
			langDir = cDir;
			break;

		case 'cpp':
			fs.mkdir(`${cppDir}`, { recursive: true }, (err) => {
				if (err) {
					throw new Error('Error While creating langDir');
				}
			});
			filename = `${jobId}.cpp`;
			langDir = cppDir;
			break;

		case 'typescript':
			fs.mkdir(`${typescriptDir}`, { recursive: true }, (err) => {
				if (err) {
					throw new Error('Error While creating langDir');
				}
			});
			filename = `${jobId}.ts`;
			langDir = typescriptDir;
			break;

		case 'csharp':
			fs.mkdir(`${csharpDir}`, { recursive: true }, (err) => {
				if (err) {
					throw new Error('Error While creating langDir');
				}
			});
			filename = `${jobId}.cs`;
			langDir = csharpDir;
			break;

		case 'php':
			fs.mkdir(`${phpDir}`, { recursive: true }, (err) => {
				if (err) {
					throw new Error('Error While creating langDir');
				}
			});
			filename = `${jobId}.php`;
			langDir = phpDir;
			break;

		case 'r':
			fs.mkdir(`${rDir}`, { recursive: true }, (err) => {
				if (err) {
					throw new Error('Error While creating langDir');
				}
			});
			filename = `${jobId}.R`;
			langDir = rDir;
			break;

		default:
			filename = `${jobId}.${language}`;
			langDir = tempDir;
			break;
	}

	const filePath = path.join(langDir, filename);
    let statusCode;
	try {
		fs.writeFile(filePath, content, (writeErr) => {
			if (writeErr) {
				console.error(`Error writing code to file: ${writeErr}`);
			}
		});
		statusCode = true;
	} catch (error) {
		console.log('Error in fileGenerator: ', error);
		statusCode = false;
	}
	return { filePath, langDir, statusCode };
};

