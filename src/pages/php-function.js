import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import Header from '../app/components/Header/page'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import PhpBar from './Phpbar';
import PhpNav from './PhpNav';
import { useRouter } from 'next/router';
import './styles.css'
import Footer from '../app/components/Footer/Footer';
import CodeEditor from '../app/components/CodeEditor';
import Layout from '../app/layout'


const code = 
`Method name (parenthesis or parameter -list)
{ 
 //body of the method
} `;

const code1 = `
<?php 
function teachers () 
 { 
Echo "teaching";
 } 
Echo "Start method "." 
";
 teachers (); 
 ?> 
`

const code2 =`

<?php 
function Code () 
 { 
Echo "CodeExampler"." 
";
 } 
function Ram () 
 { 
Echo "Hello Ram" . " 
";
 } 
 Code (); 
 Ram (); 
 Code (); 
 Code (); 
 Code (); 
 ?> 
    `
  const code3 =`
  
<?php 
function teachers () 
 { 
Echo "Teaching ";
 } 
function students ()
 { 
Echo "Learn ";
 } 
Echo "Start Class ";
 teachers (); 
 students (); 
 ?>`

 const code4 =`
 <?php 
 function teachers () 
  { 
 Echo "Teaching ";
  } 
 function students ()
  { 
 Echo "Learn ";
  } 
 Echo "Start Class ";
  teachers (); 
  students (); 
  Peon (); 
 function Peon ()
  { 
 Echo "Ring the bell";
  } 
  ?> `

export default function PhpBreak() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/php-user-define-function"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/php-goto"; // Update with your actual URL

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
      <PhpNav></PhpNav>
      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
        {/* Python bur component   */}
        <PhpBar
          ListActiveMobile={ListActioveMobile}
          setListActiveMobile={setListActiveMobile}
        ></PhpBar>

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
           
            <div className="text-[#9EB2D2]">
              <p>
              The Php methods contain one more statement, and each technique performs only one task.
Each method gives a name, and after this name is used to call the method.
              </p>
            </div>
            <h1 className="text-[#01B6FF] mt-3 text-xl flex flex-col">
            Function in Php Syntax:
            </h1>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code} onChange={undefined} />
            </div>
            <h1 className="text-[#01B6FF] mt-3 text-xl">
            Examples:
            </h1>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-Write a Program use one method in Php?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code1} onChange={undefined} />
            </div>
            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h3>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col">
            
start method <br/>
teaching 
            </div>
           
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                 
                  Q-Write a Program uses two functions in Php?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code2} onChange={undefined} />
            </div>
            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h3>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col">
            CodeExampler <br/>
Hello Ram <br/>
CodeExampler <br/>
CodeExampler <br/>
CodeExampler <br/>
    
            </div>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                 
                  Q-Write a Program Use two methods and create different objects for different functions in Php
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code2} onChange={undefined} />
            </div>
            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h3>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col">
            Start Class<br/>
Teaching<br/>
Learn<br/>
    
            </div>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-Write a Program uses a different class on Php Method Example?


                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code2} onChange={undefined} />
            </div>
            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h3>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col">
            Start Class<br></br>
Teaching <br></br>
Learn <br></br>
Ring the bell<br></br>
    
            </div>
          </div>

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
      </main>
      <Footer></Footer>
    </div>
    </Layout>
  );
}
