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

const code = `my_name 
My_Name
`;
const code2 = `code-exampler = false

code.exampler = false

code_exampler = true

codeexampler = true

code exampler = false
`;
const code3 = `int -2a; - wrong 

int a2 - true; 

int _24a - false
`;
const code4 = `int if; - false

int IF; - true
`;
const code5 = `int a ;  // this declare a variable means 'a' is a variable

a = 4;  // this assigns 4 to (a) means assigns a variable a value
`;

export default function CIdentifier() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/c-if-else"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/c-control-structure"; // Update with your actual URL

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
              <div className="text-[#9EB2D2]">
                <p>
                  If is used for making a decision. If and else can be a block
                  statement
                </p>

                <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
                  if statement in C Syntax :
                </h5>
              </div>

              <div>
                <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                  <div className=" flex gap-2 pl-7 items-center">
                    <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                    <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                    <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                    <div className="mx-1">
                      <p className="text-xs smm:text-lg text-[#01B6FF]"></p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1f3040] rounded-b-xl">
                  <CodeEditorFiled code={code} />
                </div>
              </div>

              <h5 className="text-[#01B6FF] mt-3 lg:text-xl">
                Rules of Identifier in c:
              </h5>
              <div>
                <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                  <div className=" flex gap-2 pl-7 items-center">
                    <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                    <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                    <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                    <div className="mx-1">
                      <p className="text-xs smm:text-lg text-[#01B6FF]">
                        Q-Write a program to input a number and check this
                        number is more than or equal to 100?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1f3040] rounded-b-xl">
                  <CodeEditorFiled code={code2} />
                </div>
              </div>
              <h3 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input:
              </h3>
              <div>
                <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                  <div className=" flex gap-2 pl-7 items-center">
                    <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                    <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                    <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                    <div className="mx-1">
                      <p className="text-xs smm:text-lg text-[#01B6FF]">
                        2, It must begin with letters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                  <div className=" flex gap-2 pl-7 items-center">
                    <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                    <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                    <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                    <div className="mx-1">
                      <p className="text-xs smm:text-lg text-[#01B6FF]">
                        3, You don’t use any reserved keyword means:
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1f3040] rounded-b-xl">
                  <CodeEditorFiled code={code4} />
                </div>
              </div>
              <div>
                <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                  <div className=" flex gap-2 pl-7 items-center">
                    <div className="p-1.5 rounded-full bg-[#ff6056]"> </div>
                    <div className="p-1.5 rounded-full bg-[#ffbf21]"> </div>
                    <div className="p-1.5 rounded-full bg-[#29c940]"> </div>
                    <div className="mx-1">
                      <p className="text-xs smm:text-lg text-[#01B6FF]">
                        4, You only type less than 31 characters long
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1f3040] rounded-b-xl">
                  <CodeEditorFiled code={code5} />
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
