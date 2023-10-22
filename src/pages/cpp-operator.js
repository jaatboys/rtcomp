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

const code = `

106 / 8 % 40
    
    
     `;
const code1 = `

int c = a +  b 
  

 
      
  `;
const code2 = `
  
a = b + c + d;
     
  `;

const code3 = `
#include <iostream> 
using namespace std; 
 int main( )
 { 
int a, b, c;
a = 8;
b = 4;
c = a + b;
cout << c;
return 0;
 } 
  `;
const code4 = `
C = a - b ;
C = a + b ;
C = a * b ;
C = a / b ;
C = a % b ;
C = a ++ ; or a -- ;
C = b ++ ; or b -- ;`;
const code5 = `
#include <iostream> 
using namespace std; 
 int main( )
 { 
int a, b, c;
a = 10;
b = 20;
if (a < b)
cout << "b is greater";
return 0;
 } 
   
  `;
const code6 = `
##include <iostream> 
using namespace std; 
 int main( )
 { 
int a, b;
a = 20;
b = 20;
if (a < = b)
cout << "both are equal";
return 0;
 } 
  `;
const code7 = `
#include <iostream> 
using namespace std; 
 int main( )
 { 
int a, b;
a = 20;
b = 20;
if (a && b)
cout << "both are equal";
return 0;
 } `;

 const code8=`
 #include <iostream> 
using namespace std; 
 int main( )
 { 
int a;
a = 5;
a = a * 4;
OR
a*= 4;
cout << a;
return 0;
 } `

 const code9=`
 
Variable a = (expression) ? true : false`

export default function CppVariable() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/cpp-control-structure"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/cpp-literal"; // Update with your actual URL

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
          <div className="space-y-3">
            {/* <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>The syntax for if-else in C++:</h5> */}
            {/* <div class="text-[#9EB2D2]">
                <p>If Statement use for making a decision. If and else can be a block statement and else if c++ Statement</p>
               </div> */}
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              What is an Operator in C++:
            </h1>
            <p>
              Operators in C++ use special symbols which perform any operations.
              <br />
              or <br />
              The C++ and operator is a particular symbol use in the expression.
            </p>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Operator in C++ Syntax code
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
              <CodeEditorFiled code={code}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Answer :
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">( + - / %) this is an operator</p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Operator in C++ Syntax code
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
              <CodeEditorFiled code={code1} />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Answer :
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">
                (= , +) are an operator <br />
                (a , b) are an operand
              </p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Operator in C++ Syntax code
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
              <CodeEditorFiled code={code2}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              {" "}
              Answer :
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">
                (+, =) there are 2 operators <br />
                (b, c, d) there are 3 operands
              </p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              1, Arithmetic operator:
            </h1>
            <div class="text-[#9EB2D2] font-bold">
              <p>
                + add <br />
                -Sub
                <br />
                Multiply
                <br />/ division
                <br />% modules
                <br />
                ++ increment
                <br />
                -- decrement
                <br />
              </p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              {" "}
              C++ Operator Example code:
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
              <CodeEditorFiled code={code3} />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">12</p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              C++ Operator Example code:
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
              <CodeEditorFiled code={code4} />
            </div>

            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              C++ Relational Operator Example
            </h1>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q-Write a program which no is Greater than b/w a and b in
                    C++?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code5}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              C++ Relational Operator Example
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">b is greater</p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              3,Logic operator:
            </h1>
            <div class="text-[#9EB2D2] font-bold">
              <p>
                And &amp;&amp; <br />
                Or ||
                <br />
                Not!
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
                    Q-Write a program check no is equal in C++?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code6}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">both are equal</p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h1>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q-Write a program check no is equal?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code7}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">both are equal</p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              4, Bitwise operator:
            </h1>
            <div class="text-[#9EB2D2] font-bold">
              <p>
                &gt;&gt; - right shift <br />
                &lt;&lt; - left shift
                <br />^ xor
                <br />~ B Not
                <br />
              </p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              5, Assignment operator:
            </h1>
            <div class="text-[#9EB2D2] font-bold">
              <p>
                = <br />
                +=
                <br />
                -=
                <br />
                *=
                <br />
                /=
                <br />
                %=
                <br />
                {"//="}
                <br />
                **=
                <br />
                &amp;=
                <br />
                &lt;&lt;=
                <br />
                &gt;&gt;=
                <br />
                ^=
                <br />
              </p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              6, Identifier operator in C++:
            </h1>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q-Write a program multiply a no Identifier in C++ Operator?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code8} />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">20</p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              7,The conditional operator (?:) in C++:
            </h1>
            <div class="text-[#9EB2D2]">
              <p>
                1, A conditional operator is known as a ternary operator. <br />
                2, The main point is that this Conditional operator consists of
                three operands.
                <br />
              </p>
            </div>
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
              <CodeEditorFiled value={code9} onChange={undefined} />
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
