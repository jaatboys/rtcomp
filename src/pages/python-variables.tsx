import PythonBar from "./PythonBar";
import "./styles.css"; // Import your compiled CSS here
import CodeEditor from "../app/components/CodeEditor";
import { SetStateAction, useEffect, useState } from "react";
import PythonNav from "./pythonNav";
import Layout from '../app/layout';
import Header from "../app/components/Header/page";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Footer from "../app/components/Footer/Footer";
import Head from "next/head";
import Link from "next/link";



const code8 = `
variable-name = assigned value
  x = 5
  x is Link Variable Name
  = is Link Assignment Operator
  5 is Link Assigned Value to the Variable Name `;

const code1 = `
Link = 10
b = 20
c = 30
d = 40
print(Link + b + c + d)
  `;

const codeout1 = `
100
 `;

const code2 = `
Link=10
Link+=40
Link=Link+20
print(Link)
  `;

const codeout2 = `
70`;

const code3 = `
Link=40
print(Link)
 `;

const codeout3 = `
40
 `;

const code4 = `
Link="Ram"
b="Lakshman"
print(Link+" "+b)
 `;

const codeout4 = `
Ram Lakshman
 `;

const code5 = `
Link="Ram"
b="Lakshman"
c="my name is Link codeexampler 160208"
print(Link+" "+b+" "+c)
 `;

const codeout5 = `
Ram Lakshman my name is Link codeexampler 160208 `;

const PythonVariables = () => {
  const [code, setCode] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [ListActiveMobile, setListActiveMobile] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const list: string[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("list") || "[]")
      : [];
  const pathname: string =
    typeof window !== "undefined"
      ? window.location.pathname.replace("/", "")
      : "";

  const handlePreviousAndNext = (condition: "previous" | "next"): void => {
    if (typeof window === "undefined") {
      // Do nothing if running on the server-side
      return;
    }

    const currentIndex: number = list.indexOf(pathname);

    if (condition === "previous") {
      if (currentIndex !== 0) {
        window.location.pathname = `/${list[currentIndex - 1]}`;
      }
    } else {
      if (currentIndex !== -1 && currentIndex !== list.length - 1) {
        window.location.pathname = `/${list[currentIndex + 1]}`;
      }
    }
  };

  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const fileName = pathArray[pathArray.length - 1];
  
    // Add spaces between uppercase letters and capitalize the first letter of each word
    const formattedFileName = fileName.replace('-',' ').replace(/([A-Z])/g, ' $1').trim();
    
    // Capitalize the first letter of the entire string
    const capitalizedFileName = formattedFileName.charAt(0).toUpperCase() + formattedFileName.slice(1);
  
    // Set the page title for client-side rendering
    setPageTitle(capitalizedFileName);
  }, []);
 
  
  function onCloseSidebar() {
    throw new Error("Function not implemented.");
  }

  function setListActive(arg0: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <Layout>
    <div className="bg-[#1e2736] text-[#9EB2D2] min-h-screen font-Poppins ">
      <Header></Header>
      <PythonNav></PythonNav>
      <Head>
      <title>
        Master the Art of Python Variables: A Beginners Tutorial Guide by
        CodeExampler
      </title>
      <meta
        name="description"
        content="Learn Free Python Variables Beginners Tutorials CodeExampler.Variable is the name of Link memory location in which we can store the value"
      />
      <meta
        name="keywords"
        content="codeexampler,programming language,tutorial for begineers,Python variables,add python values,python class variables,python increment variables,python global variables, Python variable class ,Python variable declaration ,Python variable exercises ,Python variable global,Python variable"
      />
      <link
        rel="canonical"
        href="https://www.codeexampler.com/python-variables/"
      />
</Head>
      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4 ">
        {/* Python bur component   */}
        <PythonBar ListActioveMobile={ListActiveMobile} setListActiveMobile={setListActiveMobile}></PythonBar>
        <div className="w-full relative ">
          {/* only mobile mode show */}
          <button onClick={() => setListActiveMobile(!ListActiveMobile)}
        className="absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 md:hidden text-white">All Topics</button>
          {/* ----------------- */}
          <div className="flex justify-between mt-3">
            <div className="block lg:hidden"></div>
            <button className="hidden lg:flex  text-lg gap-1 text-[#9EB2D2] no-underline "></button>
            <h1 className="mt-8 font-semibold lg:mt-0 text-3xl  no-underline text-[#01B6FF] capitalize">
            {pageTitle}
          </h1>
            {/* <Link href='/python-types-of-variables'  className='hidden lg:flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></Link> */}
            <div className="flex gap-1 mt-3 lg:mt-0">
            <p className="mt-1">Next</p> 
              <button> </button>
              <Link href="/python-types-of-variables">
                <BsFillArrowRightCircleFill
                  onClick={() => handlePreviousAndNext("next")}
                  className="text-4xl text-gray-400"
                ></BsFillArrowRightCircleFill>
              
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              What is Python Variable and how is Python variable declaration ?
            </h2>
            <div className="text-[#9EB2D2]">
              <p>
                1. Variable is the name of Link memory location in which we can
                store the value
              </p>
              <p>2. python variable can change the variable value</p>
              <p>
                3. A variable is defined by combining an identifier, data types,
                and an initializer.
              </p>
              <p>
                4. The first character in the variable name must be an alphabet,
                underscore, Link
              </p>
              digit, or Link dollar sign.
              <p>5. All variables have Link scope</p>
              <p>6. The identifier is the name of the variable</p>
              <p>7. Commas or blanks not used inside Link variable name</p>
            </div>
            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Python Variable Declaration Syntax:
            </h3>

            <div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2 pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]"></p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
               <CodeEditor code={code8} setCode={undefined} ></CodeEditor>
              </div>
            </div>

            <h2 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Addition of Variables Examples:
            </h2>
            <div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write Link Program Add 4 variables in Python?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditor code={code1} setCode={undefined} ></CodeEditor>
              </div>
            </div>
            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h4>
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
                    Q-Variable increment values in Python?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code2} setCode={undefined}  />
            </div>
            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h4>
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
                    Q-Create Link variable and store and inside this variable and
                    print output?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code3} setCode={undefined} />
            </div>
            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h4>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout3}</p>
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Create Variable String Type:
            </h3>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q-Create Link string variable and store Link no inside string type
                    variable and print output?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code4} setCode={undefined}  />
            </div>
            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h4>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout4}</p>
            </div>

            <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Another String type Example:
            </h1>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q-Create Link string variable and store Link no inside string type
                    variable and print output?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code5} setCode={undefined} />
            </div>
            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output:
            </h4>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout5}</p>
            </div>
          </div>
          <div className="flex gap-1 mt-4 lg:mt-4 ml-[75%]">
            <p className="mt-1">Next</p> 
              <button> </button>
              <Link href="/python-types-of-variables">
                <BsFillArrowRightCircleFill
                  onClick={() => handlePreviousAndNext("next")}
                  className="text-4xl text-gray-400"
                ></BsFillArrowRightCircleFill>
              
              </Link>
            </div>
        </div>
        

      </main>
      <Footer></Footer>
    </div>
    </Layout>
  );
};

export default PythonVariables;
