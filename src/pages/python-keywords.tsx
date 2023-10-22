import React, { useEffect, useState } from "react";
import PythonBar from "./PythonBar";
import PythonNavBar from "./pythonNav";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Footer from "../app/components/Footer/Footer";
import Header from "../app/components/Header/page";
import Layout from "../app/layout";
const PythonKeywords = () => {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActiveMobile, setListActiveMobile] = useState(false);
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/python-input"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/python-identifiers"; // Update with your actual URL

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
      <Header/>
        <PythonNavBar />
        <Head>
          <title>
            Master the Art of Python Keywords: A Beginners Tutorial Guide by
            CodeExampler
          </title>
          <meta
            name="description"
            content="Python python keyword tutorial for beginners.These keywords cannot be used as identifiers,they cannot be used as names for a variable, class, or method"
          />
          <meta
            name="keywords"
            content="codeexampler,programming language,tutorial for begineers,python keyword,python keywords,python in keyword,python keyword arguments
,python keywords list,python keyword list,python this keyword"
          />
          <link
            rel="canonical"
            href="https://www.codeexampler.com/python-keywords"
          />
        </Head>

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
              <div className="text-[#9EB2D2]">
                <p>
                  1,These keywords cannot be used as identifiers. Keywords do
                  not use as a name for a variable, class, or method <br />
                  2, python Programming keywords are Known as Reserved Words.
                </p>
              </div>

              <h2 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Keywords Table in Python programming language
              </h2>

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
                                None
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left tracking-wider"
                              >
                                and
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left tracking-wider"
                              >
                                assert
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left tracking-wider"
                              >
                                False
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left tracking-wider"
                              >
                                True
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left tracking-wider"
                              >
                                as
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left tracking-wider"
                              >
                                async
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-700 font-medium">
                            <tr className=" bg-opacity-20">
                              <td className="pl-4"></td>
                              <td className="flex px-6 py-4 whitespace-nowrap">
                                <span className="ml-2 font-medium"> break</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                continue
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                del
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                await
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                class
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                def
                              </td>
                              <td className="flex px-6 py-4 whitespace-nowrap">
                                elif
                              </td>
                            </tr>
                            <tr className="bg-gray-800 text-xs uppercase font-medium">
                              <td className="pl-4"></td>
                              <td className="flex px-6 py-4 whitespace-nowrap">
                                <span className="ml-2 font-medium">else</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                finally
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                from
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                if
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                except
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                for
                              </td>
                              <td className="flex px-6 py-4 whitespace-nowrap">
                                global
                              </td>
                            </tr>
                            <tr>
                              <td className="pl-4 font-medium"></td>
                              <td className="flex px-6 py-4 whitespace-nowrap ">
                                <span className="ml-2 ">in</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                lambda
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                not
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                import
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                is
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                nonlocal
                              </td>
                              <td className="flex px-6 py-4 whitespace-nowrap">
                                or
                              </td>
                            </tr>
                            <tr className="bg-gray-800 text-xs uppercase font-medium">
                              <td className="pl-4"></td>
                              <td className="flex px-6 py-4 whitespace-nowrap">
                                <span className="ml-2 font-medium">raise</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                try
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                with
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                pass
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                return
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                while
                              </td>
                              <td className="flex px-6 py-4 whitespace-nowrap">
                                yield
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

export default PythonKeywords;
