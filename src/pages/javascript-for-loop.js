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
for(initialization;condition;iteration)
 { 
  Statement sequence 
 } 
  

   `;

const code1 = `

<script> 

 for(var i=1;i<=10;i++)
  { 
   document.write("Loop Start :"+ i +"<br>" );
  } 

</script> 
    

    `;

    const code2 =`
    <script> 
    for(var i=1;i<=10;i++)
     { 
      document.write(i + "<br>");
     } 
    document.write("CodeExampler");
   
   </script>   
    `
const code3 =`
<script> 
 for(var i=i=1;i<=10;i++)
  { 
   document.write(i + "<br>");
   document.write("Ram-Ram"+ "<br>");
  } 
</script>  `

const code4=`
<script> 

for(var i=1;i<=10;i++)
 { 
  document.write("Hello Ram "+i + "<br>");
 } 
 
</script> 
    
    
`


export default function JavaScriptVariables() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/javascript-break"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/javascript-do-while   "; // Update with your actual URL

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
          <h1 className="text-[#01B6FF] mt-3 lg:text-xl">
          For loop in Javascript
            </h1>
            <p>1, The body of the loop must execute until the given condition is false <br/>
2, In the Javascript for loop semicolon, must be used <br/>
3, This Javascript for loop is used to repeat a particular piece of code for a fixed no of times</p>
            
<h1 className="text-[#01B6FF] mt-3 lg:text-xl">
Javascript For Loop Example:
            </h1>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">Syntax do-while Javascript loop:</p>
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

                  Q-Write a program to print a number from 1 to 10 in Javascript for loop Examples?


</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code1} onChange={undefined} />
            </div>
            <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
              Input
            </h5>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
            Loop Start: 1  <br/>
Loop Start: 2 <br/>
Loop Start: 3 <br/>
Loop Start: 4 <br/>
Loop Start: 5 <br/>
Loop Start: 6 <br/>
Loop Start: 7 <br/>
Loop Start: 8 <br/>
Loop Start: 9 <br/>
Loop Start: 10   </p></div>
    
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 
                  Q-Write a program to print a name when the program is complete in Javascript for loop Example?
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

    
            1 <br/>
2 <br/>
3 <br/>
4 <br/>
5 <br/>
6 <br/>
7 <br/>
8 <br/>
9 <br/>
10 
CodeExampler 
    </p></div>
    
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]">
Q-Write a program to print a name again in Javascript for loop Example? </p>
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
            1 
Ram-Ram <br/>
2 
Ram-Ram <br/>
3 
Ram-Ram <br/>
4 
Ram-Ram <br/>
5 
Ram-Ram <br/>
6 
Ram-Ram <br/>
7 
Ram-Ram <br/>
8 
Ram-Ram <br/>
9 
Ram-Ram<br/>
10 
Ram-Ram 
    </p></div>
    
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 
                  Q-Write a program to combine a no and name in Javascript for loop Example?
                  </p>
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
            
    

            Hello Ram  1 <br/>
Hello Ram  2 <br/>
Hello Ram  3 <br/>
Hello Ram  4 <br/>
Hello Ram  5 <br/>
Hello Ram  6 <br/>
Hello Ram  7 <br/>
Hello Ram  8 <br/>
Hello Ram  9 <br/>
Hello Ram  10  
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
