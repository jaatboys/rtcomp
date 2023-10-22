import React, { useEffect, useState } from "react";
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
import JavaBar from "./javaSidebar";
import Layout from '../app/layout'

export default function JavaArray() {
  const code1 = `
1,One-dimensional Array
2,Multi-dimensional Array
    `;
  const code2 = `
Ex-{ 20,40,30,60,50 }; 
    `;
  const code3 = `
Type array_name[size];
Ex - int a[];
int b[];
    `;
  const code4 = `
int a[6] = { 20,40,30,60,50 }; 
int a[] = { 1,2,3,5,8,10 }; 
    `;
  const code5 = `
public class Break_example {
public static void main(String[] args) {
    int[] a = { 10, 20, 30, 40, 50 };
    for (int i = 0; i < 5; i++) {
        System.out.println(a[i]);
    }
}
} 
    `;
  const codeout5 = `
10
20
30
40
50
    `;
  const code6 = `
class Array_example {
public static void main(String[] args) {
    int i;
    int a[] = { 10,25,30,45,50,655,700,855,900,1055 };
    for(i = 0; i < 10; i++) {
        if(a[i] % 2 == 0) {
        System.out.println(a[i]);
          }
      }
    }
}
    `;
  const codeout6 = `
10
30
500
700
900
    `;
  const code7 = `
class Program {
public static void main (String[] args) {
  int i;
  int a[] = { 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 };
  
  // Forward loop
  for(i=0; i<8; i++) { 
    System.out.println(a[i]);
  } 
  
  System.out.println("Reverse Start");
  
  // Reverse loop
  for(i=8; i>=0; i--) { 
    System.out.println(a[i]);
  } 
}
}
    `;
  const codeout7 = `
10
20
30
40
50
60
70
80
Reverse Start
90
80
70
60
50
40
30
20
10
    `;
  const code8 = `
public class Program {
public static void main(String[] args) {
  int i, maximum;
  int a[] = { 10, 40, 20, 80, 90, 45, 68, 60, 88, 24 };
  for (i = 0; i < 10; i++) {
      System.out.println(a[i]);
  }
  maximum = a[0];
  for (i = 0; i < 10; i++) {
      if (a[i] > maximum) {
          maximum = a[i];
      }
  }
  System.out.println("Maximum no: " + maximum);
}
}
    `;
  const codeout8 = ` 
10
40
20
80
90
45
68
60
88
24
Maximum no: 90
    `;

  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/java-oops"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/java-continue"; // Update with your actual URL

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
          Master the Art of Java Array: A Beginner's Tutorial Guide by
          CodeExampler
        </title>
        <meta
          name="description"
          content="Learn how to declare, initialize, and manipulate arrays in Java with CodeExampler's free online tutorial. Find examples of array methods, sorting, and converting arrays to lists."
        />
        <meta
          name="keywords"
          content="Java array tutorial, Java array length,reverse array java,how to return an array in java,jagged array in java,Java array methods, convert array to list Java, Java array sorting, Java arraylist, Java array class"
        />
        <link rel="canonical" href="https://www.codeexampler.com/java-array" />
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
            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
              Java array:
            </h1>

            <div className="text-[#9EB2D2]">
              <p>
                1, Array in java is a collection of similar type of data and
                stored in manually consecutively under one name. <br />
                2, The index number will be different. <br />
                3, Main purpose of array is used to handle a large volume of
                data of some type more easily
              </p>
            </div>

            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
              Types of an array in java:
            </h1>
            <h1 className="text-[#01B6FF] font-bold">
              There are two types of Java array:
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

            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
              How Declare array in Java:
            </h1>
            <h1 className="text-[#01B6FF] font-bold">
              That is Basic Array style:
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
              <CodeEditorFiled code={code2} />
            </div>

            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
              Array in Java Syntax :
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
              <CodeEditorFiled code={code3} />
            </div>

            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
              initialization array java:
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
              <CodeEditorFiled code={code4} />
            </div>

            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
              how to Declare(print) the array in java:{" "}
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
              <CodeEditorFiled code={code5} />
            </div>
            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
              Output :
            </h1>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout5}</p>
            </div>

            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
              Examples of Array in Java:{" "}
            </h1>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q- Write a Program to input an array of 10 elements and
                    print only even elements in java array?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code6} />
            </div>
            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
              Output :
            </h1>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout6}</p>
            </div>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q- Write a Program to input an array of 8 elements and print
                    in reverse in array java?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code7} />
            </div>
            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
              Output :
            </h1>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout7}</p>
            </div>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q-Write a Program to input an array of 10 elements and print
                    in a Maximum no?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code8} />
            </div>
            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
              Output :
            </h1>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout8}</p>
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
