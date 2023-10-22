import React, { useEffect, useState } from 'react';
import JavaBar from './javaSidebar'
import CodeEditorFiled from '../app/components/CodeEditor';
import JavaNavBar from './JsNav';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Header from '../app/components/Header/page'
import Footer from '../app/components/Footer/Footer';
import Head from 'next/head';
import Layout from '../app/layout'
export default function JavaIfElse() {

    const code1 = `
if(condition)
{ 
  Statement;
} 
else 
{ 
  Statement;
} 
    `
    const code2 = `
public class ifelse_example
{ 
   public static void main (String[] args) 
   { 
    int a ,b;
    a = 100;b = 200;
    if(a>b)
     { 
       System.out.println("a is greater than b");
     } 
    else 
     { 
       System.out.println("b is greater than a");
     } 
   } 
}
    `
    const codeout2 = `
b is greater than a 
    `
    const code3 = `
public class ifelse_example
{ 
   public static void main (String[] args) 
   { 
    int a = 20;
    if(a%2 == 0)
     { 
       System.out.println("even");
     } 
    else 
     { 
       System.out.println("odd");
     } 
   } 
} 
    `
    const codeout3 = `
even 
    `
    const code4 = `
public class ifelse_example
{ 
   public static void main (String[] args) 
   { 
    int i = 200;
    if(i<100)
     { 
       System.out.println("no is less than 100");
     } 
    else 
     { 
      if(i>=1000)
       { 
         System.out.println("greater than 1000");
       } 
      else 
       { 
         System.out.println("Between 100 and 1000");
       } 
     } 
   } 
} 
    `
    const codeout4 = `
Between 100 and 1000 
    `
    
const router = useRouter();
const [ListActioveMobile,setListActiveMobile] = useState(true);
const [pageTitle, setPageTitle] = useState("");
const handleNext = () => {
// Calculate the next page URL based on your routing structure
// For example, if you want to go to the next page, you can manipulate the current route as needed
// Replace this logic with your actual routing structure
const nextPageUrl = "/java-if-else-if"; // Update with your actual URL

// Navigate to the next page
router.push(nextPageUrl);
};

const handlePrevious = () => {
// Calculate the previous page URL based on your routing structure
// For example, if you want to go to the previous page, you can manipulate the current route as needed
// Replace this logic with your actual routing structure
const previousPageUrl = "/java-if"; // Update with your actual URL

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
      <div className=' bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins'>
<Header></Header>
<JavaNavBar/>
<Head>
 
 <title>Master the Java "if else" Statement: A Beginner's Tutorial | CodeExampler</title>
<meta name="description" content="Learn how to use the Java if else statement with CodeExampler's beginner tutorial. Make logical decisions and execute code blocks based on conditions with ease." />
<meta name="keywords" content="Java if else, Java if else statement, Java if else syntax example,if else statement java exercises ,nested if else in java, coding for beginners, CodeExampler,else if ladder in java" />
<link rel="canonical" href="https://www.codeexampler.com/java-if-else" />
</Head>


         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <JavaBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></JavaBar>

              <div className='w-full relative '>
                  {/* only mobile mode show */}
                  <button onClick={() => setListActiveMobile(!ListActioveMobile)} className='absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white'>All Topics</button>
                  {/* ----------------- */}
                  <div className="flex justify-between mt-3">
        <button onClick={handlePrevious} className="flex text-lg gap-1 text-[#9EB2D2] no-underline">
          <BsFillArrowLeftCircleFill className="text-4xl mt-1" /> <span className="mt-2">Previous</span>
        </button>
        <p className="mt-3 lg:mt-0 text-3xl no-underline text-[#01B6FF] capitalize">
          {pageTitle}
        </p>
        <button onClick={handleNext} className="flex text-lg gap-1 text-[#9EB2D2] no-underline">
          <span className="mt-2">Next</span>
          <BsFillArrowRightCircleFill className="text-4xl mt-1" />
        </button>
      </div>


                  <div className='space-y-3'>
                  <div className='text-[#9EB2D2]'>

<p>

    when if the condition is true so on that time target of the will be executed but if a condition is false so if it exists and the target of the else will be executed.
</p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java if else statement Syntax :</h1>

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
<CodeEditorFiled code={code1} />
</div>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to input a number and check this value is greater in Java if-else Statement Example?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled code={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>

            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to check a no is even or odd in Java if-else Statement Example?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>


<h1 className='text-[#01B6FF]'>Nested list in Java :</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q- Write a Program to input a no and Java if-else Statement Example?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled code={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
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
