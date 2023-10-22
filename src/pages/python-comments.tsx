import React, { useEffect, useState } from "react";
import PythonBar from "./PythonBar";
import CodeEditorFiled from "../app/components/CodeEditor";
import PythonNavBar from "./pythonNav";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useRouter } from "next/router";
import Footer from "../app/components/Footer/Footer";
import Header from '../app/components/Header/page'
import Layout from "../app/layout";

const code = `
# this can be one line comment in python
# print two names.
  `;

const code1 = `
print("Ram Chaudhary") #This line print one name 
a = 10 # Assign 10 to a 
  `;

const code2 = `
# ******************
# This is a Multi-line comments 
# ******************
  `;

const PythonComments = () => {
  const [ListActioveMobile, setListActiveMobile] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/python-operators"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/python-input"; // Update with your actual URL

    // Navigate to the previous page
    router.push(previousPageUrl);
  };
  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const fileName = pathArray[pathArray.length - 1];
  
    // Add spaces between uppercase letters and capitalize the first letter of each word
    const formattedFileName = fileName.replace('-',' ').replace(/([A-Z])/g, ' $1').trim();
    
    // Capitalize the first letter of the entire string
    const capitalizedFileName = formattedFileName.charAt(0).toUpperCase() + formattedFileName.slice(1);
  
    // Set the page title for client-side rendering
    setPageTitle(capitalizedFileName);
  }, []);
  return (
    <Layout>
    <div className=" bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins">
      <Header></Header>
      <PythonNavBar />

      <title>
        Master the Art of Python Comments: A Beginners Tutorial Guide by
        CodeExampler
      </title>
      <meta
        name="description"
        content="Python Comment tutorial for beginners Comments you should add notes within your programs that describe your overall approach to the problem you’re solving"
      />
      <meta
        name="keywords"
        content="codeexampler,python comment,comment in python,python comment multiple lines,python comment block,python comment line,python comment out,python comment syntax"
      />
      <link
        rel="canonical"
        href="https://www.codeexampler.com/python-comments"
      />

      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
        {/* Python bur component   */}
        <PythonBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></PythonBar>

        <div className="w-full relative ">
          {/* only mobile mode show */}
          <button
            onClick={() => setListActiveMobile(!ListActioveMobile)}
            className="absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white"
          >
            All Topics
          </button>
          {/* ----------------- */}
         
           <div className='flex justify-between mt-3'>
                        <div className='block lg:hidden'>

                        </div>
                        <button onClick={() => handlePrevious()} className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>

                        <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{pageTitle.replace('/', '').replaceAll('-', ' ')}</h1>
                        <button onClick={() => handleNext()} className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>
                        <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                            <BsFillArrowLeftCircleFill onClick={() => handlePrevious()} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill>
                            <BsFillArrowRightCircleFill onClick={() => handleNext()} className='text-4xl text-gray-500'></BsFillArrowRightCircleFill>
                        </div>
                    </div>
          <div className="space-y-3">
            <h2 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Comment in Python:
            </h2>

            <div className="text-[#9EB2D2]">
              <p>
                Comments used only for reading. Comments start with the use of (
                # ) Character. So this Hash Symbol (#) indicates as a Comment.
              </p>
            </div>

            <h2 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              There are Three Forms of python comment:
            </h2>

            <div className="text-[#9EB2D2]">
              <p className="font-bold">
                1, Single-line comment in python <br />
                2, Inline comments
                <br />
                3, Multi-Line comments
                <br />
              </p>
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              1, Single line comment in python:
            </h3>

            <div className="text-[#9EB2D2]">
              <p>
                Single line comment started with the hash character (#) and
                Terminated by the end of the line.
              </p>
            </div>

            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Single line comment Example in Python:
            </h4>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]"> </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code} setCode={undefined} />
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              2, Python comment inline:
            </h3>

            <div className="text-[#9EB2D2]">
              <p>This type of comment puts at the end of the line.</p>
            </div>

            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Inline comment Example in Python:
            </h4>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]"> </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code1} setCode={undefined} />
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              3, Python comment on multiple lines:
            </h3>

            <div className="text-[#9EB2D2]">
              <p>If you want to use more than one line for comments.</p>
            </div>

            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Multiple line comment Example in Python:
            </h4>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]"> </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code2} setCode={undefined}  />
            </div>

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
};

export default PythonComments;
