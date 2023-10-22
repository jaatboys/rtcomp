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



const code =`
Type Variable-Name; 
var  is a Type
a,b and ab are a variable-name`

const code1=`Type Variable-Name; 
var roll_no; //this declare a variable 
var percentage; //this declare a variable 
var roll_no=40;  //assigns a variable a value
var precentege=40.80;  //assigns a variable a value`

const code2=`

var abc; //this declare a variable 
var a_bc; // (abc and a_bc are a variable) 
var a; b; x; z; //(a,b,x,z) are a variable
var a="Ram";  //a variable gain value ( Ram )`

const code3=`
<script>
var ab = 20;
var cd = 24;
var ef = 36;
document.write(ab + cd + ef);
</script>`

const code4=`
<script> 
  var a=10;//a is a variable and a is a variable
  a+=40;
  a=a+20;
  document.write(a);
</script> 
`

const code5=`

<script> 
  var a=40;
  document.write(a);
</script>`

const code6=`<script> 
var a,b;
a="Ram"
b="Lakshman"
document.write(a+" "+b);
</script> `

const code7=`
<script> 
  var a,b,c;
  a="Ram"
  b="Lakshman"
  b="My Name is CodeExampler 160208"
  document.write(a+" "+b+" "+c);
</script> `

export default function JavaScriptVariables() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/javascript-keyword"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/javascript-history"; // Update with your actual URL

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
            <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
              What is Python Variable, and how is Python vairiable declaration ?
            </h5>
            <div className="text-[#9EB2D2]">
              <p>
                1, Variable is the name of a memory location in which we can
                store the value <br />
                2, Javascript can change the variable value <br />
                3, A variable is defined by combining an identifier, data types,
                and an initializer. <br />
                4, The first character in the variable name must be an alphabet,
                underscore, a digit or, a dollar sign. <br />
                5, All variables have a scope <br />
                6, The identifier is the name of the Variable <br />
                7, Commas or blanks are not using inside a variable name <br />
                8, Use dollar symbol($) before variable-name
              </p>
            </div>
            <h5 className="text-[#01B6FF]">
              Javascript Variable Declaration Syntax:
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

            <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
              Javascript Variable declaration Syntax Examples:
            </h5>
            <div className="bg-[#292830] p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"></p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code1} onChange={undefined} />
            </div>

            <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
              Declare a variable in Javascript:
            </h5>
            <div className="text-[#9EB2D2]">
              {" "}
              <p>These Variable declare in various types.</p>
            </div>
            <div className="bg-[#292830] p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"></p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code2} onChange={undefined} />
            </div>
            <div className="bg-[#292830] p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]">
                  Q-Addition of Variables examples in JavaScript?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code3} onChange={undefined} />
            </div>
            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Input:</h1>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p className="whitespace-pre-wrap ">
80 
    </p></div>
    <div className="bg-[#292830] p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]">
                  Q-Variable increment values in two times in Javascript?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code4} onChange={undefined} />
            </div>
            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Input:</h1>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p className="whitespace-pre-wrap ">
70 
    </p></div>
    <div className="bg-[#292830] p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]">
                  Q-Create a variable and store a no inside this variable and print output?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code5} onChange={undefined} />
            </div>
            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Input:</h1>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p className="whitespace-pre-wrap ">
40 
    </p></div>
    <div className="bg-[#292830] p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]">
                  Q-Create a string Variable and store a no inside string type variable and print output?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code6} onChange={undefined} />
            </div>
            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Input:</h1>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p className="whitespace-pre-wrap ">
            Ram Lakshman
    </p></div>
    <div className="bg-[#292830] p-3 rounded-xl">
              <div className="flex gap-2 pl-7 items-center">
                <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]">
                  
Q-Create a string Variable and store a no inside string data type variable and print output?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code7} onChange={undefined} />
            </div>
            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Input:</h1>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p className="whitespace-pre-wrap ">
            Ram Lakshman My Name is CodeExampler 160208 
    </p></div>
    <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Constant:</h1>
    <p>Constant use when you store a value inside a variable but use constant after you can’t overwrite the existing deal.</p>
    <div className='flex justify-between mx-6 sm:mx-12 mt-3 mb-3'>

<button onClick={() => handlePrevious()} className=' flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
<button onClick={() => handleNext()} className=' flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>

</div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
    </Layout>
  );
}
