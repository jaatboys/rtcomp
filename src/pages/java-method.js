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
export default function JavaMethod() {
    const code1 = `
Method name( parenthesis or parameter-list);
{ 
  // body of method  
}
    ` 
    const code2 = `
class school
{ 
  public void teachers()
   { 
      System.out.println("teaching");
   } 

   public static void main (String[] args) 
   { 
     System.out.println("start method");
     school s = new school();
     s.teachers();
   } 
} 
    `
    const codeout2 = `
start method
teaching
    `
    const code3 = `
class school
{ 
  public void teachers()
   { 
      System.out.println("teaching");
   } 


  public void students()
   { 
      System.out.println("learn");
   } 

   public static void main (String[] args) 
   { 
     System.out.println("start method");
     school s = new school();
     s.teachers();// first method  
     s.students();// second method  
   } 
} 
    `
    const codeout3 = `
start method
teaching
learn
    `
    const code4 = `
class schoolPeon
{ 
  void peon()
   { 
      System.out.println("this is peon");
   } 
} 
class school
{ 
  public void teachers()
   { 
      System.out.println("teaching");
   } 


  public void students()
   { 
      System.out.println("learn");
   } 

   public static void main (String[] args) 
   { 
     System.out.println("start method");
     school s = new school();// create new object 
     school t = new school();// create other new object  
     schoolPeon p = new schoolPeon();
     s.teachers();
     t.students();
     p.peon();
   } 
} 

`
const codeout4 = `
start method
teaching
learn
this is peon
    `

    
const router = useRouter();
const [ListActioveMobile,setListActiveMobile] = useState(true);
const [pageTitle, setPageTitle] = useState("");
const handleNext = () => {
// Calculate the next page URL based on your routing structure
// For example, if you want to go to the next page, you can manipulate the current route as needed
// Replace this logic with your actual routing structure
const nextPageUrl = "/java-user-defined-functions"; // Update with your actual URL

// Navigate to the next page
router.push(nextPageUrl);
};

const handlePrevious = () => {
// Calculate the previous page URL based on your routing structure
// For example, if you want to go to the previous page, you can manipulate the current route as needed
// Replace this logic with your actual routing structure
const previousPageUrl = "/java-class-and-object"; // Update with your actual URL

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
 
 <title>Master the Art of Java Method: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Java Method tutorial for beginners.Methods in java contain one more statement and each method performs only one task" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,java method,java methods,for method java,what is java method,java method main,java method call,java method equals,java method overloading,java method generics,compareto method java,java method signature,java method overriding,java methods list,java method list,java method example,java method class
,java method reference,java method header,java method definition,java method parameter" />
<link rel="canonical" href="https://www.codeexampler.com/java-method" />
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
    1, The methods in java contain one more statement and each method performs only one task. <br />
    2, Each method gives the name and after this name is used to call the method.
</p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Methods in Java Syntax:</h1>

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

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Examples: </h1>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program use one method in Java Example?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled code={code2} />

</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
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
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program Use two methods and create a different object for different methods?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled code={code3} />

</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Important:</h1>

<div className='text-[#9EB2D2]'>

<p>
    You create multiple objects you do but programming run speed is decreased so create less object to gain high speed.
</p>

</div>


<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q- Write a Program using different classes in java Method?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled code={code4} />

</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
              </p>
            </div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Multiple classes in Java Steps follow:</h1>

<div className='text-[#9EB2D2]'>

<p>
    If you create multiple classes in one program and call methods from all classes so firstly you check in which class you write main() method and after you create multiple objects from multiple classes inside main () method class and after by the name of an object call method from main () method class.
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
