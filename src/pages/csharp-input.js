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

const CSharpInput = () => {
  const code1 = `
Console.readline() is used to input a value in C#. 
    `;
  const code2 = `
using System;
namespace inputCsharp
{ 
class Program
{ 
static void Main (string [] args)
{ 
Console.WriteLine ("what is your name");
String name = "CodeExampler";
Console.WriteLine ("My name is "+ name);
} 
} 
} 
    `;

  const codeout2 = `
what is your name 
code Exampler 
My name is code Exampler
    `;
  const code3 = `
using System;
namespace TotalMarks
{
 class Program
 {
  static void Main(string[] args)
  {
      int num1, num2, num3, totalMarks;
      Console.WriteLine("Enter the first number: ");
      num1 = Convert.ToInt32(Console.ReadLine());
      Console.WriteLine("Enter the second number: ");
      num2 = Convert.ToInt32(Console.ReadLine());
      Console.WriteLine("Enter the third number: ");
      num3 = Convert.ToInt32(Console.ReadLine());
      totalMarks = num1 + num2 + num3;
      Console.WriteLine($"Total marks: {totalMarks}");
  }
 }
}
    `;
  const codeout3 = ` 
enter first no
42
enter second no
54
enter third no
65
    `;

  const codeans3 = ` 
sum = 161
        `;

  const code4 = `
using System;
namespace inputcsharp
{ 
class Program
{ 
static void Main (string [] args)
{ 
float p, r, t, SI;
Console.WriteLine ("enter value of p ");
p = Convert.ToInt32 (Console.ReadLine());
Console.WriteLine ("enter value of r ");
r = Convert.ToInt32 (Console.ReadLine());
Console.WriteLine ("enter value of t ");
t = Convert.ToInt32 (Console.ReadLine());
SI = p * r * t / 100;
Console.WriteLine ("Simple interest = " + SI);
} 
} 
} 
    `;
  const codeout4 = `
enter the value of p 
45
enter the value of r 
26
enter the value of t 
18
    `;

  const codeans4 = `
Simple interest = 210.6
    `;

  const code5 = `
using System;
namespace input_area
{ 
class Program
{ 
static void Main (string [] args)
{ 
int l, b, area;
Console.WriteLine ("enter a  value of l");
l = Convert.ToInt32 (Console.ReadLine());
Console.WriteLine ("enter the value of b");
b = Convert.ToInt32 (Console.ReadLine());
area = l * b;
Console.WriteLine ("Area  = " + area);
} 
} 
} 
    `;
  const codeout5 = `
enter a value of l 
5
enter the value of b 
4
    `;

  const codeans5 = `
Area = 20
    `;

  const code6 = `
double r, area;
Console.WriteLine ("enter a  value of r");
r = Convert.ToInt32 (Console.ReadLine());
area  = 3.14 * r * r;
Console.WriteLine ("Area  = " + area);
    `;
  const codeout6 = `
enter a value of r 
4
    `;

  const codeans6 = ` 
Area = 50.24
    `;

  const code7 = `
using System;
namespace input_area
{ 
class Program
{ 
static void Main (string [] args)
{ 
   int a, b, c, add, mult;
    Console.WriteLine ("enter a value of a ");
    a = Convert.ToInt32 (Console.ReadLine());
    
    Console.WriteLine ("enter a value of b ");
    b = Convert.ToInt32 (Console.ReadLine());
    
    Console.WriteLine ("enter a value of c ");
    c = Convert.ToInt32 (Console.ReadLine());

  add = a + b + c;
  mult = a * b * c;
Console.WriteLine ("Addition  = " + add);
Console.WriteLine ("multiply  = " + mult);
} 
} 
} 
    `;
  const codeout7 = `
enter a value of a 
2
enter a value of b 
3
enter a value of c 
4
    `;

  const codeans7 = `  
Addition = 9
multiply = 24
    `;

  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/csharp-literal"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/csharp-identifier"; // Update with your actual URL

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
            Master the Art of C# input: A Beginner's Tutorial Guide by
            CodeExampler
          </title>
          <meta
            name="description"
            content="C# input tutorial for beginners.input in C# is a collection of similar type of data and stored in manually consecutively under one name CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners"
          />
          <meta
            name="keywords"
            content="codeexampler,programming language,tutorial for begineers,C# input,c# input for,csharp input,Input tutorial For Begineers"
          />
          <link
            rel="canonical"
            href="https://www.codeexampler.com/csharp-input"
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
                Input in C# Syntax:
              </h1>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]"></p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code1} />
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-write a program in C# input and print name Example?
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
              <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
                <p className="font-bold whitespace-pre-wrap ">{codeout2} </p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-write a program to input 3 numbers in C# and print the
                      total marks?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code3} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input:
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout3}</p>
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeans3}</p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-write a program to calculate and print a simple interest
                      Example?{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code4} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input:
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout4}</p>
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeans4}</p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program to find and print the area of the
                      rectangle in C# Input?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code5} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input:
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout5}</p>
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeans5}</p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program to find out the value of the pi(3.14)
                      and print area of circle?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code6} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input:
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout6}</p>
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeans6}</p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program to 3 subject marks add all values and
                      multiply all the values?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code7} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input:
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout7}</p>
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeans7}</p>
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

export default CSharpInput;
