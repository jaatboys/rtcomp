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

For ( initialization; condition; iteration )

{ 
Statement sequence 
} }
    
    
     `;
const code1 = `

#include <iostream> 
using namespace std; 

int main ()

{ 
int  i ;

for  ( i = 1 ; i  <= 10 ; i ++ )
{ 

cout << i << "\n " ;
} 
} 
  

 
      
  `;
const code2 = `
  
#include <iostream> 
using namespace std; 

int main ()
{ 

int  i ;
for ( i = 1; i <= 10 ; cout << i  <<"\n ")
i ++ ;
} 
  `;

const code3 =`
#include <iostream>
using namespace std;

int main ( )
{
int i;
for(i=1;i<=10;i++)
{
cout<<i<<"\n";
}
cout<<"Code exampler";
}
  `
const code4 =`
#include <iostream> 
using namespace std; 

int main ()
{ 

int  i ;
for ( i = 1; i <= 10 ;  i ++)
{ 

cout << i; 
cout << "Ram-Ram" << "\n";
} 
}`
const code5 =`
#include <iostream> 
using namespace std; 

int main ()
{ 

int  i ;
for ( i = 1; i <= 10 ;  i ++)
{ 
cout << " Ram-Ram " << i << "\n";
} 
}
  `
const code6=`
#include <iostream> 
using namespace std; 
int main ()

{ 
int i , first , last ;
cout << " enter first no \n "; 

cin >> first ;

cout << " enter last no \n "; 

cin >> last ;

for ( i = first ; i<= last ; i ++) 

{ 

cout << " Number is "<< i << "\n"; 
} 

} 
  `
const code7=`
#include <iostream> 

using namespace std; 

int main ()

{ 

int a = 0 , b = 1 , c , i ;

cout << " enter first no \n "; 

cin >> a ;

cout << " enter last no \n "; 

cin >> b ;

for ( i = 1 ; i<= 10 ; i ++) 

{ 

c = a + b ; 

cout << c ; 

a = b ; 

b = c ; 

} 

} `

export default function CppVariable() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/cpp-break"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/cpp-do-while"; // Update with your actual URL

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
               For loop in c++:
              </h1>
               <p>1, The body of the loop must execute until the given condition is false<br/>
2, In for loop, Semicolon use <br/>
3, This for loop uses to repeat a particular piece of code for a fixed no of times</p>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
            For loop Syntax in C++
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
           
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-Write a Program to print a number from 1 to 10 in for loop?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code1}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Output :</h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
1 
2 
3 
4 
5 
6 
7 
8 
9 
10
  </p></div>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-Write a program decrement or Subtract in while loop in C++?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code1}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Output :</h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
10 
9 
8 
7 
6 
5 
4 
3 
2 
1 
  </p></div>
  <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Important:</h1>
  <p>When you print a no into a different column so use (\n).</p>
  <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-Write a Program to print a number from 2 to 11 in for loop?
                  </p>
                </div>
              </div>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Output :</h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
2 
3 
4 
5 
6 
7 
8 
9 
10 
11 
  </p></div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code2}  />
            </div>
  <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    
Q-Write a Program to print a name when a program is complete?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code3}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Output :</h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
1
2
3
4
5
6
7
8
9
10
code Exampler
  </p></div>
  <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">While loop Reverse C++</h1>
  <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-Write a Program to print a name again in for loop?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code4}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Output :</h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
1 Ram Ram 
2 Ram Ram 
3 Ram Ram 
4 Ram Ram 
5 Ram Ram 
6 Ram Ram 
7 Ram Ram 
8 Ram Ram 
9 Ram Ram 
10 Ram Ram 
  </p></div>
  <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                 
Q-Write a Program to combine a no and name in for loop?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code5} />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Output :</h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
Hello Ram 1 
Hello Ram 2 
Hello Ram 3 
Hello Ram 4 
Hello Ram 5 
Hello Ram 6 
Hello Ram 7 
Hello Ram 8 
Hello Ram 9 
Hello Ram 10 
  </p></div>
  <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                 
Q-Write a Program to range started from 2 and finish on 8 in for loop?

                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code6}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Output :</h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
            enter first no 
2 

enter last no 
8 

Number is 2 
Number is 3 
Number is 4 
Number is 5 
Number is 6 
Number is 7 
Number is 8 
  </p></div>
  <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-Write a Program to favicon series in for loop?

                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code7} />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Output :</h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
            enter first no 2 

enter last no 5 

71219315081131212343555
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
