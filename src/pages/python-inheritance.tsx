import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import PythonBar from "./PythonBar";
import CodeEditorFiled from "../app/components/CodeEditor";
import PythonNavBar from "./pythonNav";
import Header from "../app/components/Header/page";
import Head from "next/head";
import Footer from "../app/components/Footer/Footer";
import { useRouter } from "next/router";
import "./styles.css";
import Layout from "../app/layout";
const code = `
class college: 
  roll_no = 0
  a = 0
  b = 0
  c = 0
  def input_data(self):
      self.roll_no = int(input("Enter a roll no"))
      self.a = int(input("Enter a"))
      self.b = int(input("Enter b"))
      self.c = int(input("Enter c"))
class MCA(college): 
  total_marks = 0
  percentage = 0
  def per(self):
      self.total_marks = self.a+self.b+self.c
      self.percentage = self.total_marks*100/3
      print("tm of MCA = %d"%self.total_marks)
      print("pr of MCA = %d"%self.percentage)
class BCA(college): 
  total_marks = 0
  percentage = 0
  def tmt(self):
      self.total_marks = self.a+self.b+self.c
      self.percentage = self.total_marks*100/3
      print("tm of BCA = %d"%self.total_marks)
      print("pr of BCA = %d"%self.percentage)
mc = MCA()
bc = BCA()
mc.input_data()
mc.per()
bc.input_data()
bc.tmt()
  `;

const codeout = `
Enter a roll no 4
Enter a 12
Enter b 45
Enter c 39
tm of MCA = 96
pr of MCA = 3200

Enter a roll no 6
Enter a 15
Enter b 48
Enter c 67
tm of BCA = 130
pr of BCA = 4333
`;

const PythonInheritance = () => {
  const [ListActiveMobile, setListActiveMobile] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/python-constructor"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/python-tuple"; // Update with your actual URL

    // Navigate to the previous page
    router.push(previousPageUrl);
  };
  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const fileName = pathArray[pathArray.length - 1];

    // Add spaces between uppercase letters and capitalize the first letter of each word
    const formattedFileName = fileName
      .replace("-", " ")
      .replace(/([A-Z])/g, " $1")
      .trim();

    // Capitalize the first letter of the entire string
    const capitalizedFileName =
      formattedFileName.charAt(0).toUpperCase() + formattedFileName.slice(1);

    // Set the page title for client-side rendering
    setPageTitle(capitalizedFileName);
  }, []);

  return (
    <Layout>
      <div className=" bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins">
        <PythonNavBar />
        <Head>
          <title>
            Master the Art of Python Inheritance: A Beginners Tutorial Guide by
            CodeExampler
          </title>
          <meta
            name="description"
            content="Python Inheritance tutorial for beginners.Python Inheritance Class we can create parent class and child class parent class known as Python superclass and Python subclass"
          />
          <meta
            name="keywords"
            content="codeexampler,programming language,tutorial for begineers,Python Inheritance,Python Inheritance Class,Python Inheritance Example,python inheritance multiple classes,python inheritance  Multiple classes"
          />
          <link
            rel="canonical"
            href="https://www.codeexampler.com/python-inheritance"
          />
        </Head>

        <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
          {/* Python bur component   */}
          <PythonBar
            ListActioveMobile={ListActiveMobile}
            setListActiveMobile={setListActiveMobile}
          ></PythonBar>

          <div className="w-full relative ">
            {/* only mobile mode show */}
            <button
              onClick={() => setListActiveMobile(!ListActiveMobile)}
              className="absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white"
            >
              All Topics
            </button>
            {/* ----------------- */}
            <div className='flex justify-between mt-3'>
                        <div className='block lg:hidden'>

                        </div>
                        <button onClick={() => handlePrevious()} className='hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>

                        <h1 className='mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize'>{pageTitle.replace('/', '').replaceAll('-', ' ')}</h1>
                        <button onClick={() => handleNext()} className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>
                        <div className='flex lg:hidden gap-2 mt-3 lg:mt-0'>
                            <BsFillArrowLeftCircleFill onClick={() => handlePrevious()} className='text-4xl text-gray-500'></BsFillArrowLeftCircleFill>
                            <BsFillArrowRightCircleFill onClick={() => handleNext()} className='text-4xl text-gray-500'></BsFillArrowRightCircleFill>
                        </div>
                    </div>~
            <div className="space-y-3">
              <h2 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Python Inheritance Class:
              </h2>

              <div className="text-[#9EB2D2]">
                <p>
                  Python Inheritance Class, we can create parent class and child
                  class parent class known as Python superclass and child class
                  known as a Python subclass. <br />
                  It allows the creation of hierarchical classifications.
                  <br />
                  You can create a superclass that defines traits common to a
                  set of related items.
                  <br />
                  Python inheritance class can be inherited by another Class
                  more specific classes.
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
                      Q- Write a Program of 2 Student Roll no Marks in Differ
                      Subject Check Toatal Marks and No Percentage on Python
                      Inheritance Examples?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code} setCode={undefined} />
              </div>

              <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h3>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout}</p>
              </div>

              <h2 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Types of Python Inheritance:
              </h2>

              <div className="text-[#9EB2D2] font-bold">
                <p>
                  1, single inheritance <br />
                  2, multi-level inheritance
                  <br />
                  3, multiple -inheritance
                  <br />
                  4,hierarchical-inheritance
                  <br />
                  5, hybrid inheritance
                  <br />
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
      </div>
    </Layout>
  );
};

export default PythonInheritance;
