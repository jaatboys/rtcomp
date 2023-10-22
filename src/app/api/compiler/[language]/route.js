import { cCompiler } from "../../../../compilers/c";
import { csharpCompiler } from "../../../../compilers/c#";
import { cppCompiler } from "../../../../compilers/c++";
import { goCompiler } from "../../../../compilers/go";
import { javaCompiler } from "../../../../compilers/java";
import { javascriptCompiler } from "../../../../compilers/javascript";
import { phpCompiler } from "../../../../compilers/php";
import { pythonCompiler } from "../../../../compilers/python";
import { typescriptCompiler } from "../../../../compilers/typescript";
import { rCompiler } from '../../../../compilers/r'
import { generateFile } from "../../../../helper/generatorFunctions";
import { NextResponse } from "next/server";

export async function POST(request,{params}){
    try {
		const language = params.language;
		const { code, args} = await request.json();
		let codeArgs;

		if (!code || !language) {
			return NextResponse.json({ error: 'Code or language cannot be empty.'},{status:400})
		}

		if (!args) {
			codeArgs = [];
		} else {
			codeArgs = [...args];
		}

		const { filePath, langDir, statusCode } = await generateFile(language, code);
	    		
		statusCode ? console.info('temp file created') : console.warn('failed creating temp file');

		if (statusCode !== true) throw new Error('Error while file creation and code execution.');
		else {

			let massege;
			let s;
			
			if(language === 'python'){
				 const res = await pythonCompiler(filePath,langDir);
				 massege = res.massege;
				 s = res.s;
			}
			if(language === 'javascript'){
				const res = await javascriptCompiler(code);
				massege = res.massege;
				s = res.s;
			}
			if(language === 'java'){
				const res = await javaCompiler(filePath,langDir);
				massege = res.massege;
				s = res.s;
			}
			if(language === 'c'){
				const res = await cCompiler(filePath,langDir);
				massege = res.massege;
				s = res.s;
			}
			if(language === 'cpp'){
				const res = await cppCompiler(filePath);
				massege = res.massege;
				s = res.s;
			}
			if(language === 'php'){
				const res = await phpCompiler(filePath);
				massege = res.massege;
				s = res.s;
			}
			if(language === 'go'){
				const res = await goCompiler(filePath);
				massege = res.massege;
				s = res.s;
			}
			if(language === 'typescript'){
				const res = await typescriptCompiler(filePath);
				massege = res.massege;
				s = res.s;
			}
			if(language === 'csharp'){
				const res = await csharpCompiler(filePath);
				massege = res.massege;
				s = res.s;
			}
			if(language === 'r'){
				const res = await rCompiler(filePath);
				massege = res.massege;
				s = res.s;
			}
		        
			if(s === 200) return NextResponse.json({ output: massege },{status:200});
			
			if(s === 400) return NextResponse.json({ error: massege},{status:400});
	
			if(s === 500) return NextResponse.json({ error: massege},{status:500});
			
		  return NextResponse.json({massege:"Please Select a Language \r\n"},{status:400})
		}
		
	} catch (error) {
		console.log(error)
        return NextResponse.json({ error: 'An error occurred while processing the request. \r\n'},{status:500})
	}
}