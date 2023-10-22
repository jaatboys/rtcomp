import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Head from "next/head";
import Header from "../app/components/Header/page";
import Footer from "../app/components/Footer/Footer";
import PythonBar from "./PythonBar"
import CodeEditorFiled from "../app/components/CodeEditor";
import PythonNavBar from "./pythonNav";
import { useRouter } from "next/router";
import Layout from "../app/layout";

const Pythonexceptionhandling = () => {
  const code1 = `
Try:
-
-
- except:
Exception handling
 `;
  const code2 = `
a = int(input("Enter first no: "))
b = int(input("Enter second no: "))
try:
    c = a/b
    print("Result =%d"%c)
except ZeroDivisionError:
    print("can't divided by zero")
  `;
  const codeout2 = `
Enter first no: 8
Enter second no: 3
  `;

  const codeans2 = `
Result =2
    `;

  const code3 = `
try:
  n = int(input("Enter a no"))
  print("You enter %d"%n)
except ValueError:
  print("only number input")
  `;
  const codeout3 = `
Enter a no 2.5
only number input 
    `;

  const [pageTitle, setPageTitle] = useState("");
  const [ListActioveMobile, setListActiveMobile] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/python-history"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/python-function-override"; // Update with your actual URL

    // Navigate to the previous page
    router.push(previousPageUrl);
  };

  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const fileName = pathArray[pathArray.length - 1];

    // Add spaces between uppercase letters and capitalize the first letter of each word
    const formattedFileName = fileName.replace('-',' ').replace(/([A-Z])/g, " $1").trim();

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
      <PythonNavBar />
      <Head>
        <title>
          Master the Art of Python Exception Handling: A Beginners Tutorial
          Guide by CodeExampler
        </title>
        <meta
          name="description"
          content="Python exception handling tutorial for beginners.A program converts successfully but the result is not correct.it means run time error .this type of error handled by exception handling."
        />
        <meta
          name="keywords"
          content="codeexampler,python exception handling,exception handling in python program,types of exception handling in python,exception handling in python pdf exception handling in python exercises,exception handling in python in hindi,exception handling in python ppt,write a program to implement exception handling in python,how exceptions are handled in python"
        />
        <link
          rel="canonical"
          href="https://www.codeexampler.com/python-exception-handling"
        />
      </Head>

      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
        {/* Python bur component   */}
        <PythonBar
          ListActioveMobile={ListActioveMobile}
          setListActiveMobile={setListActiveMobile}
        ></PythonBar>

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
            <div className="text-[#9EB2D2]">
              <p>
                Python exception handling is a condition that occurs due to an
                error & and an error is a mistake by which a program doesn’t
                work correctly.
              </p>
            </div>

            <h2 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Types of error in Python exception handling:
            </h2>

            <div className="text-[#9EB2D2]">
              <p>
                1, Compile-time error(interpreted time) <br />
                2, This error can occur by the language translator at the time
                of compilation
                <br />
                3, A program converts successfully, but the result is not
                correct. It means run time error .this type of error is handle
                by exception handling.
                <br />
                4, We can set up exception handling blocks in our code.
                <br />
              </p>
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Python Exception Handling Syntax:
            </h3>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2 pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]"></p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code1} setCode={undefined} />
            </div>

            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Python Exception Handling Examples:
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
              <CodeEditorFiled code={code2} setCode={undefined} />
            </div>
            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Input:
            </h4>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout2}</p>
            </div>
            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h4>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeans2}</p>
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Python Exception Handling Examples:
            </h3>

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
              <CodeEditorFiled code={code3} setCode={undefined} />
            </div>
            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h4>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout3}</p>
            </div>

            <h2 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Python exception handling in keyword
            </h2>

            <div className="text-[#9EB2D2]">
              <p>
                Keyword in Python exception handling this statement is final
                keyword will execute one exception cause or not.
              </p>
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

export default Pythonexceptionhandling;
