
'use client'
import React, { useEffect, useState } from "react";
// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/mode-php";
// import "ace-builds/src-noconflict/mode-c_cpp";
// import "ace-builds/src-noconflict/mode-csharp";
// import "ace-builds/src-noconflict/mode-swift";
// import "ace-builds/src-noconflict/mode-typescript";
// import "ace-builds/src-noconflict/theme-monokai";
import "../styles.css";
import styled from "styled-components";
import { BsFullscreen } from "react-icons/bs";
import { FaFolderMinus } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si";
import Responsive from "./responsive";
import pythonLogo from "../../app/assets/pythonBigLogo.png";
import javascriptLogo from '../../app/assets/jsLogo.png'
import javaLogo from "../../app/assets/java.png"
import phpLogo from "../../app/assets/phpLogo.png"
import cppLogo from "../../app/assets/cplusLogo.png";
import csharpLogo from "../../app/assets/Csharp_Logo.png";
import swiftLogo from "./swift-logo.png";
import typescriptLogo from "./typescript-logo.png";
import Image from "next/image";
import Link from "next/link";
import Header from '../../app/components/Header/page'
import CodeEditorFiled from "../../app/components/CodeEditor";

// const EditorContainer = styled.div`
// .ace_gutter {
//   background-color: transparent !important;
// }
// `;


