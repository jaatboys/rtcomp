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
import Layout from '../app/layout'
const code = `

While (condition)

 Statement 
 { 
    body
 }
    
    
     `;
const code1 = `

#include <iostream> 
using namespace std; 

int main ()

  { 

   int a = 1 ;
   while ( a <= 10)

   { 
   cout << a << "\n";
   a ++;

  OR

   a = a + 1 ;
   } 

return 0 ;
} 

 
      
  `;
const code2 = `
  
#include <iostream> 
using namespace std; 

int main ()
  { 

  int a = 10 ;
   while ( a >= 1)
  { 
  cout<< a << "\n ";

  a --;

  OR

  a = a - 1 ;
  } 
return 0 ;
} 
     

  `;

const code3 =`
while ( a < = 10 && a > = 1)

while ( a < = 10 || a > = 1)
  `
const code4 =`
#include <iostream> 
using namespace std; 

int main() {

  int n;

  cout << "Enter a number: ";
  cin >> n;

  while (n > 0) {
    cout << n % 10 << " "; // Print the remainder when n is divided by 10
    n = n / 10;
  }
    return 0;
}`
const code5 =`
#include <iostream>
using namespace std;

int main()
{
 int n, sum = 0;
 cout << "Enter a number: ";
 cin >> n;
 while (n > 0)
 {
    sum += n % 10; // Add the last digit of n to sum
    n /= 10; // Remove the last digit from n
 }
 cout << "Sum of digits: " << sum << endl;
 return 0;
}
  `

export default function CppVariable() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/cpp-do-while"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/cpp-looping"; // Update with your actual URL

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
               While loop c++:
              </h1>
               <p>While the loop will give this condition. And the loop's body executes until the given condition is false.</p>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
            While loop C++ syntax
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
                  Q-Write a program to Increment value in C++ while loop?
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
              <CodeEditorFiled code={code2}  />
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
  <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">While loop uses logic operator C++ Example:</h1>
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
              <CodeEditorFiled code={code3}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">While loop Reverse C++</h1>
  <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    
Q-Write a program to input an integer number and print in reverse in C++ programming?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code4}/>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Output :</h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
enter a no 2468 

8 6 4 2 
  </p></div>
  <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">While loop Reverse C++</h1>
  <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-Write a program to input found out the sum of digits of integer no?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code5}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">Output :</h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold "><p class="whitespace-pre-wrap ">
                
enter a no 2468 <br/>

sum of digit= 20
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
