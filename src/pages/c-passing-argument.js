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
import Layout from '../app/layout'
const code = `
#include <stdio.h> 
void argument(int n) // declare the function argument as an int
{ 
    printf("My number is %d\n", n); // print the value of n using printf()
}

int main() 
{ 
 int n;
 printf("Enter a number: ");
 scanf("%d", &n); // read a number from the user and store it in n
 argument(n); // call the function with the value of n as the argument
 return 0; 
}
  `;
const code2 = `
#include <stdio.h> 
void check(int n) // declare the function to take an integer argument
{ 
  if (n % 2 == 0) // check if n is even
  { 
      printf("%d is an even number.\n", n);
  }
  else // if n is not even, it must be odd
  { 
      printf("%d is an odd number.\n", n);
  }
}

int main()
{ 
 int n;
 printf("Enter a number: ");
 scanf("%d", &n); // read a number from the user and store it in n
 check(n); // call the function with the value of n as the argument
 return 0; 
}`;
const code3 = `#include <stdio.h> 
void maximum(int a, int b)
{ 
 if (a>b) 
 { 
  printf("maximum = %d",a);
 }
 else 
 { 
  printf("maximum = %d",b);
 }
}
int main ()
{ 
  int a, b;
 printf("Enter a no \n");

 scanf("%d %d",&a,&b);
 maximum (a,b);
 return 0; 
}
  `;

export default function CIdentifier() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/c-history"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/c-user-defined-function"; // Update with your actual URL

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
      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
        {/* Python bur component   */}
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
            <div className="text-[#9EB2D2]">
              <p>
                Passing arguments to a function in C: An argument may be a
                variable as a constant value used in the () of function.
              </p>
            </div>

            <div>
              <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                <div className=" flex gap-2 pl-7 items-center">
                  <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                  <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                  <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-xs smm:text-lg text-[#01B6FF]">
                      Q-Passing function as an arguement in C example?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code} />
              </div>
            </div>
            <h3 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Input:
            </h3>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">Enter a number: 42</p>
            </div>
            <h3 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output:
            </h3>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">My number is 42</p>
            </div>

            <div>
              <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                <div className=" flex gap-2 pl-7 items-center">
                  <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                  <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                  <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-xs smm:text-lg text-[#01B6FF]">
                      Q-Write a program to check a no is even or odd by using a
                      passing arguement?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code2} />
              </div>
            </div>
            <div>
              <h3 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input:
              </h3>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">Enter a number: 4</p>
              </div>
              <h3 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output:
              </h3>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold mb-2">
                <p class="whitespace-pre-wrap ">46 is an even number.</p>
              </div>
              <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                <div className=" flex gap-2 pl-7 items-center">
                  <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                  <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                  <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-xs smm:text-lg text-[#01B6FF]">
                      Q-Write a program check greater no by using function?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code3} />
              </div>
            </div>
            <div>
              <h3 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input:
              </h3>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  Enter a no <br></br>
                  46 <br></br>
                  58
                </p>
              </div>
              <h3 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output:
              </h3>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">maximum = 58</p>
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
        </div>
      </main>
      <Footer></Footer>
    </div>
    </Layout>
  );
}
