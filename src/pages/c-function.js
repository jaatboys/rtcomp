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

#include <stdio.h> 
#include <math.h> 
int main ()
{ 
 double i,a;
 i = 24;
 a = sqrt(i);
 printf("Square Root is %If",a);
 return 0; 
}
   
    
    
     `;
const code1 = `


#include <stdio.h> 
#include <stdlib.h> 

int main()
{ 
 printf("Program Exit 1 \n");
 // terminate the program with exit status 0
 exit(0);
 // This statement will not be executed
 printf("Program Exit 2 \n");
 return 0; 
}
  

 
      
  `;
const code2 = `
  
#include <stdio.h> 
#include <stdio.h> 
int main ()
{ 
 char ch;
 printf("Enter a Char ");
  ch = getchar();
   printf("* \n");
 printf("You entered =  %c",ch);
 return 0; 
}
   
  `;

const code3 = `

#include <stdio.h> 
#include <stdio.h> 
int main ()
{ 
 char ch;
 printf("Enter a Char ");
  ch = getche();
   printf("*");
 printf("
 You entered =  %c",ch);
 return 0; 
}
  `;
const code4 = `
#include <stdio.h> 
#include <conio.h> 

int main()
{ 
 char ch;
 printf("Enter a Char ");
 ch = getch();
 printf("*");
 printf("\nYou entered = %c", ch);
 return 0; 
}`;
const code5 = `
#include <stdio.h>
#include <time.h>

int main()
{
 int i;
 for (i = 1; i <= 10; i++)
 {
     printf("%d ", i);
     fflush(stdout); // flush the output buffer to display the number immediately
     time_t start_time = time(NULL);
     while ((time(NULL) - start_time) < 1); // wait for 1 second
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
    const nextPageUrl = "/c-break"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/c-do-while"; // Update with your actual URL

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
                For loop in c++:
              </h1>
              <p>
                1, Function in c is a set of statements enclosed in written
                under a name. 2, A function is defined only one time and can be
                used for only no time. 3, With the help of a function, a big
                program can be more flexible.
              </p>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Types of Function in a c programming language:
              </h1>
              <div class="text-[#9EB2D2] font-bold">
                <p>
                  1,Library function <br />
                  2,User defined function <br />
                </p>
              </div>
              <h2 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                1,Library function in c:
              </h2>
              <div class="text-[#9EB2D2]">
                <p>
                  library function in c these function are pre-defined function
                  in the library of c.if we want to use an library function then
                  we have to include its header file at the top of the programme{" "}
                  <br />
                  &lt;stdio.h&gt;
                  <br />
                  printf()
                  <br />
                  gets()
                  <br />
                  Getchar()
                  <br />
                  Scanf()
                  <br />
                  Puts()
                  <br />
                  Putchar()
                  <br />
                  Etc.
                  <br />
                </p>
              </div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Math sqrt() by using function in a C programming
                      language?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">Square Root is 4.898979</p>
              </div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Exit using a function in a C programming language?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code1} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">Program Exit 1</p>
              </div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program that uses getchar() in the C funtion?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code1} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  Enter a Char v * You entered = v
                </p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program that uses getche() in the C funtion?
                    </p>
                  </div>
                </div>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  Enter a Char b * You entered = b
                </p>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code2} />
              </div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program that uses getch() in the C funtion?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code3} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  Enter a Char k * You entered = k
                </p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                While loop Reverse C++
              </h1>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a Program to print a number from 1 to 10 using 1
                      second (time.h) library using (fflush(stdout))?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code4} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">1 2 3 4 5 6 7 8 9 10</p>
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
