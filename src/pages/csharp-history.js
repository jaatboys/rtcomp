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

const CSharpHistory = () => {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/csharp-overriding"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/csharp-introduction"; // Update with your actual URL

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
  <CsharpNavBar></CsharpNavBar>
  <Head>
 
 <title>Master the Art of C# History: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# History tutorial for beginners.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and  questions of all technology like c# tutorial, c# tutorial,c# tutorial for beginners in deeply knowledge With Deeply" />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,C# history,learn code,Learn Programming Tutuorial For Begineers,Learn Programming Online " />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-history" />
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
                    <div className='text-[#9EB2D2]'>
                           
                           <p>
                      
                           1, C# is the first of the programming languages Planned for the Common Language Infrastructure (CLI).
                           </p>
                           <p>
                      
                           2, C# programming languages were designed by Anders Hejlsberg
                      </p>

                      <p>
                      
                      3, C# 8.0 Version Stable Release on 23/09/2019 is the first major specifically targets on .NET Core
                 </p>
                 <p>
                      
                 4, Csharp 9.0 Version Preview Release on 20/05/2020
                 </p>

                      </div>
                    </div>
  
                    <div class="flex flex-col lg:mr-20 md:mr-12 sm-mr-10 mr-0 justify-center  ">
  <div class="flex flex-col mt-6">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden sm:rounded-lg">
          <table class="min-w-full text-sm text-gray-400">
            <thead class="bg-gray-800 text-xs uppercase font-medium">
              <tr>
                <th></th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                C# Versions
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                C# Versions release date
                </th>
               
              </tr>
            </thead>
            <tbody class="bg-gray-700">
              <tr class=" bg-opacity-20  font-medium">
                <td class="pl-4">
                  1
                </td>
                <td class="flex px-6 py-4 whitespace-nowrap">
                  
                    <span class="ml-2 font-medium">	C# Version 1.0</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                2002
                </td>
               
                </tr>
                <tr className='bg-gray-800 font-medium'>
                  <td class="pl-4 ">
                  2
                </td>
                  <td class="flex px-6 py-4 whitespace-nowrap">
                    
                      <span class="ml-2 ">	C# Version 2.0</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                   2005
                </td>
                    
                  </tr>
                  <tr className='font-medium'>
                    <td class="pl-4">
                  3
                </td>
                    <td class="flex px-6 py-4 whitespace-nowrap">
                      
                        <span class="ml-2 font-medium">	C# Version 3.0</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                2008
                </td>
                      
                    </tr>
                    <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">	C# Version 4.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                      2010
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">	C# Version 5.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                     2012
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">	C# Version 6.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                      2015
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">C# Version 7.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                      2017
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">C# Version 8.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        23/09/2019
                </td>
                      
                      </tr>

                      <tr className='bg-gray-800 font-medium'>
                      <td class="pl-4">
                  4
                </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        
                          <span class="ml-2 ">	C# Version 9.0</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        20/05/2020
                </td>
                      
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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

export default CSharpHistory;