function Code({language}) {
  const [activeTab, setActiveTab] = useState('');
  const [code, setCode] = useState(``);
  const [output,setOutput] = useState([]);

  useEffect(() => {
    handleTabClick(language)
  }, []);

  
  const handleTabClick = (language: React.SetStateAction<string>) => {
    setActiveTab(language);

    switch (language){
      case "python":
        setCode(`# Python code\n\ndef hello():
    return "Hello, Python!"`);
        break;
      case "go":
        setCode(`package main
        import "fmt"
        func main() {
            fmt.Println("Hello, World!")
        }`);
        break;
      case "javascript":
        setCode(`// JavaScript code\nfunction greet() {
    return "Hello, JavaScript!";
}
console.log(greet());
`);
        break;
      case "java":
        setCode(`// Java code\nclass HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`);
        break;
      case "php":
        setCode(`// PHP code\necho "Hello, PHP!";`);
        break;
      case "cpp":
        setCode(`// C++ code\n#include <iostream>\nusing namespace std;\n\nint main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`);
        break;
      case "csharp":
        setCode(`// C# code\nusing System;\n\nclass Program {
    static void Main() {
        Console.WriteLine("Hello, C#!");
    }
}`);
        break;
      case "swift":
        setCode(`// Swift code\nprint("Hello, Swift!")`);
        break;
      case "typescript":
        setCode(`// TypeScript code\nclass Greeter {
    static sayHello() {
        console.log("Hello, TypeScript!");
    }
}

Greeter.sayHello();
`);
        break;
      default:
        setCode("");
        break;
    }
  };
  async function run() {
    const rawResponse = await fetch(`../api/compiler/${language}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({code})
    });
    const content = await rawResponse.json();
    
  if(content.error){
    setOutput(content['error'].split("\n"));
  }else if(content.massege){
    setOutput(content['massege'].split("\n"));
  }else{
    setOutput(content['output'].split("\n"));
  }
  }

  return (
    <>
      <Responsive language={language}/>
      <div className="p- md:block hidden overflow-x-hidden">
      <Header></Header>
        <div className="bg-gray-800 overflow-x-hidden text-white ">
        <hr className="border-2 border-gray-500" />
          <div className="flex md:flex-row flex-col justify-between">
            
            <div className="flex flex-row ">
              <div
                className={`flex-row cursor-pointer flex text-2xl   ${
                  activeTab !== "python" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("Python")}
              >
                <Link href={'/compiler/python'} target="_blank" rel="noopener noreferrer">
                <Image
                  // onClick={() => handleTabClick("Python")}
                  src={pythonLogo}
                  className={`w-8 h-8 absolute left-4 top-20 mt-2 mr-2 `}
                  alt="Python Logo"
                />
                </Link>
                <button
                  // onClick={() => handleTabClick("Python")}
                  className={`${
                    activeTab === "python" ? "bg-gray-700 text-lg rounded-b-lg" : "bg-gray-800 text-base"
                  } font-semibold w-32 ml-4 ${activeTab === "python" ? "" : "hidden"}`}
                >
                  Python
                </button>
              </div>
              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "javascript" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("JS")}
              >
                <div className="flex flex-row">
                <Link href={'/compiler/javascript'} target="_blank" rel="noopener noreferrer">
                  <SiJavascript
                    // onClick={() => handleTabClick("JS")}
                    className="text-yellow-300  w-6 h-6 absolute top-20 mt-2  cursor-pointer ml-4"
                  />
                  </Link>
                  <button
                    // onClick={() => handleTabClick("JS")}
                    className={`${
                      activeTab === "javascript" ? "bg-gray-700 pl-6" : "bg-gray-800 border-r-2 border-gray-700"
                    } font-semibold w-40 mr-2 text-lg ${activeTab === "javascript" ? "" : "hidden"}`}
                  >
                    JavaScript
                  </button>
                </div>
              </div>
              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "java" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("Java")}
              >
                <Link href={'/compiler/java'} target="_blank" rel="noopener noreferrer">
                <Image
                  // onClick={() => handleTabClick("Java")}
                  src={javaLogo}
                  className={`w-8 h-8 absolute top-20 ml-4 mt-2 `}
                  alt="Java Logo"
                />
                </Link>
                <button
                  // onClick={() => handleTabClick("Java")}
                  className={`${
                    activeTab === "java" ? "bg-gray-700 text-lg" : "bg-gray-800 text-base"
                  } font-semibold w-40 mr-2 ${activeTab === "java" ? "" : "hidden"}`}
                >
                  Java
                </button>
              </div>
              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "csharp" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("C#")}
              >
                <Link href={'/compiler/csharp'} target="_blank" rel="noopener noreferrer">
                <Image
                  // onClick={() => handleTabClick("C#")}
                  src={csharpLogo}
                  className={`w-8 h-8 absolute top-20 ml-4 mt-2`}
                  alt="C# Logo"
                />
                </Link>
                <button
                  // onClick={() => handleTabClick("C#")}
                  className={`${
                    activeTab === "csharp" ? "bg-gray-700 text-lg" : "bg-gray-800 text-base"
                  } font-semibold w-40 mr-2 ${activeTab === "csharp" ? "" : "hidden"}`}
                >
                  C#
                </button>
              </div>
              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "php" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("PHP")}
              >
                <Link href={'/compiler/php'} target="_blank" rel="noopener noreferrer">
                <Image
                  // onClick={() => handleTabClick("php")}
                  src={phpLogo}
                  className={`w-8 h-8 absolute top-20 ml-4 mt-2`}
                  alt="PHP Logo"
                />
                </Link>
                <button
                  // onClick={() => handleTabClick("PHP")}
                  className={`${
                    activeTab === "php" ? "bg-gray-700 text-lg" : "bg-gray-800 text-base"
                  } font-semibold w-40 mr-2 ${activeTab === "php" ? "" : "hidden"}`}
                >
                  PHP
                </button>
              </div>
              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "cpp" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("C++")}
              >
                <Link href={'/compiler/cpp'} target="_blank" rel="noopener noreferrer">
                <Image
                  // onClick={() => handleTabClick("C++")}
                  src={cppLogo}
                  className={`w-8 h-8 absolute top-20 ml-4 mt-2`}
                  alt="C++ Logo"
                />
                </Link>
                <button
                  // onClick={() => handleTabClick("C++")}
                  className={`${
                    activeTab === "cpp" ? "bg-gray-700 text-lg" : "bg-gray-800 text-base"
                  } font-semibold w-40 mr-2 ${activeTab === "cpp" ? "" : "hidden"}`}
                >
                  C++
                </button>
              </div>

              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "typescript" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("JS")}
              >
                <div className="flex flex-row">
                <Link href={'/compiler/typescript'} target="_blank" rel="noopener noreferrer">
                  <SiJavascript
                    // onClick={() => handleTabClick("JS")}
                    className="text-yellow-300  w-6 h-6 absolute top-20 mt-2  cursor-pointer ml-4"
                  />
                  </Link>
                  <button
                    // onClick={() => handleTabClick("JS")}
                    className={`${
                      activeTab === "typescript" ? "bg-gray-700 pl-6" : "bg-gray-800 border-r-2 border-gray-700"
                    } font-semibold w-40 mr-2 text-lg ${activeTab === "typescript" ? "" : "hidden"}`}
                  >
                    TypeScript
                  </button>
                </div>
              </div>

              <div
                className={`flex-row cursor-pointer flex text-2xl ${
                  activeTab !== "go" ? "w-16 border-r-2 border-gray-500" : ""
                }`}
                // onClick={() => handleTabClick("JS")}
              >
                <div className="flex flex-row">
                <Link href={'/compiler/go'} target="_blank" rel="noopener noreferrer">
                  <SiJavascript
                    // onClick={() => handleTabClick("JS")}
                    className="text-yellow-300  w-6 h-6 absolute top-20 mt-2  cursor-pointer ml-4"
                  />
                  </Link>
                  <button
                    // onClick={() => handleTabClick("JS")}
                    className={`${
                      activeTab === "go" ? "bg-gray-700 pl-6" : "bg-gray-800 border-r-2 border-gray-700"
                    } font-semibold w-40 mr-2 text-lg ${activeTab === "go" ? "" : "hidden"}`}
                  >
                    Go
                  </button>
                </div>
              </div>
              
            </div>

            <div className="pr-10 md:pt-4 pl-9 mb-3">
              <button className="bg-sky-500 font-semibold rounded-xl w-64 h-10">
                Learn Python
              </button>
            </div>
          </div>
          {/* <hr className="border-2 border-gray-500" /> */}
          <div className="pl-4 pr-4 ">
            <div className="bg-[#1f3040] md:w-full text-[#9EB2D2] scroll-pl-6 w-2 h-80 rounded-b-md pt-4 overflow-hidden">
              <CodeEditorFiled code={code} setCode={setCode}/>
              {/* <EditorContainer>
                <AceEditor
                  mode={
                    activeTab === "python"
                      ? "python"
                      : activeTab === "javascript"
                      ? "javascript"
                      : activeTab === "java"
                      ? "java"
                      : activeTab === "php"
                      ? "php"
                      : activeTab === "cpp"
                      ? "c_cpp"
                      : activeTab === "csharp"
                      ? "csharp"
                      : activeTab === "swift"
                      ? "swift"
                      : activeTab === "typeScript"
                      ? "typescript"
                      : ""
                  }
                  theme="monokai"
                  name={
                    activeTab === "python"
                      ? "python-editor"
                      : activeTab === "javascript"
                      ? "javascript-editor"
                      : activeTab === "java"
                      ? "java-editor"
                      : activeTab === "php"
                      ? "php-editor"
                      : activeTab === "cpp"
                      ? "cpp-editor"
                      : activeTab === "csharp"
                      ? "csharp-editor"
                      : activeTab === "swift"
                      ? "swift-editor"
                      : activeTab === "typeScript"
                      ? "typescript-editor"
                      : ""
                  }
                  value={code}
                  fontSize={14}
                  onChange={(newCode) => setCode(newCode)}
                  editorProps={{ $blockScrolling: true, highlightActiveLine: false }}
                  showPrintMargin={false}
                  style={{
                    borderRadius: "10px",
                    width: "full",
                    height: "260px",
                    background: "#374151",
                    fontSize: "20px",
                    paddingTop:"20px",
                  }}
                  setOptions={{
                    highlightActiveLine: false,
                  }}
                />
              </EditorContainer> */}
            </div>
          </div>
          <div className="bg-gray-700 mt-5 flex justify-around h-20">
            <div className="p-2 w-full flex justify-around">
              <button onClick={run} className="bg-sky-500 w-1/2 h- ">
                <div className="flex flex-row  justify-center">
                  <VscDebugStart size={35} className="" />
                  <p className="mt-1 font-semibold">Run Test</p>
                </div>
              </button>
            </div>
          </div>
          <div className="p-3">
            <h1 className="text-xl font-semibold ml-5 mb-2">Compiler</h1>
            <div className="h-48 bg-gray-700 rounded-xl">
              <div className="p-4">
                <div className="flex flex-col float-right scroll-pl-6 "></div>
                <div className="float-left">
                {
                  output && output.map((item,index)=>{
                    return <p className="text-center" key={index}>{item}</p> 
                  })
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Code;
