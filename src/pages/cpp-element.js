import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/router";
import Header from "../app/components/Header/page";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import CppBar from "./CppBar";
import Footer from "../app/components/Footer/Footer";
import CodeEditorFiled from "../app/components/CodeEditor";
import "./styles.css";
import Head from "next/head";
import Layout from "../app/layout";

const code5 = `
 
#include <iostream> 
using namespace std; 
int i;
void show( )
 { 
 cout << i; 
 } 
 int main( )
 { 
 i = 10 ;
 i ++;
 show ( );
 return 0;
 } 
     `;
const code6 = `
     

#include <iostream> 
using namespace std; 
int i = 50 ;
void show( )
 { 
 cout << i;
 i = 40;
 } 
 int main( )
 { 
 i ++;
 show ( );
 cout << i ;
 return 0;
 }  
  `;
const code7 = `
  
#include <iostream> 
using namespace std; 
void Show( )
 { 
 static int i = 60;
 cout << i ;
 i ++;
 } 
 int main( )
 { 
 Show ( );
 Show ( );
 Show ( );
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
    const nextPageUrl = "/cpp-keyword  "; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/cpp-scope-of-variable"; // Update with your actual URL

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
          <CppBar
            ListActioveMobile={ListActioveMobile}
            setListActiveMobile={setListActiveMobile}
          ></CppBar>

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
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                1,The character set in c++ programming language:
              </h1>
              <div class="text-[#9EB2D2]">
                <p>
                  Letters = a-z,A-Z,( _ underscope) <br />
                  Digits = (0,1,2,----,8,9,10)
                  <br />
                  Special symbols=( ; , ! @ # $ % ^ &amp; * ” ? /. &gt; &lt; , )
                  :{"}"} ’[ ] <br />
                  Total character is 256 ASCII-American standard coded
                  information interchange <br />
                </p>
                <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                  2, Constant in a c programming language(literals):
                </h1>
              </div>
              <p class="font-bold">
                There are two types of constant computer programming in c++:
              </p>
              <div class="text-[#9EB2D2]">
                <p>
                  1, primary constant <br />
                  2, secondary constant
                </p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Primary Constant in c++ :
              </h1>
              <div class="text-[#9EB2D2]">
                <p>Integer,real,character</p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Secondary Constant in c++:
              </h1>
              <div class="text-[#9EB2D2]">
                <p>array,pointer,structure,union,enum,etc.</p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Integer constant in a C programming language:
              </h1>
              <div class="text-[#9EB2D2]">
                <p>
                  means not less then -32768 or not more then 32767.
                  ex-0,1,40,500,1000 ,+456,-688,etc
                </p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Floating point or real constant in a C++ programming language
              </h1>
              <div class="text-[#9EB2D2]">
                <p>
                  means It must have a decimal point ,decimal is compulsory and
                  also no use commas or blanks.for
                  ex-1.2,5.6,46.88,-288,642,+64.24,etc.
                </p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Character in a C++ programming language
              </h1>
              <div class="text-[#9EB2D2]">
                <p>
                  Use single alphabet, use only single-digit or single special
                  symbol enclosed within single inverted commas. Ex-
                  ’a’,’b’,’y’,’z’
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
