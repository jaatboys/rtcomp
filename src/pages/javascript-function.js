import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Footer from "../app/components/Footer/Footer";
import Header from "../app/components/Header/page";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import JavaScriptBar from "./JsBar";
import "./styles.css";
import { useRouter } from "next/router";
import CodeEditorFiled from "../app/components/CodeEditor";
import Layout from '../app/layout'



const code = `
Method name ( parenthesis or parameter-list ) 
{ 
 //body of a method 
} 
    

   `;

const code1 = `

</script> 
  function teachers()
   { 
    document.write("teaching");
   } 
  document.write("Start method" + "<br>");
  teachers()
</script> 
    

    `;

    const code2 =`
    </script> 
  function Code()
    { 
     document.write("CodeExampler" + "<br>");
    } 
  function Ram()
    { 
     document.write("Hello Ram" + "<br>");
    } 
 
   Code()
   Ram()
   Code()
   Code()
   Code()
</script>     
    `
const code3 =`
</script> 
  function teachers()
   { 
    document.write("Teaching" + "<br>");
   } 
  function students()
   { 
    document.write("Learn");
   } 

  document.write("Start Class" + "<br>");

  teachers()
  students()
</script> 
      `

const code4=`
</script> 
  function teachers()
   { 
    document.write("Teaching" + "<br>");
   } 
  function students()
   { 
    document.write("Learn" + "<br>");
   } 

  document.write("Start Class" + "<br>");

  teachers()
  students()
  Peon()

  function Peon()
   { 
    document.write("Learn" + "<br>");
   } 
</script> `



export default function JavaScriptVariables() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/javascript-user-define-function"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/javascript-continue "; // Update with your actual URL

    // Navigate to the previous page
    router.push(previousPageUrl);
  };
  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const fileName = pathArray[pathArray.length - 1];

    // Add spaces between uppercase letters and capitalize the first letter of each word
    const formattedFileName = fileName.replace(/([A-Z])/g, " $1").trim();

    // Capitalize the first letter of the entire string
    const capitalizedFileName =
      formattedFileName.charAt(0).toUpperCase() + formattedFileName.slice(1);

    // Set the page title for client-side rendering
    setPageTitle(capitalizedFileName);
  }, []);

  return (
    <Layout>
    <div className=" bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins">
      <Header></Header>
      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
        {/* Python bur component   */}
        <JavaScriptBar
          ListActioveMobile={ListActioveMobile}
          setListActiveMobile={setListActiveMobile}
        ></JavaScriptBar>

        <div className="w-full relative ">
          {/* only mobile mode show */}
          <button
            onClick={() => setListActiveMobile(!ListActioveMobile)}
            className="absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white"
          >
            All Topics
          </button>
          {/* ----------------- */}
          <div className="flex justify-between mt-3">
            <button
              onClick={handlePrevious}
              className="flex text-lg gap-1 text-[#9EB2D2] no-underline"
            >
              <BsFillArrowLeftCircleFill className="text-4xl mt-1" />{" "}
              <span className="mt-2">Previous</span>
            </button>
            <p className="mt-3 lg:mt-0 text-3xl no-underline text-[#01B6FF] capitalize">
              {pageTitle}
            </p>
            <button
              onClick={handleNext}
              className="flex text-lg gap-1 text-[#9EB2D2] no-underline"
            >
              <span className="mt-2">Next</span>
              <BsFillArrowRightCircleFill className="text-4xl mt-1" />
            </button>
          </div>
          <div className="space-y-3">
         
            <p>The Javascript Function contains one more statement, and each method performs only one task.
Each method gives a name, and after this name is used to call the method.</p>
            
<h1 className="text-[#01B6FF] mt-3 lg:text-xl">
Methods in Javascript Syntax:
            </h1>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
Methods in Javascript Syntax:</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code} onChange={undefined} />
            </div>
            
            <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]">
Q-Write a Program use one method in Javascript?
</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code1} onChange={undefined} />
            </div>
            <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
              Input:
            </h5>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
            start method <br/>
teaching   </p></div>
    
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 
                
Q-Write a Program Use two methods and create different objects for different methods in Javascript?
                 </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code2} onChange={undefined} />
            </div>
            <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
              Input
            </h5>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">

            CodeExampler <br/>
Hello Ram <br/>
CodeExampler <br/>
CodeExampler <br/>
CodeExampler     <br/>
    </p></div>
    
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]">
                  
Q-Write a Program Use two methods and create different objects for different methods in Javascript?</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code3} onChange={undefined} />
            </div>
            <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
              Input
            </h5>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
   
Start Class <br/>
Teaching <br/>
Learn   <br/>
    </p></div>
    <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Important:</h1>
    <div class="text-[#9EB2D2]"><p>You create multiple objects you do, but programming run speed decreases, creating fewer objects to gain high speed and <a class="text-blue-600" target="_blank" href="https://www.codeexampler.com/javascript-dom-method">JavaScript Dom Method tutorial for Beginners</a>.</p></div>
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]">
                  
                  Q-Write a Program uses a different class on Javascript Method Example?</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code4} onChange={undefined} />
            </div>
            <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
              Input
            </h5>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
   
            Start Class <br/>
 Teaching <br/>
 Learn <br/>
 Ring the bell  
    </p></div>
    
    
            <div className="flex justify-between mx-6 sm:mx-12 mt-3 mb-3">
              <button
                onClick={() => handlePrevious()}
                className=" flex  text-lg gap-1 text-[#9EB2D2] no-underline "
              >
                <BsFillArrowLeftCircleFill className="text-4xl mt-1"></BsFillArrowLeftCircleFill>{" "}
                <span className="mt-2">Previous</span>
              </button>
              <button
                onClick={() => handleNext()}
                className=" flex text-lg gap-1 text-[#9EB2D2] no-underline "
              >
                <span className="mt-2">Next</span>
                <BsFillArrowRightCircleFill className="text-4xl mt-1"></BsFillArrowRightCircleFill>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
    </Layout>
  );
}
