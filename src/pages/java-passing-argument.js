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
export default function JavaPassingArgument() {
  const code1 = `
class A { 
public static void argument(int a) { // int a is a formal argument
    System.out.println("my no is " + a);
} 
    
public static void main(String[] args) { 
    int n = 20; 
    argument(n); // n is an actual argument
    } 
 }
    `;
  const codeout1 = `
20
    `;

  const code2 = `
public class A
 { 
   public static void check (int i) //(int i) is a formal argument
    { 
      if(i%2==0)
       { 
        System.out.println("even no");
       } 
      else
       { 
        System.out.println("odd no");
       } 
     } 
   public static void main (String[] args) 
    { 
     int a = 40; 
     check (a); // a is a actual argument
    } 
} 
    `;
  const codeout2 = `
40
    `;
  const codeans2 = `
even no
    `;
  const code3 = `
public class A
 { 
   public static void maximum (int a , int b) 
    { 
      if(a>b)
       { 
        System.out.println("maximum="+a);
       } 
      else
       { 
        System.out.println("maximum="+b);
       } 
     } 
   public static void main (String[] args) 
    { 
     int x = 40  , y = 65; 
     maximum (x , y); 
    } 
} 
    `;
  const codeout3 = `
maximum = 65
    `;

  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/java-enum"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/java-overriding"; // Update with your actual URL

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
          Master the Art of Java passing arguments: A Beginner's Tutorial Guide
          by CodeExampler
        </title>
        <meta
          name="description"
          content="Java passing arguments tutorial for beginners.An argument may be a variable as a constant value that is used in the () of function."
        />
        <meta
          name="keywords"
          content="codeexampler,programming language,tutorial for beginners,java passing argument,passing argument in java,java argument passing example,argument passing in java with example,passing argument with java,java variable arguments pass list,java jar pass arguments command line,java passing arguments,java passing hashmap as argument
java passing parameters cmd,java pass arguments to jar file,java pass arguments as array,java pass arguments to run method,java passing optional arguments"
        />
        <link
          rel="canonical"
          href="https://www.codeexampler.com/java-passing-argument"
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
            <div className="text-[#9EB2D2] font-bold">
              <p>
                An argument may be a variable as a constant value that is used
                in the () of function.
              </p>
            </div>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q-Write a Program Example of the namespace in Java?
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

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q-Write a Program to check a no is even or odd by using
                    passing argument?
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
            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h1>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeans2}</p>
            </div>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q-Write a Program check greater no by using function?
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
