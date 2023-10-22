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

const CSharpkeyword = () => {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/csharp-operator"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/csharp-comments"; // Update with yourComments actual URL

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
      <div className=" bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins">
        <Header />
        <CsharpNavBar></CsharpNavBar>
        <Head>
          <title>
            Master the Art of C# Keywords: A Beginner's Tutorial Guide by
            CodeExampler
          </title>
          <meta
            name="description"
            content="C# Keywords tutorial for beginners.In C# there are 77 keywords CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners"
          />
          <meta
            name="keywords"
            content="codeexampler,programming language,tutorial for begineers,C# Keywords,c# Keywords for,c sharp Keywords"
          />
          <link
            rel="canonical"
            href="https://www.codeexampler.com/charp-keyword"
          />
        </Head>

        <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
          {/* Python bur component   */}
          <CsharpBar
            ListActioveMobile={ListActioveMobile}
            setListActiveMobile={setListActiveMobile}
          ></CsharpBar>

          <div className="w-full relative ">
            {/* only mobile mode show */}
            <button
              onClick={() => setListActiveMobile(!ListActioveMobile)}
              className="absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white"
            >
              All Topics
            </button>
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
            <div className="space-y-3">
              <div className="text-[#9EB2D2]">
                <p>
                  1, In C# there are 77 keywords <br />
                  2, C# keywords cannot be used as identifiers
                  <br />
                  3, They cannot be used as names for a variable, class, or
                  method.
                  <br />
                  4, Csharp Programming keywords are Known as Reserved Words.
                  <br />
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                C# keyword programming table
              </h1>

              <div class="flex flex-col lg:mr-20 md:mr-12 sm-mr-10 mr-0 justify-center  ">
                <div class="flex flex-col mt-6">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden sm:rounded-lg">
                        <table class="min-w-full text-sm text-gray-400">
                          <thead class="bg-gray-800 text-xs uppercase font-medium">
                            <tr>
                              <th></th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left tracking-wider"
                              >
                                abstract
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left tracking-wider"
                              >
                                as
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left tracking-wider"
                              >
                                base
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left tracking-wider"
                              >
                                bool
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left tracking-wider"
                              >
                                char
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left tracking-wider"
                              >
                                class
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-left tracking-wider"
                              >
                                checked
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-gray-700 font-medium">
                            <tr class=" bg-opacity-20">
                              <td class="pl-4"></td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                <span class="ml-2 font-medium">const</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                Keywords
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">case</td>
                              <td class="px-6 py-4 whitespace-nowrap">byte</td>
                              <td class="px-6 py-4 whitespace-nowrap">catch</td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                continue
                              </td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                default
                              </td>
                            </tr>
                            <tr className="bg-gray-800 text-xs uppercase font-medium">
                              <td class="pl-4"></td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                <span class="ml-2 font-medium">decimal</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                delegate
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">do</td>
                              <td class="px-6 py-4 whitespace-nowrap">else</td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                double
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">event</td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                enum
                              </td>
                            </tr>
                            <tr>
                              <td class="pl-4 font-medium"></td>
                              <td class="flex px-6 py-4 whitespace-nowrap ">
                                <span class="ml-2 ">explicit</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                extern
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">false</td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                boolean
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                foreach
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">if</td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                goto
                              </td>
                            </tr>
                            <tr className="bg-gray-800 text-xs uppercase font-medium">
                              <td class="pl-4"></td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                <span class="ml-2 font-medium">implict</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">in</td>
                              <td class="px-6 py-4 whitespace-nowrap">int</td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                interface
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                internal
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">is</td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                lock
                              </td>
                            </tr>

                            <tr className=" text-xs uppercase font-medium">
                              <td class="pl-4"></td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                <span class="ml-2 font-medium">long</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                namespace
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">new</td>
                              <td class="px-6 py-4 whitespace-nowrap">null</td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                object
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                operator
                              </td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                out
                              </td>
                            </tr>
                            <tr className="bg-gray-800 font-medium">
                              <td class="pl-4 font-medium"></td>
                              <td class="flex px-6 py-4 whitespace-nowrap ">
                                <span class="ml-2 ">params</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                override
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                private
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                Protected
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                public
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                readonly
                              </td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                ref
                              </td>
                            </tr>
                            <tr className=" text-xs uppercase font-medium">
                              <td class="pl-4"></td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                <span class="ml-2 font-medium">return</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                sealed
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">sbyte</td>
                              <td class="px-6 py-4 whitespace-nowrap">short</td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                sizeof
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                static
                              </td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                stackalloc
                              </td>
                            </tr>
                            <tr className="bg-gray-800 text-xs uppercase font-medium">
                              <td class="pl-4"></td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                <span class="ml-2 font-medium">string</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                struct
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">this</td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                switch
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">throw</td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                volatile
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">while</td>
                            </tr>

                            <tr className=" font-medium">
                              <td class="pl-4 font-medium"></td>
                              <td class="  flex px-6 py-4 whitespace-nowrap ">
                                <span class="ml-2 ">true</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">try</td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                typeof
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">uint</td>
                              <td class="px-6 py-4 whitespace-nowrap">ulong</td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                unsafe
                              </td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                unchecked
                              </td>
                            </tr>
                            <tr className="bg-gray-800 text-xs uppercase font-medium">
                              <td class="pl-4"></td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                <span class="ml-2 font-medium">ushort</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">using</td>
                              <td class="px-6 py-4 whitespace-nowrap">void</td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                virtual
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

export default CSharpkeyword;
