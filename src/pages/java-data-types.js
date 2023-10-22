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
export default function JavaDataTypes() {
  const code1 = `
int a=10;
float num=2348f;
double a=20.8456456;
boolean b=true; // false
byte a=10;
Short a=10000;
Char h='j';
Long h=10525252272544l;
    `;
  const code2 = `
int a = 244565;
 System.out.println(a);
    `;
  const codeout2 = `
    244565
    `;
  const code3 = `
Long h=10525252272544l;
System.out.println(h);
   
156 is an int 
156l is an Long 
    `;
  const codeout3 = `
10525252272544
    `;
  const code4 = `
Short a=32765;
System.out.println(a);
    `;
  const codeout4 = `
32765
    `;
  const code5 = `
char a='h';
char b=88;//code for x learn by unicode
System.out.println(a);
System.out.println(b);
    `;
  const codeout5 = `
h
X
    `;
  const code6 = `
char a,b;
a='x';
b=90;
System.out.println(a);
System.out.println(b);
    `;
  const codeout6 = `
x
Z
    `;
  const code7 = `
char a;
a='x';
System.out.println(a);

a++;// increment a
System.out.println(a);
    `;
  const codeout7 = `
x
y
    `;
  const code8 = `
float number=40.56f;
System.out.println(number);
    `;
  const codeout8 = `
40.56
    `;
  const code9 = `
double a=12.426d;
OR
double a;
a=12.426d;
System.out.println(a);
    `;
  const codeout9 = `
12.426
    `;
  const code10 = `
int a=4;
int b=8;
boolean c=a<b;
System.out.println(c);
    `;
  const codeout10 = `
true
    `;

  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/java-operators"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/java-literals"; // Update with your actual URL

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
            Master the Art of Java DataTypes: A Beginner's Tutorial Guide by
            CodeExampler
          </title>
          <meta
            name="description"
            content="Discover Java datatypes in no time! Our beginner's tutorial offers expert guidance and hands-on examples for you to master this essential programming concept."
          />
          <meta
            name="keywords"
            content="Java datatypes, data types in Java, Java data types long, Java data types examples, CodeExampler tutorial. "
          />
          <link
            rel="canonical"
            href="https://www.codeexampler.com/java-data-types"
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
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                There are three types of java datatypes:
              </h1>

              <div className="text-[#01B6FF]">
                <p>
                  1, Value Data Type <br />
                  2, Pointer Data Type <br />
                  3, Reference Data Type
                </p>
              </div>

              <div className="text-[#9EB2D2]">
                <p>
                  1,<strong>Value Data Type:</strong>{" "}
                  int,float,double,short,ushort,bool,long,char etc. <br />
                  2, <strong> Pointer Data Type:</strong> pointer. <br />
                  3, <strong> Reference Data type:</strong>{" "}
                  object,class,interface,etc. <b></b>
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Primitive data types are Eight types in java.
              </h1>

              <div className="text-[#01B6FF] font-bold">
                <p>
                  1, Int <br />
                  2, Float <br />
                  3, double <br />
                  4, Boolean <br />
                  5, byte <br />
                  6, Short <br />
                  7, Char <br />
                  8, Long
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Java Datatypes Example:
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
                1, Integers Java data type :
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  In the Integers Java data type, this group includes int, long,
                  short, and byte, and this is a whole value number integers
                  have positive, negative, and all kinds of signs but without
                  decimal. <br />
                  we can store only numeric values and int data types keep from
                  -2147483648 to 2147483647.
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Integers Java basic data types Example:
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
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout2}</p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                B, In long Java data type:
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  The long data type is used when int can't handle significant
                  value, so the long data type in java store value start from
                  -9223372036854775808 and on 9223372036854775807. <br />
                  you don't store the considerable value inside long data type
                  if you type long data type, so you also write capital l like"
                  l" after number end.
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                long Java basic data types Example :integers Java basic data
                types Example:
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
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout3}</p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                C, In Short Java data type:
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  Short Java data type is used when creates a short integer, and
                  quick data type stores whole numbers from -32768 to 32767 And
                  short is used when you don't need the large range number like
                  int.
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Short Java basic data types Example :
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
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout4}</p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                D,In Byte Java data type:
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  Byte Java data type is used when the minor integer type is a
                  byte in integer .byte can store numbers from -128 to 127.
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                2, Characters Java data type
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  a, Char Java data type is used to hold a single character,
                  Unicode character. <br />
                  b, Char data type enclosed by a single quotes.
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Char Java basic data types Example :
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
                <CodeEditorFiled value={code5} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout5}</p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Char Java another data types Example :
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
                <CodeEditorFiled code={code6} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout6}</p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                If you increment character in Java basic data types:
              </h1>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Char Java basic data types Example :
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
                <CodeEditorFiled code={code7} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout7}</p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                3, Floating-point Java data type
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  1, In the Floating point, data types include Float and double
                  and show a number with a fraction. <br />
                  2, These floating-point numbers is a natural number.
                </p>
              </div>

              <div className="text-[#9EB2D2]">
                <p>
                  <strong>
                    Floating points in java are two types: <br />
                    <span className="text-[#01B6FF]">
                      {" "}
                      1, Float <br />
                      2, Double <br />{" "}
                    </span>
                  </strong>
                  *double bits is 64 <br />
                  *float bits is 32
                </p>

                <p>
                  <strong>A, In Float Java data type:</strong> <br />
                  1, Float specifies a single-precision value means uses 32bits
                  of storage. <br />
                  2, This Float is slower than double precision, but it takes
                  half as much space as double-precision. <br />
                  3, The float stores a fractional number from 3.4e−038 to
                  3.4e+038. <br />
                  4, Float used for representing dollars and cents. <br />
                  5, You don’t store float value inside float data type if you
                  type Float data type, so you also write small f like "f" after
                  number end.
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Float Java basic data types Example :
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
                <CodeEditorFiled code={code8} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout8}</p>
              </div>

              <div className="text-[#9EB2D2]">
                <p>
                  <strong>B, In Double Java data type:</strong> <br />
                  1, double specifies a double-precision value means uses 64
                  bits of storage. 2, double precision is faster than single
                  precision. <br />
                  3, the double stores' fractional number 1.7e−308 to 1.7e+308.{" "}
                  <br />
                  4, you don’t store the double value inside double data type if
                  you type double data type, so you also write small d like "d"
                  after number end.
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Double Java basic data types Example :
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
                <CodeEditorFiled code={code9} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout9}</p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                4, Bool Java data type:
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  The Boolean Java data type group includes Boolean, and this
                  shows only true or false values and uses the reserved word
                  true and false.
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Bool Java basic data types Example:
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
                <CodeEditorFiled code={code10} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout10}</p>
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
