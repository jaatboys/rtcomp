import React, { useEffect, useState } from "react";
import PythonBar from "./PythonBar";
import PythonNavBar from "./pythonNav";

import CodeEditorFiled from "../app/components/CodeEditor";
import { useRouter } from "next/router";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Footer from "../app/components/Footer/Footer";
import Header from "../app/components/Header/page";
import './styles.css'
import Layout from "../app/layout";

const code = `
102/8%40

(+-/%) Operator Symbol 
  `;

const code1 = `
c = a+b
  so
=,+ are an operator
a,b,c are an operand
 `;

const code2 = `
a = b+c+d
  above in this line of code  
 =,+ are  operators means there are TWO operators. 
 a,b,c,d are an operand means there are FOUR operands. 
 `;

const code3 = `
a = b+c-d
  above in this line of code  
 =,+,- are  operators means there are THREE operators. 
 a,b,c,d are an operand means there are FOUR operands. 
 `;

const code4 = `
a = 10
b = 20
c = a+b
print(a)
   `;

const codeout4 = `
30
 `;

const code5 = `
c = a+b #Addition
c = a-b#Subtraction
c = a*b #Multiplication
c = a/b #Divison
c = a%b #Remainder
c = a++  or  a-- #Incrementation or Decrementation by 1
c = b++  or  b-- #Incrementation or Decrementation by 1
c = a**b #Power
 `;

const code6 = `
a = 10
b = 20
a<=b
print("b is greater")
  `;

const codeout6 = `
b is greater
  `;

const code7 = `
a = 20
b = 20
a<=b
print("both equal")
   `;

const codeout7 = `
both equal
 `;

const code8 = `
a = 20
b = 40
a and b
print("b is greater")
  `;

const codeout8 = `
b is greater
 `;

const code9 = `
a = 5
a = a*4
print(a)
   `;

const codeout9 = `
20
 `;

const code10 = `
x = 4
y = 4
print(x is y)
print(x is not y)
  `;

const codeout10 = `
True
False
 `;

const PythonOperators = () => {
  const [ListActioveMobile, setListActiveMobile] = useState(false);
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("");

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/python-string"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/python-comments"; // Update with your actual URL

    // Navigate to the previous page
    router.push(previousPageUrl);
  };
  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const fileName = pathArray[pathArray.length - 1];

    // Add spaces between uppercase letters and capitalize the first letter of each word
    const formattedFileName = fileName.replace('-',' ').replace(/([A-Z])/g, " $1").trim();

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
      <PythonNavBar />

      <title>
        Master the Art of Python Operator: A Beginners Tutorial Guide by
        CodeExampler
      </title>
      <meta
        name="description"
        content="Python operators tutorial for beginners.Operators in Python are used special symbols which perform any type of operations."
      />
      <meta
        name="keywords"
        content="codeexampler,programming language,tutorial for begineers,Python operator,Python and opeartor,Python operator module,Python operator string,Python not equal operator,Python operator  not equal,Python operator example,Operator in python"
      />
      <link
        rel="canonical"
        href="https://www.codeexampler.com/python-operators/"
      />

      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
        {/* Python bur component   */}
        <PythonBar
          ListActioveMobile={ListActioveMobile}
          setListActiveMobile={setListActiveMobile}
        ></PythonBar>

        <div className="w-full relative ">
          {/* only mobile mode show */}
          <button
            onClick={() => setListActiveMobile(!ListActioveMobile)}
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
                    </div>
          <div className="space-y-3">
            <h2 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              An operator in Python:
            </h2>

            <div className="text-[#9EB2D2]">
              <p>
                Operators in Python use special symbols that perform many types
                of operations. <br />
                or <br />
                Python and operator is a special symbol that uses in the
                expression.
                <br />
              </p>
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              An Operator Syntax code in Python:
            </h3>

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
              <CodeEditorFiled code={code} setCode={undefined} />
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              An Operator Syntax code in Python:
            </h3>

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
              <CodeEditorFiled code={code1} setCode={undefined}  />
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              An Operator Syntax code in Python:
            </h3>

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
              <CodeEditorFiled code={code2} setCode={undefined} />
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              An Operator Syntax code in Python:
            </h3>

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
              <CodeEditorFiled code={code3} setCode={undefined} />
            </div>

            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              1, Arithmetic operator:
            </h4>

            <div className="text-[#9EB2D2]">
              <p>
                + add <br />
                -Sub <br />
                Multiply <br />
                / division <br />
                % modules <br />
                ++ increment <br />
                -- decrement <br />
              </p>
            </div>

            <h5 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Arithmetic Operator Example code in Python
            </h5>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]"> </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code4} setCode={undefined}  />
            </div>

            <h6 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h6>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout4}</p>
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Arithmetic Operator Example code in Python
            </h3>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]"> </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code5} setCode={undefined}  />
            </div>

            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              2,Relational operator:
            </h4>

            <div className="text-[#9EB2D2]">
              <p>
                Greater than <br />
                {"<less than"}
                <br />
                {">=greater than or equal to"}
                <br />
                {"<= -less than or equal to"}
                <br />
                != - not equal to
                <br />
                == -equal to
                <br />
              </p>
            </div>

            <h5 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Relational Operator Example code in Python:
            </h5>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"></p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code6} setCode={undefined}  />
            </div>

            <h6 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h6>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout6}</p>
            </div>

            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Relational Operator Example code in Python
            </h3>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"></p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code7} setCode={undefined}  />
            </div>

            <h6 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h6>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout7}</p>
            </div>

            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              3, Logic operator:
            </h4>

            <div className="text-[#9EB2D2]">
              <p>
                and && <br />
                or ||
                <br />
                not!
                <br />
              </p>
            </div>

            <h5 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Logical Operator Example code in Python:
            </h5>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"></p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code8} setCode={undefined}  />
            </div>

            <h6 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h6>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
              <p className="whitespace-pre-wrap ">{codeout8}</p>
            </div>

            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              4, Bitwise operator:
            </h4>

            <div className="text-[#9EB2D2]">
              <p>
                {">> - right shift"} <br />
                {"<< - left shift"}
                <br />
                ^ xor
                <br />
                ~ B Not
                <br />
              </p>
            </div>

            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              5, Assignment operator:
            </h4>

            <div className="text-[#9EB2D2]">
              <p>
                = <br />
                +=
                <br />
                -=
                <br />
                *=
                <br />
                /=
                <br />
                %=
                <br />
                {"//="}
                <br />
                **=
                <br />
                &=
                <br />
                {"<<="}
                <br />
                {">>="}
                <br />
                ^=
                <br />
              </p>
            </div>

            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              6, Identifier Operator in python:
            </h4>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"></p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code9} setCode={undefined}  />
            </div>

            <h5 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h5>
            <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
              <p className="font-bold whitespace-pre-wrap ">{codeout9} </p>
            </div>

            <h4 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Python Operator Example Code:
            </h4>

            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-xs smm:text-lg text-[#01B6FF]"></p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditorFiled code={code10} setCode={undefined}  />
            </div>

            <h6 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h6>
            <div className="bg-[#2c3e4c] p-3 rounded-t-xl">
              <p className="font-bold whitespace-pre-wrap ">{codeout10} </p>
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

export default PythonOperators;
