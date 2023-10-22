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

if(condition)
{ 
  Statement;
} 
else 
{ 
  Statement;
}`;

const code1 = `

<script> 
  var a=450; 
  if(a>1000)
   { 
    document.write("This "+a+" no is Greater than 1000");
   } 
  else
   { 
    document.write("This "+a+" no is Smaller than 1000");
   } 
</script> 
    `;

    const code2 =`
    <script> 
  var a=160208; 
  if(a%2==0)
   { 
    document.write("This "+a+" no is Even no");
   } 
  else
   { 
    document.write("This "+a+" no is Odd no");
   } 
</script> 
    `

    const code3=`
    <script> 
  var a=40; 
  var b=50; 
  if(a>b)
   { 
    document.write("This "+a+" no is Greater no");
   } 
  else
   { 
    document.write("This "+b+" no is Greater no");
   } 
</script> `

const code4=`
<script> 
  var i=840; 
  if(i<100)
   { 
    document.write("i is Less than = "+a);
   } 
  else 
   { 
    if(i>=1000)
     { 
      document.write("greater than 1000");
     } 
    else 
     { 
      document.write("between 100 and 1000");
     } 
   } 
</script> `

const code5=`
<script> 
  var sex='m'; 
  if(sex=='m')
   { 
    document.write("This is male <br>");
   } 
  else 
   { 
    if(sex=='f')
     { 
      document.write("This is female <br>");
     } 
    else 
     { 
      document.write("not male and not female");
     } 
   } 
  document.write("I have checked gender");
</script>`



export default function JavaScriptVariables() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/javascript-if-else-if"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/javascript-if"; // Update with your actual URL

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
            <p>If statement use for making a decision. If and else can be a block statement</p>
            <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
            If-Else Javascript Syntax :
            </h5>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]"></p>
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
                  
Q-Write a program to input a number and check this value is greater than 1000 or not in the Javascript tutorial?</p>
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
                
            This 450 no is Smaller than 1000 
    </p></div>
   
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 
                  Q-Write a program to check a no is even or odd in a Javascript tutorial?</p>
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
                

            This 160208  no is Even no
    </p></div>
    
    <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
    Nested if list in Javascript tutorial:
            </h5>
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 
                  
Q-Write a program to input a number and check this value is greater than 1000 or not in the Javascript tutorial?</p>
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
                

            This 50 no is Greater no 
    </p></div>
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 
                  

                  Q-Write a program to input a no and after Check no is Greater, Less or Between in Javascript Example?</p>
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
                

          
between 100 and 1000
    </p></div>
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 
                  

                  Q-Write a Gender Male, Female or Another Gender Nested List Program in Javascript?</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code5} onChange={undefined} />
            </div>
            <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
              Input
            </h5>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
            this is male <br/>
I have checked gender  
        
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
