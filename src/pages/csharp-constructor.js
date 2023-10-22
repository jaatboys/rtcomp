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

const CSharpConstructor = () => {
  const code1 = `
using System;
class Construct 
{ 
  public int a; // change access modifier to public
  
  public Construct() // change access modifier to public
  { 
      a = 40;
  } 
} 

class mainClass 
{ 
  static void Main(string[] args)
  { 
      Construct c1 = new Construct();
      Construct c2 = new Construct();
      Console.WriteLine (c1.a +" "+ c2.a);
  } 
  `
  const codeout1 = `
40 40 
  `
  const code2 = `
using System;
class def 
{ 
def()
{ 
Console.WriteLine ("Hello default constructor in code exampler");
} 
static void Main(string[] args)
{ 
def na = new def();
} 
} 
} 
  `
  const codeout2 = `
Hello default constructor in code exampler
  `
  const code3 = `
using System;
class noarg 
{ 
noarg()
{ 
Console.WriteLine ("This is no Argument constructor in code Exampler");
} 
static void Main(string[] args)
{ 
noarg na = new noarg();
} 
} 
`
  const codeout3 = `
This is no Argument constructor in code Exampler
  `
  const code4 = `
using System;
class para 
{ 
int no; 
para (int i)
{ 
this.no = i;
} 
static void Main(string[] args)
{ 
para pa = new para(10);
Console.WriteLine ("Number is:"+pa.no);
} 
} 
  `
  const codeout4 = `
Number is:10 
  `
  
      
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/csharp-inheritance"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/csharp-object-initializers"; // Update with your actual URL

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
  

  <Header/>
  <CsharpNavBar></CsharpNavBar>
  <Head>
 
 <title>Master the Art of C# Constructor: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# constructor tutorial for beginners.why we use constructor in c# because The main use of constructor initializes an object.constructor in c# has no return type and no use void because of unexpressed return type value of a class" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# constructor,c# constructor for,c sharp constructor,c# constructor for loop,c# exit for loop,exit while loop c#,c# continue,constructor foreach c#,c# foreach constructor" />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-constructor" />
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
                    <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Q-what is a Constructor in c# and why we use a constructor in C# ?</h1>
                        <div className='text-[#9EB2D2]'>
                            <p>
  
                           <span className='font-bold'>Ans-</span>why we use a constructor in c# because The main use of constructor initializes an object constructor in c# has no return type and no use void because of unexpressed return type value of a class.
                            </p>
                            <p>
  
                            Constructor execute automatically when we create an object
                            </p>
                          
  
                        </div>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program Constructor in C# Example?</p>
                  </div>

                </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code1} /> 
</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
              </p>
            </div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are 3 types of constructor in c#:</h1>



<div className='text-[#9EB2D2] font-bold'>
                           
     <p>

     1, Default constructor in c#

     </p>
     <p>

     2, user-defined constructor(no-argument constructor in c#)

</p>
<p>

3, parameterized constructor

</p>
    
</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>1,Default Constructor in c#:</h1>

<div className='text-[#9EB2D2]'>
                           
     <p>

     Default constructor in c# The compiler creates automatically a constructor if you do not create a constructor and this is no-argument constructor this is known as <span className='font-bold'>default constructor.</span>


     </p>
</div>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program Default constructor in C# Example?</p>
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

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Important:</h1>


<div className='text-[#9EB2D2]'>
                           
     <p>

     Constructor create automatically by the compiler if you do not create constructor name of the default
     </p>
    
</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>2, No argument constructor in C#:</h1>

<div className='text-[#9EB2D2]'>
                           
     <p>

     no Argument constructor in C# the user create constructor means this constructor create my own or user and this is also Known as <span className='font-bold'>no-argument constructor</span>
     </p>
    
</div>

<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program no argument constructor in C# Example?</p>
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







<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>3, Parameterized constructor:</h1>

<div className='text-[#9EB2D2]'>
                           
     <p>

     Parameterized constructor in c# user create constructor means this constructor create my own or use and also pass parametrize
     </p>
    
</div>

<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                  <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program Parameterized constructor in C# example?</p>
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
};

export default CSharpConstructor;