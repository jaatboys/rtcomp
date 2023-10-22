import React, { useState, useEffect } from "react";
import PythonBar from "./PythonBar";
import CodeEditorFiled from "../app/components/CodeEditor";
import PythonNavBar from "./pythonNav";
import { useRouter } from "next/router";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Footer from "../app/components/Footer/Footer";
import Header from "../app/components/Header/page";
import Head from "next/head";
import "./styles.css";
import Layout from "../app/layout";
const code = `
while (condition)
  -
  Statement
  -
  `;

const code1 = `
  For(Statement ;condition;Statement)
  Statement;
  `;

const PythonLooping = () => {
  const router = useRouter();
  const [ListActiveMobile, setListActiveMobile] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/python-while"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/python-if-else-if"; // Update with your actual URL

    // Navigate to the previous page
    router.push(previousPageUrl);
  };
  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const fileName = pathArray[pathArray.length - 1];

    // Add spaces between uppercase letters and capitalize the first letter of each word
    const formattedFileName = fileName
      .replace("-", " ")
      .replace(/([A-Z])/g, " $1")
      .trim();

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

        <title>
          Master the Art of Python Looping: A Beginners Tutorial Guide by
          CodeExampler
        </title>
        <meta
          name="description"
          content="Python loops tutorial for beginners.Looping Statement in Pythonis used to repeat a particular piece of cards until the given condition is false."
        />
        <meta
          name="keywords"
          content="codeexampler,programming language,tutorial for begineers,python loop,python loops,python loop for,python loop while,python loop range,for loop python 3,python loop through dictionary,python for loop break,python loop through list
,python for loop continue,python loop example,python loop syntax,python loop step,python loop with index,python loop break,python loop index,python loop string"
        />
        <link
          rel="canonical"
          href="https://www.codeexampler.com/python-looping"
        />

        <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
          {/* Python bur component   */}
          <PythonBar
            ListActioveMobile={ListActiveMobile}
            setListActiveMobile={setListActiveMobile}
          ></PythonBar>

          <div className="w-full relative ">
            {/* only mobile mode show */}
            <button
              onClick={() => setListActiveMobile(!ListActiveMobile)}
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
                {" "}
                Python looping Statement:{" "}
              </h2>

              <div className="text-[#9EB2D2]">
                <p>
                  A looping Statement in Python uses to repeat a particular
                  piece of cards until the given condition is false.
                </p>
              </div>

              <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                There are two types of loop statements in python programming:
              </h3>

              <div className="text-[#9EB2D2]">
                <p className="font-bold">
                  1, Using a while loop in Python Statement <br />
                  2, Using a for looping in Python <br />
                </p>
              </div>

              <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                1, while loop in python:
              </h4>

              <div className="text-[#9EB2D2]">
                <p>
                  A while-loop for Python will give the Python condition, and
                  the loops body executes until the condition is false.
                </p>
              </div>

              <h5 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                while loop python syntax
              </h5>

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
                <CodeEditorFiled code={code} setCode={undefined}/>
              </div>

              <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                2, For loop python:
              </h4>

              <div className="text-[#9EB2D2]">
                <p>
                  1, Python While loop condition executes when the loops body
                  until that the condition is false. <br />
                  2, This for loop uses to repeat a particular piece of code for
                  a fixed no of times <br />
                  3, Python must use two semicolons <br />
                </p>
              </div>

              <h5 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                for loop python syntax
              </h5>

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

export default PythonLooping;
