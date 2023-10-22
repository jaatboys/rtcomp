import React, { useEffect, useState } from 'react';
import JavaBar from './javaSidebar'
import CodeEditorFiled from '../app/components/CodeEditor';
import JavaNavBar from './JsNav';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Header from '../app/components/Header/page'
import Footer from '../app/components/Footer/Footer';
import Head from 'next/head';
import Layout from "../app/layout";

export default function JavaLiterals() {
    const code1 = `
int a="Code Exampler";

int is a data_types 
a is a variable
= is an operator

Code Exampler  is a java string literal 
 `
const code2 = `
String a="Hello";
String b="Ram";
System.out.println(a+" "+b);

OR

String a,b;
a="Hello";
b="CodeExampler";
System.out.println(a+" "+b);
  `
const codeout2 = `
Hello Ram 
Hello CodeExampler 
 `
const code3 = `
int a=10;
int b=20;
System.out.println(a+" "+b);

OR

int a,b;
a=120;
b=200;
System.out.println(a+" "+b);
  `
const codeout3 = `
10 20 
120 200 
  `
    const code4 = `
 float a,b;
 a=400.8206f;
 b=40.25f;

OR
 
 double a,b;
 a=400.8206d;
 b=40.25d;

OR
 
 float a;
 double b;
 a=400.8206f;
 b=40.25d;
    `
    const code5 = `
String a;
a="CodeExampler";
char h=a.charAt(2); 
System.out.println(h);
    `
    const codeout5 = `
d
    `
    const code6 = `
boolean a=true;
boolean b=false;
System.out.println(a+" "+b);
 
 OR
 
boolean a,b;
a=true;
b=false;
System.out.println(a);
System.out.println(b);
    `
    const codeout6 = `
true false  
true  
false 
    `
    
    const router = useRouter();
    const [ListActioveMobile,setListActiveMobile] = useState(true);
    const [pageTitle, setPageTitle] = useState("");
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/java-data-types"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/java-string"; // Update with your actual URL

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
 
 <title>Master the Art of Java literals: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Java literal tutorial for beginners.those value fixed to a variable and refer to fixed values.This is known as known as literal in java" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,java literal
,literal in java,java literals,java octal literal,java hexadecimal literal,java array literal syntax,java literal set,java representation of octal literal 6
"/>
<link rel="canonical" href="https://www.codeexampler.com/java-literals" />
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
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Q-what is java literals?</h1>

<div className='text-[#9EB2D2]'>

    <p>
        <strong> Answer: </strong>  <br />
        Those values are fixed to a variable and refer to fixed values. That is known as Literals in Java. <br />

        1, literal is also known as constants. <br />
        2, literal depends upon its type. <br />
        3, Java literals have many primitive data types.
    </p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Literal in Java Example:</h1>

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



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>There are Six types of Literals in Java:</h1>

<div className='font-bold'>

    <p>
        1, String Literals <br />
        2, Integer literals <br />
        3, Float literals <br />
        4, Character literals <br />
        5, Boolean literals <br />
        6, Null literals
    </p>

</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>1, String literal in Java Example:</h1>

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
                      <CodeEditorFiled code={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                        <CodeEditorFiled code={codeout2} />
                        </div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>2, Integer literal in Java Examples:</h1>

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
                      <CodeEditorFiled code={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                        <CodeEditorFiled code={codeout3} />
                        </div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>3, Float literals in Java Example:</h1>

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
<CodeEditorFiled code={code4} />
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>4, Character literals in Java: </h1>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Using charAt() Method :</h1>

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
                      <CodeEditorFiled code={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                        <CodeEditorFiled code={codeout5} />
                        </div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>5, Boolean literals in java Example:</h1>

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
                      <CodeEditorFiled code={code6} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                        <CodeEditorFiled code={codeout6} />
                        </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Null literals in Java</h1>

<div className='text-[#9EB2D2]'>

    <p>
        Null literals are used to indicate that this object is not available more.
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
