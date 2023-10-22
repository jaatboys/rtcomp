import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import CsharpNavBar from "./pythonNav";
import { useRouter } from "next/router";
import CodeEditorFiled from "../app/components/CodeEditor";
import CsharpBar from "./CsharpBar";
import Header from "../app/components/Header/page";
import Head from "next/head";
import Footer from "../app/components/Footer/Footer";
import Layout from "../app/layout";


const CSharpForLoop = () => {
const code1 = `
For (initialization; condition; iteration)
{ 
Statement sequence
} 
  `
const code2 = `
using System;
namespace forloop
{ 
class Program 
{ 
static void Main (string[]args)
{ 
int i;
for  (i = 1; i <= 10; i ++)
{ 
Console.WriteLine ("Loop Start: " + i);
} 
} 
} 
} 
  `
const codeout2 = `
Loop Start: 1 
Loop Start: 2 
Loop Start: 3 
Loop Start: 4 
Loop Start: 5 
Loop Start: 6 
Loop Start: 7 
Loop Start: 8 
Loop Start: 9 
Loop Start: 10 
  `
const code3 = `
using System;
namespace forloop
{ 
 class Program 
 { 
 static void Main (string[]args)
 { 
    int i;
    for (i = 1; i <= 10; Console.WriteLine (i), i++);
 } 
 } 
} 

  `
const codeout3 = `
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
  `
const code4 = `
using System;
namespace forloop
{ 
class Program 
{ 
static void Main (string[]args)
{ 
int i;
for  (i = 1; i <= 10; i ++)
{ 
Console.WriteLine (i);
} 
Console.WriteLine ("Code Exampler");
} 
} 
} 
 `
const codeout4 = `
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
Code Exampler
  `
const code5 = `
using System;
namespace forloop
{ 
class Program 
{ 
static void Main (string[]args)
{ 
int i;
for  (i = 1; i <= 10; i ++)
{ 
Console.WriteLine (i);
Console.WriteLine ("Ram Ram");
} 
} 
} 
} 
  `
const codeout5 = `
1 
Ram Ram
2 
Ram Ram
3 
Ram Ram
4 
Ram Ram
5 
Ram Ram
6 
Ram Ram
7 
Ram Ram
8 
Ram Ram
9 
Ram Ram
10 
Ram Ram
  `
const code6 = `
using System;
namespace forloop
{ 
class Program 
{ 
static void Main (string[]args)
{ 
int i;
for (i = 1; i <= 10; i ++) { 
Console.WriteLine ("Hello Ram "+i); } 
} 
} 
} 
  `
const codeout6 = `
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
  `
const code7 = `
using System;
namespace forloop
{ 
class Program 
{ 
static void Main (string[]args)
{ 
int a = 0, b = 1,c,i;
for (i = 1; i <= 10; i ++) 
{ 
c  = a + b; 
Console.WriteLine (c); 
a = b; 
b = c; 
} 
} 
} 
} 
  `
const codeout7 = `
1
2
3
5
8
13
21
34
55
89
  `

   
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "./CSharpBreak"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "./CSharpDoWhile"; // Update with your actual URL

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
        <div className=' bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins'>
  
  <Header/>
  <CsharpNavBar></CsharpNavBar>
  <Head>
 
 <title>Master the Art of C# for loop: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# for loop tutorial for beginners.for loop in C# is The body of the loop must be executed until the given condition is false. CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# for loop,c# for loop for,c sharp for loop,c# for loop for loop,end for loop c#,c# exit for loop,exit while loop c#,c# continue,for loop foreach c#,c# foreach for loop,c# foreach continue" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-for-loop" />
 </Head>


           <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <CsharpBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CsharpBar>
  
                <div className='w-full relative '>
                    {/* only mobile mode show */}
                    <button onClick={() => setListActiveMobile(!ListActioveMobile)} className='absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white'>All Topics</button>
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
                    <div className='space-y-3'>
                    <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>For loop in CSharp</h1>


<div className='text-[#9EB2D2]'>
       
       <p>
  
       1, The body of the loop must be executed until the given condition is false <br />
2, In the c# for loop semicolon, must be used <br />
3, This c# for loop is used to repeat a particular piece of code for a fixed no of times<br />
       </p>
      
  </div>


  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>for loop syntax in c#</h1>

  <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'></p>
</div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled value={code1} />
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>C# for loop example:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to print a number from 1 to 10 in C# for loop?</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled value={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout2} 
              </p>
    </div>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program loop starts from 1 to 10 but print from 2 to 10 in C# for loop Example?</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled value={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout3} 
              </p>
    </div>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to print a name when the program is complete in c# for loop Example?</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled value={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout4} 
              </p>
    </div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to print a name again in c# for loop Example?</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled value={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout5} 
              </p>
    </div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to combine a no and name in c# for loop Example?</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled value={code6} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout6} 
              </p>
    </div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
<p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to fibonacci series in c# for loop Example?</p>
</div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled value={code7} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
    <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                   <p className='font-bold whitespace-pre-wrap '>
              {codeout7} 
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
);
};

export default CSharpForLoop;