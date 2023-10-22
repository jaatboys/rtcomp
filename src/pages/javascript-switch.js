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

switch(Expression)
{ 
 case condition 1 : 
    Statement ;
    Break;
 case condition 2 : 
    Statement ;
    Break;
 case condition 3 : 
    Statement ;
    Break;
 default : 
    Statement ;
} 

OR 

switch(Expression)
 case condition 1 : 
    Statement ;
    Break;
 case condition 2 : 
    Statement ;
    Break;
 case condition 3 : 
    Statement ;
    Break;
 default : 
    Statement ;
 Endswitch;

   `;

const code1 = `

<script> 
  var month=3;

  switch(month)
  { 
   case 1 : 
      document.write("Jan" + "<br>");
break;
   case 2 : 
      document.write("Feb" + "<br>");
   case 3 : 
      document.write("Mar" + "<br>");
   case 4 : 
      document.write("Apr" + "<br>");
   default : 
      document.write("Enter correct value");
} 
</script>
    `;

    const code2 =`
    <script> 
  var month=3;

  switch(month)
  { 
   case 1 : 
      document.write("Jan");
      break;
   case 2 : 
      document.write("Feb");
      break;
   case 3 : 
      document.write("Mar")
      break;
   case 4 : 
      document.write("Apr");
      break;
   default: 
      document.write("Enter correct value");
      break;
} 
</script> 
    `
const code3 =`
<script> 
  var i=280;

  switch(i)
  { 
   case 180 : 
      document.write("i value is 180");
      break;
   case 280 : 
      document.write("i value is 280")
      break;
   case 480 : 
      document.write("i value is 480");
      break;
   default: 
      document.write("Enter correct value");
      break;
} 
</script>`

const code4=`
<script> 
  var i='d';

  switch(i)
  { 
   case 'b' : 
      document.write("i value is b");
      break;
   case 'd' : 
      document.write("i value is d");
      break;
   case 'f' : 
      document.write("i value is f")
      break;
   case 'h' : 
      document.write("i value is h");
      break;
   default: 
      document.write("Enter correct value");
      break;
} 
</script> 
    
`
const code5=`
<script> 
  var date=8;

  switch(true)
  { 
   case (date>=10 && date<=20) : 
      document.write("your date is correct");
      break;
   case (date>=21 && date<=32) : 
      document.write("your date is incorrect");
      break;
   default: 
      document.write("Please enter a valid date");
      break;
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
    const nextPageUrl = "/javascript-looping-statement"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/javascript-if-else-if"; // Update with your actual URL

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
            Switch Statement in Javascript:
            </h5>
<p>That is also used in multiple conditions with different statements like if but it can only check the equality of the floating condition point, but the switch can’t match the value.</p>
<h5 className="text-[#01B6FF] mt-3 lg:text-xl">
The Syntax for Switch Statement Javascript:
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
            <div class="text-[#9EB2D2]"><p>In this keyword switch inside c programming that will yield an integer value, forex-case1,case2, etc. this is an integer constant if you do not find any match in any case statements, so on that time, default statement execute  <a class="text-blue-600" target="_blank" href="https://www.codeexampler.com/javascript-break">JavaScript Break tutorial for Beginners</a>.<br/><br/>This program gives output but is not expecting because we did not provide case 3 and the default value Switch statement. so if you want to provide the only case 2 statement so using switch case Javascript statement.</p></div>
            <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
            Javascript switch statement without Using break Statement:
            </h5>
            <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 

                  Q-Write a program to input a no and print month name and if no is two by using switch without break Javascript?
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
                
            
Mar <br/>
Apr <br/>
enter correct value
    </p></div>
    <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
    Javascript switch statement with break:
            </h5>
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 
                  Q-Write a program to input a no and print month name and if no is two by using Switch Javascript?</p>
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
            Mar
    
    </p></div>
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 
                  Q-Write a program without input use a switch case in Javascript?</p>
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
            i value is 280
    
    </p></div>
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 
                 
Q-Write a program character switch case in Javascript?</p>
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
            i value is d
    
    </p></div>
    <div className="bg-[#2c3e4c]  p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"> 
                 
Q-Write a program to check a no b/w two no switch case in Javascript?</p>
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
            Please enter a valid date
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
