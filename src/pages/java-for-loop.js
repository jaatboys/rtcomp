import React, { useEffect, useState } from 'react';
import JavaBar from './javaSidebar'
import CodeEditorFiled from '../app/components/CodeEditor';
import JavaNavBar from './JsNav';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Header from '../app/components/Header/page'
import Footer from '../app/components/Footer/Footer';
import Head from 'next/head';
import Layout from '../app/layout';
export default function JavaForLoop() {
    const code1 = `
for(initialization;condition;iteration)
 { 
  Statement sequence 
 }
    `
    const code2 = `
public class Forloop_example
{ 
   public static void main (String[] args) 
   { 
    int i;
    for(i=1;i<=10;i++)
     { 
       System.out.println("Loop Start: "+i);
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
public class Forloop_example
{ 
   public static void main (String[] args) 
   { 
    int i;
    for(i=1;i<=10;i++)
     { 
       System.out.println(i+1);
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
public class Forloop_example
{ 
   public static void main (String[] args) 
   { 
    int i;
    for(i=1;i<=10;i++)
     { 
       System.out.println(i);
     } 
    System.out.println("Code Exampler");
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
public class Forloop_example
{ 
   public static void main (String[] args) 
   { 
    int i;
    for(i=1;i<=10;i++)
     { 
       System.out.println(i);
       System.out.println("Ram Ram");
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
public class Forloop_example
{ 
   public static void main (String[] args) 
   { 
    int i;
    for(i=1;i<=10;i++)
     { 
       System.out.println("Hello Ram"+i);
     } 
} 
}
    `
    const codeout6 = `
Hello Ram  1 
Hello Ram  2 
Hello Ram  3 
Hello Ram  4 
Hello Ram  5 
Hello Ram  6 
Hello Ram  7 
Hello Ram  8 
Hello Ram  9 
Hello Ram  10 
   `
   const code7 = `
public class fabicono_series
{ 
   public static void main (String[] args) 
   { 
    int a = 0 ,b = 1 ,c ,i;
    for(i=1;i<=10;i++)
     { 
       c = a + b ;
       System.out.println(c);
       a = b ;
       b = c ;
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
    
  const router = useRouter();
  const [ListActioveMobile,setListActiveMobile] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
const handleNext = () => {
  // Calculate the next page URL based on your routing structure
  // For example, if you want to go to the next page, you can manipulate the current route as needed
  // Replace this logic with your actual routing structure
  const nextPageUrl = "/java-break"; // Update with your actual URL

  // Navigate to the next page
  router.push(nextPageUrl);
};

const handlePrevious = () => {
  // Calculate the previous page URL based on your routing structure
  // For example, if you want to go to the previous page, you can manipulate the current route as needed
  // Replace this logic with your actual routing structure
  const previousPageUrl = "/java-do-while"; // Update with your actual URL

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
 
 <title>Master the Art of Java For Loop: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Master the art of Java for loops with CodeExampler's beginner's tutorial guide. Learn how to use Java for loops with multiple programming examples for beginners. This tutorial covers Java for loop syntax, Java for loop examples, Java for loop array usage, Java for loop break and continue statements, and more." />
<meta name="keywords" content="Java for loop,Java loop control statements,CodeExampler,Java programming tutorial
,Java iteration,Java looping constructs,Java loop examples,Java loop syntax,Java loop exercises,Java loop best practices" />
<link rel="canonical" href="https://www.codeexampler.com/java-for-loop" />
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
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java for loop program</h1>

<div className='text-[#9EB2D2]'>

    <p>

        1, The body of the Java for loop must be executed until the given condition is false. <br />
        2, The for loop Java Program semicolon must be used. <br />
        3, This for loop in Java is used to repeat a particular piece of code for a fixed no of times
    </p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java for loop Syntax:</h1>

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



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>For loop in Java Program Example</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to print a number from 1 to 10 in java for loop?</p>
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
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program loop starts from 1 to 10 but print from 2 to 11 in Java for loop Example?</p>
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


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to print a name after Program is complete in Java for loop Example?</p>
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


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to print a name again and again in Java for loop Example?</p>
        </div>

    </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout5}
              </p>
            </div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to combine a no and name in Java for loop Example?</p>
        </div>

    </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled code={code6} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout6}
              </p>
            </div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program to fabonacci series in Java for loop Example?</p>
        </div>

    </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled code={code7} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
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
</Layout>
);
}
