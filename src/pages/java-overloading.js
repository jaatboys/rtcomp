import React, { useEffect, useState } from "react";
import JavaBar from "./javaSidebar";
import CodeEditorFiled from "../app/components/CodeEditor";
import JavaNavBar from "./JsNav";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useRouter } from "next/router";
import Header from "../app/components/Header/page";
import Footer from "../app/components/Footer/Footer";
import Head from "next/head";
import Layout from "../app/layout";

export default function JavaOverloading() {
  const code1 = `
class overload 
{
  void over(){
    System.out.println("1 over");
  }
  void over(String x) //give one arguement
  {
    System.out.println("2 over");
  }
  public static void main(String[]args)
  {
    overload o = new overload();
    o.over();
                             
  }
}
    `;
  const codeout1 = `
1 over
    `;
  const code2 = `
class overload 
{
  void over(int a,String x) // give 2 arguement but first integer and the second string
  {
    System.out.println("1 over");
  }
  void over(String x,int a) // give 2 arguement but first string and the second integer
  {
    System.out.println("2 over");
  }
  public static void main(String[]args)
  {
    overload o = new overload();
    o.over(25,"Ram");//check and call first string and second integer arguement method
  }
}
    `;
  const codeout2 = `
1 over
    `;
  const code3 = `
class overload 
{
  void over(int a) // give 1 arguement but this is an integer
  {
    System.out.println("int overload");
  }
  void over(String x) // give 1 arguement but this is string
  {
    System.out.println("string overload");
  }
  public static void main(String[]args)
  {
    overload o = new overload();
    o.over("Har-Har-Mahadev");//check and call first string and second integer arguement method
  }
}
    `;
  const codeout3 = `
string overload
    `;

  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/java-overriding"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/java-association"; // Update with your actual URL

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
        <Header></Header>
        <JavaNavBar />
        <Head>
          <title>
            Master the Art of Java Method overloading: A Beginner's Tutorial
            Guide by CodeExampler
          </title>
          <meta
            name="description"
            content="Java overloading tutorial for beginners.overloading java method is the example of compile-time polymorphism and this is also known as a static polymorphism in java."
          />
          <meta
            name="keywords"
            content="codeexampler,programming language,tutorial for begineers,java overloading,method overloading in java
,java overloading methods,constructor overloading in java,java overloading operators,java override tostring,java overloading vs overriding,overloading and overriding in java,java overloading methods example
,java overloading overriding,java overloading program
,java program for method overloading"
          />
          <link
            rel="canonical"
            href="https://www.codeexampler.com/java-overloading"
          />
        </Head>

        <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
          {/* Python bur component   */}
          <JavaBar
            ListActioveMobile={ListActioveMobile}
            setListActiveMobile={setListActiveMobile}
          ></JavaBar>

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
                  Overloading java method is the example of compile-time
                  polymorphism and this is also known as a{" "}
                  <strong> static polymorphism in java.</strong>
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Rules of overloading java method:
              </h1>

              <div className="font-semibold">
                <p>
                  1, If you call two methods so both methods place inside the
                  same class. <br />
                  2, Two or multiple method names are same. <br />
                  3, Two or multiple method arguments are different means you
                  change.
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Types of Arguments:{" "}
              </h1>
              <div className="text-[#9EB2D2]">
                <p font-semibold>
                  A, Sequence of argument
                  <br />
                  B, Numbers of argument
                  <br />
                  C, Type of argument
                </p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a Program no of argument example in method
                      overloading?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code1} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout1}</p>
              </div>

              <div className="text-[#9EB2D2]">
                <p>
                  when we call over() method so on that time inside this method
                  no argument passed so this method call no argument method.
                </p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a Program the sequence of argument change?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code2} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout2}</p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a Program type of arguement?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code3} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout3}</p>
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
}
