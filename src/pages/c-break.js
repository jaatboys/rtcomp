import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Header from "../app/components/Header/page";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import CBar from "./Cbar";
import CodeEditorFiled from "../app/components/CodeEditor";
import { useRouter } from "next/router";
import "./styles.css";
import Footer from "../app/components/Footer/Footer";
import Layout from "../app/layout";

const code = `


break 
    
    
     `;
const code1 = `


#include <stdio.h>
int main() {
 int i;
 for (i = 1; i <= 10; i++) {
    if (i == 5) {
      break;
    }
    printf("%d \n", i);
 }
 return 0;
} 
 
      
  `;
const code2 = `
  

#include <stdio.h>
int main() {
 int i, num;
 printf("Enter a number: ");
 scanf("%d", &num);
 for (i = 2; i <= 10; i += 2) {
    if (i > num) {
      break;
    }
  printf("%d \n", i);
 }
return 0;
}

  
  `;

const code3 = `
#include <stdio.h>
int main() {
 int i;
 for (i = 1; i <= 10; i++) {
    if (i == 4) {
      printf("no is 4 \n");
      break;
    }
  printf("complete \n");
 }
return 0;
}
  
  
  `;
const code4 = `
#include <stdio.h>
int main() {
 int i, num;
 printf("Enter a number: ");
 scanf("%d", &num);
 for (i = 2; i <= 10; i += 1) {
    printf("%d \n", i);
    if (i == num) {
      break;
    }
 }
 return 0;
}
`;

export default function CppVariable() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/c-continue"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/c-for-loop"; // Update with your actual URL
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
          <CBar
            ListActioveMobile={ListActioveMobile}
            setListActiveMobile={setListActiveMobile}
          ></CBar>

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
              {/* <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>The syntax for if-else in C++:</h5> */}
              {/* <div class="text-[#9EB2D2]">
                <p>If Statement use for making a decision. If and else can be a block statement and else if c++ Statement</p>
               </div> */}
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Main Points of Break in C
              </h1>
              <p>
                1, Break statement in c keyword is used to exit from loop and
                switch : <br />
                2, When a break is encountered inside any loop, control
                automatically passes to the first statement after the loop.
                <br />
                3, Break statement in C is used to terminate a loop immediately.
                The break statement is encountered inside a loop{" "}
                <a
                  class="text-blue-600"
                  target="_blank"
                  href="https://www.codeexampler.com/cpp-if-else"
                >
                  c++ if else
                </a>
                <br />
              </p>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Break C syntax:
              </h1>

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
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Break In C Examples:
              </h1>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program loop from 1 to 10 but stop or break when
                      i=5 in the break statement in C?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code1} onChange={undefined} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">1 2 3 4</p>
              </div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program loop from 1 to 10 but stop or break on
                      first even no occur in break statement in C?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code2} onChange={undefined} />
              </div>
              <h4 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input:
              </h4>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">Enter a number: 8</p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">2 4 6 8</p>
              </div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program loop start from 1 to 10 and print
                      complete but stop or break when i=4 in break statement in
                      C?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code3} onChange={undefined} />
              </div>

              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  complete <br />
                  complete <br />
                  complete <br />
                  no is 4
                </p>
              </div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program loop starting from 2 to 10 and I match
                      input No stop or break statement in C?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code4} onChange={undefined} />
              </div>
              <h4 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input:
              </h4>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">Enter a number: 5</p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  2 <br />
                  3 <br />
                  4 <br />
                  5 <br />
                </p>
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
          </div>
        </main>
        <Footer></Footer>
      </div>
    </Layout>
  );
}
