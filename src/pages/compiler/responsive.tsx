
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai';
import { BsFillFileEarmarkFill, BsThreeDotsVertical } from 'react-icons/bs';
import { VscDebugStart } from "react-icons/vsc";
import { BsFillShareFill } from "react-icons/bs";;
// import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/mode-java";
// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-php";
// import 'ace-builds/src-noconflict/theme-monokai';
import styled from 'styled-components';
import Cplus from '../../app/assets/cplusLogo.png'
import csharp from '../../app/assets/Csharp_Logo.png'
import javalogo from '../../app/assets/java.png';
import phplogo from '../../app/assets/phpLogo.png'
import jsLogo from '../../app/assets/jsLogo.png';
import {RiArrowDropDownLine,RiDropdownList} from 'react-icons/ri';
import Image from 'next/image';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from 'next/link';
import CodeEditorFiled from '../../app/components/CodeEditor';

const BlurredBackground = styled.div`
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  z-index: 10;
`;
function Responsive(language) {
   language = language.language;
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [code, setCode] = useState(``);
  const [heading, setHeading] = useState("Python");
  const [output,setOutput] = useState([]);
  const [logoUrl, setLogoUrl] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png?20220821155029");

  useEffect(() => {
    handleTabClick(language)
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
//   const EditorContainer = styled.div`
//   .ace_gutter {
//     background-color: transparent !important;
//   }
// `;
<style>
{`
  .ace_content .ace_layer.ace_marker-layer .ace_selected-word {
    background-color: #F59E0B; /* Background color for the selected word */
    color: #1F2937; /* Text color for the selected word */
  }
`}
</style>
  const handleTabClick = (language: React.SetStateAction<string>) => {
    
    setActiveTab(language);

    // Set code content based on the tab clicked
    switch (language) {
      case "python":
        setCode(`# Python code\n\ndef hello():
    return "Hello, Python!"`);
        break;
      case "javascript":
        setCode(`// JavaScript code\nfunction greet() {
    return "Hello, JavaScript!";
}`);
        break;
      case "go":
        setCode(`package main
        import "fmt"
        func main() {
            fmt.Println("Hello, World!")
        }`);
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

    // Update the heading and logo based on the tab clicked
    
    if (language === "javascript") {
      setLogoUrl("https://cdn-icons-png.flaticon.com/128/5968/5968292.png");
      setHeading("JavaScript");
    } 
    else if (language === "java") {
      setLogoUrl("https://cdn-icons-png.flaticon.com/128/5968/5968282.png");
      setHeading('Java');
    } 
    else if (language === "php") {
      setLogoUrl("https://cdn-icons-png.flaticon.com/128/5968/5968332.png");
      setHeading('PHP');
    } 
    else if (language === "cpp") {
      setLogoUrl("https://cdn-icons-png.flaticon.com/128/6132/6132222.png");
      setHeading('C++');
    } 
    else if (language === "csharp") {
      setLogoUrl("https://cdn-icons-png.flaticon.com/128/6132/6132221.png");
      setHeading('C#');
    }
    else {
      setLogoUrl("URL_TO_PYTHON_LOGO");
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
    {showDropdown && <BlurredBackground />}
      <div className='md:hidden block p-2'>
        <div className='bg-gray-800 text-white'>
          <div className='flex flex-row justify-center mb-3'>
          <Link href={'/compiler/python'} target="_blank" rel="noopener noreferrer">
          <BiLeftArrowAlt  className="mt-7 mr-8 top-24 w-10 h-10 p-1 bg-gray-600 rounded-full"></BiLeftArrowAlt>
          </Link>

            <img width={'9'} height={'8'} src={logoUrl} alt="" className='w-9 h-9 mt-7' />
            
            
            
            <Link
            className="text-2xl pt-8 ml-2 font-bold"
             href="/Tutorials">Learn {heading}</Link>
            <span className='w-10 h-10 rounded-full'>
            </span>
          </div>
          {showDropdown && (
            
            <div className="flex flex-col justify-center mt-5 bg-[#1e2736]   rounded-xl gap-3 absolute z-10 px-10 sm:left-44 max-sm:left-24 max-[500px]:left-1   py-10">
              <h1 className='text-2xl font-bold'>Compile</h1>
             <AiOutlineClose onClick={toggleDropdown} className="bg-gray-400 absolute top-5 right-4 rounded-full w-8 h-8 p-2"></AiOutlineClose>
             <Link href={'/compiler/python'} target="_blank" rel="noopener noreferrer">
              <div className=" rounded-lg flex justify-center bg-blue-700 px-10 py-4 text-2xl">
  <img
    className='w-8 h-8 mr-16'
    // onClick={() => handleTabClick("Python")}
    src={logoUrl}
    alt={'Python'}
  />
  <button
    // onClick={() => handleTabClick("Python")}
    className={`${
      activeTab === "python" ? "" : ""
    } font-bold mr-16 text-white  ${
      activeTab === "python" ? "" : ""
    }`}><p>Python</p>
  </button>
</div>
</Link>
<Link href={'/compiler/javascript'} target="_blank" rel="noopener noreferrer">
              <div className=" rounded-lg flex justify-center bg-black px-10 py-4 text-2xl ">
                <Image 
                className='w-8 h-8 mr-10'
                // onClick={() => handleTabClick("JavaScript")}
                src={jsLogo} alt={'vj'}></Image>
                <button
                  // onClick={() => handleTabClick("JavaScript")}
                  className={`${
                    activeTab === "javascript" ? "" : ""
                  } font-semibold mr-2 text-yellow-300   ${activeTab === "javascript" ? "" : ""}`}><p>Java Script</p>
                </button>
                
              </div>
              </Link>

              <Link href={'/compiler/java'} target="_blank" rel="noopener noreferrer">
              <div className=" rounded-lg flex justify-around bg-[#20232a] px-10 py-4 text-2xl">
                <Image 
                className='w-8 h-8 mr-16'
                // onClick={() => handleTabClick("Java")}
                src={javalogo} alt={'vj'}

                ></Image>
                <button
                  // onClick={() => handleTabClick("Java")}
                  className={`${
                    activeTab === "java" ? "" : ""
                  } font-bold mr-16 text-blue-600   ${activeTab === "java" ? "" : ""}`}><p>Java</p>
                </button>
              </div>
              </Link>

              <Link href={'/compiler/php'} target="_blank" rel="noopener noreferrer">
              <div className=" rounded-lg flex justify-around bg-[#505b93] px-10 py-4 text-2xl ">
                <Image 
                className='w-8 h-8 mr-10'
                // onClick={() => handleTabClick("php")}
                src={phplogo} alt={'vj'}

                ></Image>
                <button
                  // onClick={() => handleTabClick("PHP")}
                  className={`${
                    activeTab === "php" ? "" : ""
                  } font-semibold mr-16 text-white   ${activeTab === "php" ? "" : ""}`}><p>PHP</p>
                </button>
              </div>
              </Link>

              <Link href={'/compiler/cpp'} target="_blank" rel="noopener noreferrer">
              <div className=" rounded-lg flex justify-around bg-[#004d9d] px-10 py-4 text-2xl ">
                <Image 
                className='w-8 h-8 mr-10'
                // onClick={() => handleTabClick("C++")}
                src={Cplus} alt={'vj'}

                ></Image>
                <button
                  // onClick={() => handleTabClick("C++")}
                  className={`${
                    activeTab === "cpp" ? "" : ""
                  } font-bold mr-14 text-white   ${activeTab === "cpp" ? "" : ""}`}><p>C++</p>
                </button>
              </div>
              </Link>

              <Link href={'/compiler/csharp'} target="_blank" rel="noopener noreferrer">
              <div className=" rounded-lg flex justify-around bg-[#2f3d58]  px-10 py-4 text-2xl ">
                <Image 
                width={'8'}
                height={'8'}
                className='w-8 h-8 mr-12'
                // onClick={() => handleTabClick("C#")}
                src={csharp} alt={'vj'}

                ></Image>
                <button
                  // onClick={() => handleTabClick("C#")}
                  className={`${
                    activeTab === "csharp" ? "" : ""
                  } font-semibold mr-20 text- ${activeTab === "csharp" ? "" : ""}`}><p>C#</p>
                </button>
              </div>
              </Link>
            </div>
          )}
        </div>
        {/* <div className="pr-10 md:pt-4 pl-9 mb-3">
              <button className="bg-sky-500 font-semibold rounded-xl w-64 h-10">
                Learn Python
              </button>
            </div> */}
        <div className='flex justify-center pr-10 pt-4 pl-9 mb-3 '>
          <button onClick={toggleDropdown} className=' text-xl  mb-3 flex justify-center mt-5 bg-sky-500 pt-1   rounded-xl w-64 h-10 text-white font-semibold '>   {heading} Compiler
          <RiArrowDropDownLine className="" size={40}></RiArrowDropDownLine>
           </button>
          </div>

<div className='pl-4 pr-4 mb-6'>
  <div className='bg-gray-700 text-[#9EB2D2] mb-7 w-[100%] h-96 rounded-xl'>
    <CodeEditorFiled code={code} setCode={setCode}/>
    {/* <AceEditor
      mode={
        activeTab === "Python"
          ? "python"
          : activeTab === "JavaScript"
            ? "javascript"
            : activeTab === "Java"
              ? "java"
              : activeTab === "PHP"
                ? "php"
                : activeTab === "C++"
                  ? "c_cpp"
                  : activeTab === "C#"
                    ? "csharp"
                    : activeTab === "Swift"
                      ? "swift"
                      : activeTab === "TypeScript"
                        ? "typescript"
                        : ""
      }
      theme="monokai" // Use the monokai theme
      name={
        activeTab === "Python"
          ? "python-editor"
          : activeTab === "JavaScript"
            ? "javascript-editor"
            : activeTab === "Java"
              ? "java-editor"
              : activeTab === "PHP"
                ? "php-editor"
                : activeTab === "C++"
                  ? "cpp-editor"
                  : activeTab === "C#"
                    ? "csharp-editor"
                    : activeTab === "Swift"
                      ? "swift-editor"
                      : activeTab === "TypeScript"
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
        width: "90%",
        height: "260px",
        background: "#374151",
        fontSize: "20px",

      }}
      setOptions={{
         // Enable live autocompletion
        highlightActiveLine: false, // Disable line highlighting when clicked
        
      }}
    /> */}

  </div>
</div>

<div className=' flex mb-3 flex-row justify-around text-white'>
  <span className='bg-gray-600 rounded-full w-12 h-12 text-4xl'><BsFillFileEarmarkFill className='p-2 ml-1 mt-1' /></span>

  <span onClick={run} className='bg-sky-500 rounded-full w-12 h-12 text-4xl'><VscDebugStart className='ml-2 mt-1 p-1' /></span>
  <span className='bg-gray-600 rounded-full w-12 h-12 text-4xl'><BsFillShareFill className='p-2 ml-1 mt-1 ' /></span>
</div>

<div className='p-5'>
  <h4 className='font-semibold text-xl text-white' >Compiler</h4>
      
  <div className='w-full h-52 mt-4 bg-gray-700 rounded-2xl'>

    <div className='flex justify-between p-3'>
      <div className='text-white'>
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
)
}

export default Responsive;
  