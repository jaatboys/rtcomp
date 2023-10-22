import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Footer from "../app/components/Footer/Footer";
import Header from "../app/components/Header/page";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import JavaScriptBar from "./JsBar";
import "./styles.css";
import { useRouter } from "next/router";
import CodeEditorFiled from "../app/components/CodeEditor";
import Layout from '../app/layout'



export default function JavaScriptVariables() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/javascript-variables"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/javascript-dom-method "; // Update with your actual URL

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
    <div className=" bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins">
      <Header></Header>
      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
        {/* Python bur component   */}
        <JavaScriptBar
          ListActioveMobile={ListActioveMobile}
          setListActiveMobile={setListActiveMobile}
        ></JavaScriptBar>

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
          <div class="space-y-3">
            <div class="text-[#9EB2D2]">
              <p>
                1, Javascript programming languages were designed by Brendan
                Eich <br />
                2, Javascript ECMAScript 1 (1997) or ES1 Version Release on 1997
                is the first version or Edition of javascript <br />
                3, At Present use ES9 Version in javascript <br />
                4, JavaScript is primarily a client-side language, meaning it
                runs on your computer within your browser. <br />
              </p>
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
                            <th
                              scope="col"
                              class="px-6 py-3 text-left tracking-wider"
                            >
                              JavaScript Versions
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left tracking-wider"
                            >
                              JavaScript Versions release date
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-gray-700">
                          <tr class=" bg-opacity-20  font-medium">
                            <td class="pl-4">1</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 font-medium">
                                Javascript Version ES1
                              </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">1997</td>
                          </tr>
                          <tr class="bg-gray-800 font-medium">
                            <td class="pl-4 ">2</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 "> Javascript Version ES2</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">1998</td>
                          </tr>
                          <tr class="font-medium">
                            <td class="pl-4">3</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 font-medium">
                                Javascript Version ES3
                              </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">1999</td>
                          </tr>
                          <tr class="bg-gray-800 font-medium">
                            <td class="pl-4">4</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 ">Javascript Version ES4</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              Rejected
                            </td>
                          </tr>
                          <tr class=" font-medium">
                            <td class="pl-4">5</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 ">Javascript Version ES5</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">2009</td>
                          </tr>
                          <tr class="bg-gray-800 font-medium">
                            <td class="pl-4">6</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 ">Javascript Version ES6</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">2015</td>
                          </tr>
                          <tr class=" font-medium">
                            <td class="pl-4">7</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 ">Javascript Version ES7</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">2016</td>
                          </tr>
                          <tr class="bg-gray-800 font-medium">
                            <td class="pl-4">8</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 ">Javascript Version ES8</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">2017</td>
                          </tr>
                          <tr class=" font-medium">
                            <td class="pl-4">9</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 ">Javascript Version ES9</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">2018</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
      </main>
      <Footer></Footer>
    </div>
  );
}
