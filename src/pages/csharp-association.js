import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import CsharpNavBar from './pythonNav';
import { useRouter } from "next/router";
import CodeEditorFiled from "../app/components/CodeEditor";
import CsharpBar from "./CsharpBar";
import Header from "../app/components/Header/page";
import Head from "next/head";
import Footer from '../app/components/Footer/Footer'
import Layout from '../app/layout'
const CSharpAssociation = () => {
    const code1 = `
class school
{
void teachers ()
{
Console.WriteLine("teaching");
}
void students ()
{
Console.WriteLine("learn");
}
public static void main (String [] args)
{
Console.WriteLine ("start method");
school s =  new school ();
s.teachers ();// first method 
//s.students();//second method but don’t we use
}
}
    `
    const codeout1 =`
    start method 
teaching 
    `

    const [pageTitle, setPageTitle] = useState("");
    const router = useRouter();
    const [ListActioveMobile, setListActiveMobile] = useState(false);
  
    const handleNext = () => {
      // Calculate the next page URL based on your routing structure
      // For example, if you want to go to the next page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const nextPageUrl = "/csharp-overloading"; // Update with your actual URL
  
      // Navigate to the next page
      router.push(nextPageUrl);
    };
  
    const handlePrevious = () => {
      // Calculate the previous page URL based on your routing structure
      // For example, if you want to go to the previous page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const previousPageUrl = "/csharp-multilevel-inheritance"; // Update with your actual URL
  
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
<CsharpNavBar/>
  <Head>
 
 <title>Master the Art of C# association: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# association tutorial for beginners.association in C# is a collection of similar type of data and stored in manually consecutively under one name CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# association," />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-association" />
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
                  <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Method Start in Example of association in C# ?
 </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code1} onChange={undefined} /> 
</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
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

export default CSharpAssociation;