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

if (condition)
  { 
  statement;
  } 

else if
  { 
  statement;
  } 

else 
  { 
  statement;
  } 
    
     `;
const code1 = `
     

#include <iostream> 
using namespace std; 

int main ()
  { 

 int  i;
 cout << " enter a no";
 cin >> i;

 if (i < 0)
  { 
 cout <<" negative ";
 } 

 else if (i > 0)
  { 
 cout <<" positive ";
 } 

 else 
  { 
 cout <<" zero ";
 } 

return 0; 
}  
      
  `;
const code2 = `
  
#include <iostream> 
using namespace std; 
int main ()

  { 
 int  age;
 cout << " enter age";
 cin >> age;

 if (age >= 60)
  { 
 cout << " old man ";
 } 

 else if (age > 40)
  { 
 cout << " not old and not young ";
 } 

 else if (age > 20)
  { 
 cout << " young age";
 } 

 else 
  { 
 cout <<" child ";
 } 

 return 0; 
 } 
     

  `;
const code3 =
`
#include <iostream> 
using namespace std; 

int main ()
 { 
int  a,b,c;
cout << " Enter A value ";
cin >> a;
cout <<" Enter B value ";
cin >> b;
cout <<" Enter C value ";
cin >> c;
if (a > b && a>c)
 { 
cout <<" Maximum no is "<< a;
} 
else if (b > a && b > c)
 { 
cout <<" Maximum no is "<< b;
} 
else 
 { 
cout <<" Maximum no is "<< c;
} 
return 0; 
}   `


export default function CppVariable() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/cpp-switch"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/cpp-if-else"; // Update with your actual URL

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
            The syntax for if-else if in C++:

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
              <CodeEditorFiled code={code}  />
            </div>

            {/* <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">enter integer value of a 
24 

enter float value of b 
6.8 </p>
            </div> */}
            
            {/* <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
            There are many types of literals:
            </h1>
            <div class="text-[#9EB2D2] font-bold"><p>1, String literals <br/>2, Integer literals<br/>3, Float literals<br/>4, Character literals<br/>5, Boolean literals<br/>6, Null literals<br/></p></div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
            1,String literal in c++ programming language example:
            </h1> */}
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              If-else-if uses more than two options.
            </h1>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-write a program to check a no is positive, negative, or zero?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code1}  />
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">
              enter a no 24 <br/>
positive
     </p>
            </div>
           
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-write a program to input the age and print age detail?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code2} />
            </div>

            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">
              enter age 24 <br/>
young age
              </p>
            </div>
            
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  

                  Q-write a program to find out the maximum within three numbers?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code3}  />
            </div>

            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h1>
            <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p class="whitespace-pre-wrap ">
              Enter A value 2 <br/>
Enter B value 8   <br/>
Enter C value 4 <br/>
       
Maximum no is 8 
    
              </p>
            </div>
            
            <div className='flex justify-between mx-6 sm:mx-12 mt-3 mb-3'>

<button onClick={() => handlePrevious()} className=' flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
<button onClick={() => handleNext()} className=' flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>

</div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
    </Layout>
  );
}
