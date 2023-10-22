import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Header from "../app/components/Header/page";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import CBar from "./Cbar";
import CodeEditorFiled from "../app/components/CodeEditor";
import { useRouter } from "next/router";
import "./styles.css";
import Footer from "../app/components/Footer/Footer";
import Layout from "../app/layout";
export default function CShortCutKeys() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/c-variable"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/c-passing-argument"; // Update with your actual URL

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
      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
        {/* Python bur component   */}
        <CBar
          ListActioveMobile={ListActioveMobile}
          setListActiveMobile={setListActiveMobile}
        ></CBar>

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
            <div class="space-y-3">
              <div class="text-[#9EB2D2]">
                <p>
                  <br />C programming language Developed in 1972, and Dennis
                  Ritchie wrote this c computer language.
                </p>
              </div>
              <h2 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                The main point about the introduction of the C programming
                language:
              </h2>
              <div class="text-[#9EB2D2]">
                <p>
                  The c programming language is a popular language because it is
                  reliable, easy to use, and simple why anybody learns c firstly
                  then comparison to C, C++ means nobody can learn C++ or C
                  directly. Because when you know are advanced compared to c
                  .all points like class, object, polymorphism, etc. At that
                  time, nobody could learn these languages fast, and C, C, or
                  c++ used the Object-Oriented Programming (OOP) principle.
                </p>
              </div>
              <h2 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Main Points of the introduction of c programming language:
              </h2>
              <div class="text-[#9EB2D2]">
                <p>
                  C language is a 2 generation programming language. <br />A C
                  programming language is a case sensitive language
                  <br />C computer language is a middle-level language and
                  top-down approach
                  <br />
                </p>
              </div>
              <div class="flex justify-between mx-6 sm:mx-12 mt-3 mb-3">
                <button class=" flex  text-lg gap-1 text-[#9EB2D2] no-underline ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    class="text-4xl mt-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                  </svg>{" "}
                  <span class="mt-2">Previous</span>
                </button>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
    </Layout>
  );
}
