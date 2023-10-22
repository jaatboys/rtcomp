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

const CSharpMethod = () => {
  const code1 = `
Method name (parenthesis or parameter -list)
{
// body of method
}
  `;
  const code2 = `
using System;
namespace MethodExample
{
class school 
{ 
  public void teachers () 
  { 
      Console.WriteLine ("teaching");
  } 
  public static void Main (string[]args)
  { 
      Console.WriteLine ("start method");
      school s  = new school ();
      s.teachers();
  } 
}
}
  `;
  const codeout2 = `
start method 
teaching 
  `;
  const code3 = `
using System;
namespace MethodExample
{
class school 
{ 
    public void teachers () 
    { 
        Console.WriteLine ("teaching");
    }
    public void students () 
    { 
        Console.WriteLine ("learn");
    } 
    public static void Main (string[]args)
    { 
        Console.WriteLine ("start method");
        school s = new school();
        s.teachers(); // call first method
        s.students(); // call second method
    } 
    } 
}
  `;
  const codeout3 = `
start method 
teaching 
learn
  `;
  const code4 = `
using System;
namespace ClassExample
{
class school 
{ 
    public void teachers () 
    { 
        Console.WriteLine ("teaching");
    } 
    
    public void students () 
    { 
        Console.WriteLine ("learn");
    } 
    
    public static void Main (string[]args)
    { 
        Console.WriteLine ("start method");
        school s = new school (); // create new object
        school t = new school (); // create other new object
        schoolPeon p = new schoolPeon ();
        s.teachers (); 
        s.students (); 
        p.peon (); 
    } 
} 

class schoolPeon 
{ 
    public void peon () 
    { 
        Console.WriteLine ("this is peon");
    } 
}
} 
  `;
  const codeout4 = `
start method 
teaching 
learn 
this is peon
  `;

  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/csharp-user-define-function"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/csharp-class-and-object"; // Update with your actual URL

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
            Master the Art of C# Method: A Beginner's Tutorial Guide by
            CodeExampler{" "}
          </title>
          <meta
            name="description"
            content="C# Method tutorial for beginners.The c# methods contain one more statement and each method performs only one task, CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners"
          />
          <meta
            name="keywords"
            content="codeexampler,programming language,tutorial for begineers,C# Method,c# Method for,c sharp Method,c# foreach Method,Method call in Csharp(C#)"
          />
          <link
            rel="canonical"
            href="https://www.codeexampler.com/csharp-method"
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
                  1,The C# Methods contain one more statement and each method
                  performs only one task <br />
                  2,Each method gives the name and after this name is used to
                  call the method.
                </p>
              </div>

              <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                <div className=" flex gap-2 pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Methods in C# Syntax:
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code1} />
              </div>

              <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                <div className=" flex gap-2 pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a Program use one method in C#?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code2} />
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout2}</p>
              </div>

              <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                <div className=" flex gap-2 pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a Program Use two methods and create different
                      objects for different methods in C#?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code3} />
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout3}</p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Important:
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  You create multiple objects you do but programming run speed
                  is decreased so create less object to gain high speed.
                </p>
              </div>

              <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                <div className=" flex gap-2 pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a Program use different class on C# Method
                      Example?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code4} />
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout4}</p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Multiple classes in c# Steps follow
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  If you create multiple classes in one program and call methods
                  from all classes so firstly you check in which class you write
                  main() method and after you create multiple objects from
                  multiple classes inside main () method class and after by the
                  name of an object call method from main () method class.
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

export default CSharpMethod;
