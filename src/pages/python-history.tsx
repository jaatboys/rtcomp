import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Header from "../app/components/Header/page";
import Footer from "../app/components/Footer/Footer";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Head from "next/head";
import PythonBar from "./PythonBar";
import PythonNavBar from "./pythonNav";
import { useRouter } from "next/router";
import Layout from "../app/layout";
// import { mainSheet } from 'styled-components/dist/models/StyleSheetManager';
import "./styles.css";

const PythonHistory = () => {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActiveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/python-variables"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/python-exception-handling"; // Update with your actual URL

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
          Master the Art of Python History: A Beginners Tutorial Guide by
          CodeExampler
        </title>
        <meta
          name="description"
          content="Python history tutorial for beginners CodeExampler and Python is a powerful high-level object-oriented language programming language created by Guido Van Rossum"
        />
        <meta
          name="keywords"
          content="codeexampler,programming language,tutorial for begineers,Python history,python introduction tutorial"
        />
        <link
          rel="canonical"
          href="https://www.codeexampler.com/python-history"
        />
      </Head>

      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
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
            <div className="text-[#9EB2D2]">
              <p>
                Python is a powerful high-level object-oriented language
                programming language created by Guido Van Rossum. <br />
                Python was conceived in the late 1980s in the Netherlands and
                released in February 1991.
                <br />
                Python language executes on multiple platforms like Mac,
                Windows, Linux, Unix, Etc.
                <br />
                Python first version launched in Jan 1994.
                <br />
              </p>
            </div>
            <div className="flex flex-col lg:mr-20 md:mr-12 sm-mr-10 mr-0 justify-center  ">
              <div className="flex flex-col mt-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden sm:rounded-lg">
                      <table className="min-w-full text-sm text-gray-400">
                        <thead className="bg-gray-800 text-xs uppercase font-medium">
                          <tr>
                            <th></th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left tracking-wider"
                            >
                              Python Versions
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left tracking-wider"
                            >
                              Python Versions release date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-gray-700">
                          <tr className=" bg-opacity-20  font-medium">
                            <td className="pl-4">1</td>
                            <td className="flex px-6 py-4 whitespace-nowrap">
                              <span className="ml-2 font-medium">
                                Python 1.0
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              January 1994
                            </td>
                          </tr>
                          <tr className="bg-gray-800 font-medium">
                            <td className="pl-4 ">2</td>
                            <td className="flex px-6 py-4 whitespace-nowrap">
                              <span className="ml-2 ">Python 1.5</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              December 31, 1997
                            </td>
                          </tr>
                          <tr className="font-medium">
                            <td className="pl-4">3</td>
                            <td className="flex px-6 py-4 whitespace-nowrap">
                              <span className="ml-2 font-medium">
                                Python1.6
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              September 5, 2000
                            </td>
                          </tr>
                          <tr className="bg-gray-800 font-medium">
                            <td className="pl-4">4</td>
                            <td className="flex px-6 py-4 whitespace-nowrap">
                              <span className="ml-2 ">Python2.0</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              October 16, 2000
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              And at this time, The latest Version is That.
            </h1>

            <div className="flex flex-col lg:mr-20 md:mr-12 sm-mr-10 mr-0 justify-center  ">
              <div className="flex flex-col mt-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden sm:rounded-lg">
                      <table className="min-w-full text-sm text-gray-400">
                        <thead className="bg-gray-800 text-xs uppercase font-medium">
                          <tr>
                            <th> </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left tracking-wider"
                            >
                              3.2
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left tracking-wider"
                            >
                              3.2.6
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left tracking-wider"
                            >
                              2016-02-20
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-gray-700">
                          <tr className=" bg-opacity-20  font-medium">
                            <td className="pl-4"></td>
                            <td className="flex px-6 py-4 whitespace-nowrap">
                              <span className="ml-2 font-medium">3.3</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              3.3.7
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              2017-09-29
                            </td>
                          </tr>
                          <tr className="bg-gray-800 font-medium">
                            <td className="pl-4 "></td>
                            <td className="flex px-6 py-4 whitespace-nowrap">
                              <span className="ml-2 ">3.4</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              3.4.10
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              2019-03-18
                            </td>
                          </tr>
                          <tr className="font-medium">
                            <td className="pl-4"></td>
                            <td className="flex px-6 py-4 whitespace-nowrap">
                              <span className="ml-2 font-medium">3.5</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              3.5.9
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              2020-09-13
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mx-6 sm:mx-12 mt-3 mb-3">
              <button
                onClick={() => handlePrevious()}
                className=" flex  text-lg gap-1 text-[#9EB2D2] no-underline "
              >
                <BsFillArrowLeftCircleFill className="text-4xl mt-1"></BsFillArrowLeftCircleFill>{" "}
                <span className="mt-2">Previous</span>
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

export default PythonHistory;
