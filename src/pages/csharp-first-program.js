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

const CSharpFirstProgram = () => {
  const code = `
using System;
namespace First
{
 class Program
 {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
    }
 }
}
  `;

  const codeout = `
Hello World !
  `;

  const code1 = `
using System;
namespace MyProgram
{
 class Program
 {
     static void Main(string[] args)
     {
      Console.WriteLine("Sports:");
      Console.WriteLine("1. Football");
      Console.WriteLine("2. Badminton");
      Console.WriteLine("3. Tennis");
      Console.WriteLine("4. Cricket");
      Console.WriteLine("Hello, World! program in JavaScript:");
     }
 }
}
   `;
  const codeout1 = `
sports 
  1, football
  2, badminton
  3, tennis 
  4, cricket
hello world program in Javascript 
   `;

  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/csharp-comments"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/"; // Update with your actual URL

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
            Master the Art of C# First Programming: A Beginner's Tutorial Guide
            by CodeExampler
          </title>
          <meta
            name="description"
            content="C# First Programming tutorial for beginners.First Programming in C# Inside text editor when we create a c# project so after the name of file name use extension and .cs is the extensive use for c#. CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners"
          />
          <meta
            name="keywords"
            content="codeexampler,programming language,tutorial for begineers,C# First Programming,c# First Programming for,c sharp First Programming,c# First Programming for loop,end for loop c#,c# exit for loop,First Programming in c#"
          />
          <link
            rel="canonical"
            href="https://www.codeexampler.com/csharp-first-program"
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
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Steps of program in C#:
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  1. Inside text editor when we create a c# project so after the
                  name of file name use extension and .cs is the extensive use
                  for c# <br />
                  2. A namespace is a logical container of types and the main
                  purpose is to group the items.
                  <br />
                  3. After using open curly braces .this open curly braces means
                  They signify that the program is starting and you put all code
                  inside this curly braces
                  <br />
                  4. The text editor automatically creates a class. if your
                  project name is the first program.cs with an extension so by
                  default class name is the first program. And class is also a
                  container means we can store a bunch of code
                  <br />
                  5. Inside class again use curly braces
                  <br />
                  6. Print this code (static void main(string [] args)) this is
                  also a container .this container uses the main() functions so
                  this means code executed by the main function.
                  <br />
                  7. If you type any code Inside the open curly braces is
                  executed by a computer but inside the main method
                  <br />
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Console.WriteLine("Hello World");
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  8. Console represents the input, output or error <br />
                  9. WriteLine means give the output
                  <br />
                  10. Console. WriteLine -means is that output the result in the
                  console
                  <br />
                  11. Console.ReadLine method and is waiting for you to type
                  something
                  <br />
                  12. And after close all curly braces and program run but
                  Mainly Learn c# for loop Statement learn c# for loop Statement
                  with interview Question
                  <br />
                </p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write the Hello world program in C# Example ?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled value={code} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                <p className="font-bold whitespace-pre-wrap ">{codeout} </p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write the Basic Example of Csharp Program ?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled value={code1} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                <p className="font-bold whitespace-pre-wrap ">{codeout1} </p>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </Layout>
  );
};

export default CSharpFirstProgram;
