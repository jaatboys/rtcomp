const { unlink, rm } = require('node:fs');

export const fileRemover = (filePath) => {
	unlink(filePath, async (err) => {
		try {
			if (err) throw new Error(err);
			console.log('successfully deleted: ', filePath.slice(filePath.lastIndexOf('.')), 'file');
		} catch (error) {
			console.log(err);
		}
	});
};

export const folderRemover = (filePath) => {
	rm(filePath, { recursive: true, force: true }, async (err) => {
		try {
			if (err) throw new Error(err);
			console.log('successfully deleted: ', filePath.slice(filePath.lastIndexOf('.')), 'file');
		} catch (error) {
			console.log(err);
		}
	});
};

