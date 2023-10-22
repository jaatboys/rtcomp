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

const CSharpOverloading = () => {
  const code1 = `
class overload
{
void over ()
{
Console.WriteLine ("1 over");
}
{
void over (String x) // give one argument  
{
Console.WriteLine ("2 over");
}
public static void Main (String [] args)
{
overload o = new overload ();
o.over ();
}
}
  `;
  const codeout1 = `
1 over 
  `;
  const code2 = `
class 
{
void over (int a, String x) // give 2 argument but first integer and second string
{
Console.WriteLine ("1 over");
}
void over (String x, int a) // give 2 argument but first string and the second integer
{
Console.WriteLine ("2 over");
}
public static void Main (String [] args)
{
overload o = new overload ();
o.over (25, "Ram"); // check and call first string and second integer argument method
}
}
  `;
  const codeout2 = `
1 over 
  `;
  const code3 = `  
class overload
{
void over (int a) // give one argument but this is an integer
{
Console.WriteLine ("int overload");
}
{
void over (String x) // give one argument but this is a string
{
Console.WriteLine ("string overload");
}
public static void Main (String [] args)
{
overload o = new overload ();
o.over ("Har-Har-Madadev");
}
} 
  `;
  const codeout3 = `
string overload 
  `;

  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/csharp-overriding"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/csharp-association"; // Update with your actual URL

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
            Master the Art of C# overload: A Beginner's Tutorial Guide by
            CodeExampler
          </title>
          <meta
            name="description"
            content="C# overload tutorial for beginners.overloading in c# method is the example of compile-time polymorphism and this is also known as a static polymorphism in c#. CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners"
          />
          <meta
            name="keywords"
            content="codeexampler,programming language,No of argument example in method overloading in C#,Static Polymorphism in C#,Method overloading in c# example,tutorial for begineers,C# overload,c# overload for,c sharp overload,Overload tutorial in C#"
          />
          <link
            rel="canonical"
            href="https://www.codeexampler.com/csharp-overloading"
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
                  Overloading in c# method is the example of compile-time
                  polymorphism and this is also known as a static polymorphism
                  in c#.
                </p>

                <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                  Rules of overloading in the CSharp(C#) method:
                </h1>

                <div className="text-[#9EB2D2]">
                  <p>
                    1, If you call two methods so both methods place inside the
                    same class
                  </p>

                  <p>2, Two or multiple method names are same</p>
                  <p>
                    3, Two or multiple method arguments are different means you
                    change
                  </p>
                </div>

                <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                  a, Sequence of argument <br />
                  b, Numbers of argument
                  <br />
                  c, Type of argument
                </h1>

                <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                  Method overloading in c# example:
                </h1>

                <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                  <div className=" flex gap-2 pl-7 items-center">
                    <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                    <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                    <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                    <div className="mx-1">
                      <p className="text-lg font-semibold text-[#01B6FF]">
                        Q-No of argument example in method overloading in C#?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1f3040] rounded-b-xl">
                  <CodeEditorFiled code={code1} />
                </div>

                <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                  Output :
                </h1>
                <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                  <p className="whitespace-pre-wrap ">{codeout1}</p>
                </div>

                <div className="text-[#9EB2D2]">
                  <p>
                    when we call over() method so on that time inside this
                    method no argument passed so this method call no argument
                    method
                  </p>
                </div>

                <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                  <div className=" flex gap-2 pl-7 items-center">
                    <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                    <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                    <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                    <div className="mx-1">
                      <p className="text-lg font-semibold text-[#01B6FF]">
                        Q-Sequence of argument change in method overloading in
                        C#?
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

                <br />
                <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                  <div className=" flex gap-2 pl-7 items-center">
                    <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                    <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                    <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                    <div className="mx-1">
                      <p className="text-lg font-semibold text-[#01B6FF]">
                        Q-Type of argument in method overloading in C#?
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

export default CSharpOverloading;
