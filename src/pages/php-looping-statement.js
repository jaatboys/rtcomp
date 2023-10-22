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



const code = `
while (condition)
{
  -  
  statement
  -  
} `;

const code1 = `
do {
  statement
  statement
  -  
while (condition);
  } 
  
`

const code2 =`

for ( statement; condition;statement)
statement

    `
  

export default function PhpBreak() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/php-while"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/php-switch"; // Update with your actual URL

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
           
        <p>The looping statement in Php uses to repeat a particular piece of cards until the given condition is false.</p>
     
<h1 className="text-[#01B6FF] mt-3 text-xl">
        There are three types of looping statements in Php programming:
            </h1>
            <p>1, while loop in the Php statement.<br/>
2, Do-while looping in Php statement.<br/>
3, For looping in Php statement.<br/></p>
<h1 className="text-[#01B6FF] mt-3 text-xl">
        1, While loop in Php:
            </h1>
        <p>In a while loop for Php, the loop's body is Execute until the condition is false.</p>
        <h1 className="text-[#01B6FF] mt-3 text-xl">
        while loop syntax in Php:
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
            2,Do-while loop:
            </h1>
        <p>In the do-while loop a condition will be given and that will be checked after the execution of the body of the loop.</p>
        <h1 className="text-[#01B6FF] mt-3 text-xl">
        Do-while loop Php Syntax:
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
              <CodeEditor code={code1} onChange={undefined} />
            </div>
            <h1 className="text-[#01B6FF] mt-3 text-xl">
            3, For loop Php:
            </h1>
        <p>1, In the for loop Php, the body of the loop will be executed until the given condition is false.<br></br>
2, This for loop uses to repeat a particular piece of code for a fixed no of times.<br></br>
3, In the for loop Php must use two semicolons.</p>
        Do-while loop Php Syntax:
        <h1 className="text-[#01B6FF] mt-3 text-xl">
        For loop Php Syntax:
            </h1>
            
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code2} onChange={undefined} />
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
