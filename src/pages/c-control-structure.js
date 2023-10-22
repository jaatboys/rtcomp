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

const code = `#include <stdio.h> 
  int i;
  
  void show ()
  
   { 
  
       printf("%d"",i);
  
  }
  
  void main ()
  
   { 
  
      int i= 10;
  
      i++ ;
  
      show();
  
  }
`;
const code2 = `#include <stdio.h> 
#include <conio.h> 

int i= 50;

void show ()

 { 

     printf("%d",i);

     i=40;

}

void main ()

 { 

    i++ ;

     show();

     printf("%d",;i);

}
`;

const code3 = `
#include <stdio.h> 
#include <conio.h> 

int i;

void show ()

 { 

   static int i = 60;

   printf("%d"",i);

   i++;

}

void main ()

 { 

    show();

    show();

    show();
}

`;

export default function CScopeOfVariable() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/c-if"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/c-operator"; // Update with your actual URL

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
          <div class="space-y-3">
            <div class="text-[#9EB2D2] font-bold">
              <p>
                <br />
                The program is executing according to requirement, and the
                sequence can be changed using the control structure statement.
                The categories and keywords show Below:
              </p>
            </div>
            <h2 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Conditional statement:
            </h2>
            <h3 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              The conditional statement is many types in C:
            </h3>
            <div class="text-[#9EB2D2] font-bold">
              <p>
                If-condition <br />
                If-else <br />
                If-else-if <br />
                Nested if
                <br />
                Switch-case
                <br />
              </p>
            </div>
            <h2 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              C looping (iteration)
            </h2>
            <h3 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              There are Three types of looping in C:
            </h3>
            <div class="text-[#9EB2D2] font-bold">
              <p>
                While loop <br />
                Do-while loop
                <br />
                For loop
                <br />
              </p>
            </div>
            <h2 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Jumping statements in C:
            </h2>
            <h3 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              C supports only three types of jumping statements in C:
            </h3>
            <div class="text-[#9EB2D2] font-bold">
              <p>
                Break <br />
                Continue
                <br />
                Goto
                <br />
                return
                <br />
              </p>
            </div>
            <div class="flex justify-between mx-6 sm:mx-12 mt-3 mb-3">
              <button class=" flex  text-lg gap-1 text-[#9EB2D2] no-underline ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="text-4xl mt-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                </svg>{" "}
                <span class="mt-2">Previous</span>
              </button>
              <button class=" flex text-lg gap-1 text-[#9EB2D2] no-underline ">
                <span class="mt-2">Next</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="text-4xl mt-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                </svg>
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
