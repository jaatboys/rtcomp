import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Footer from "../app/components/Footer/Footer";
import Header from "../app/components/Header/page";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import JavaScriptBar from "./JsBar";
import "./styles.css";
import { useRouter } from "next/router";
import CodeEditorFiled from "../app/components/CodeEditor";
import Layout from '../app/layout'


const code = `
Type Variable-Name; 
var  is a Type
a,b and ab are a variable-name`;

const code1 = `Type Variable-Name; 
var roll_no; //this declare a variable 
var percentage; //this declare a variable 
var roll_no=40;  //assigns a variable a value
var precentege=40.80;  //assigns a variable a value`;

const code2 = `

var abc; //this declare a variable 
var a_bc; // (abc and a_bc are a variable) 
var a; b; x; z; //(a,b,x,z) are a variable
var a="Ram";  //a variable gain value ( Ram )`;

const code3 = `
<script>
var ab = 20;
var cd = 24;
var ef = 36;
document.write(ab + cd + ef);
</script>`;

const code4 = `
<script> 
  var a=10;//a is a variable and a is a variable
  a+=40;
  a=a+20;
  document.write(a);
</script> 
`;

const code5 = `

<script> 
  var a=40;
  document.write(a);
</script>`;

const code6 = `<script> 
var a,b;
a="Ram"
b="Lakshman"
document.write(a+" "+b);
</script> `;

const code7 = `
<script> 
  var a,b,c;
  a="Ram"
  b="Lakshman"
  b="My Name is CodeExampler 160208"
  document.write(a+" "+b+" "+c);
</script> `;

export default function JavaScriptVariables() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/javascript-comment"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/javascript-variable"; // Update with your actual URL

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
    <div className=" bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins">
      <Header></Header>
      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
        {/* Python bur component   */}
        <JavaScriptBar
          ListActioveMobile={ListActioveMobile}
          setListActiveMobile={setListActiveMobile}
        ></JavaScriptBar>

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
          <div class="space-y-3">
            <div class="text-[#9EB2D2]">
              <p>
                1, Javascript keywords cannot be used as identifiers <br />
                2, They cannot use as names for a variable, class, or method.
                <br />
                3, Javascript Programming keywords are Known as Reserved Words.
                <br />
              </p>
            </div>
            <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Javascript keyword programming table
            </h1>
            <div class="flex flex-col lg:mr-20 md:mr-12 sm-mr-10 mr-0 justify-center  ">
              <div class="flex flex-col mt-6">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden sm:rounded-lg">
                      <table class="min-w-full text-sm text-gray-400">
                        <thead class="bg-gray-800 text-xs uppercase font-medium">
                          <tr>
                            <th></th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left tracking-wider"
                            >
                              await
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left tracking-wider"
                            >
                              break
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left tracking-wider"
                            >
                              case
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left tracking-wider"
                            >
                              catch
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left tracking-wider"
                            >
                              class
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left tracking-wider"
                            >
                              const
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left tracking-wider"
                            >
                              continue
                            </th>
                            <th
                              scope="col"
                              class="px-6 py-3 text-left tracking-wider"
                            >
                              debugger
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-gray-700 font-medium">
                          <tr class=" bg-opacity-20">
                            <td class="pl-4"></td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 font-medium">default</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">delete</td>
                            <td class="px-6 py-4 whitespace-nowrap">do</td>
                            <td class="px-6 py-4 whitespace-nowrap">else</td>
                            <td class="px-6 py-4 whitespace-nowrap">enum</td>
                            <td class="px-6 py-4 whitespace-nowrap">export</td>
                            <td class="px-6 py-4 whitespace-nowrap">false</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              extends
                            </td>
                          </tr>
                          <tr class="bg-gray-800 text-xs uppercase font-medium">
                            <td class="pl-4"></td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 font-medium">finaly</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">for</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              function
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">if</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              implements
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">import</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              instanceof
                            </td>
                            <td class="flex px-6 py-4 whitespace-nowrap">in</td>
                          </tr>
                          <tr>
                            <td class="pl-4 font-medium"></td>
                            <td class="flex px-6 py-4 whitespace-nowrap ">
                              <span class="ml-2 ">interface</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">let</td>
                            <td class="px-6 py-4 whitespace-nowrap">new</td>
                            <td class="px-6 py-4 whitespace-nowrap">null</td>
                            <td class="px-6 py-4 whitespace-nowrap">package</td>
                            <td class="px-6 py-4 whitespace-nowrap">private</td>
                            <td class="px-6 py-4 whitespace-nowrap">public</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              protected
                            </td>
                          </tr>
                          <tr class="bg-gray-800 text-xs uppercase font-medium">
                            <td class="pl-4"></td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 font-medium">return</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">super</td>
                            <td class="px-6 py-4 whitespace-nowrap">switch</td>
                            <td class="px-6 py-4 whitespace-nowrap">static</td>
                            <td class="px-6 py-4 whitespace-nowrap">this</td>
                            <td class="px-6 py-4 whitespace-nowrap">throw</td>
                            <td class="px-6 py-4 whitespace-nowrap">true</td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              typeof
                            </td>
                          </tr>
                          <tr class=" text-xs uppercase font-medium">
                            <td class="pl-4"></td>
                            <td class="flex px-6 py-4 whitespace-nowrap">
                              <span class="ml-2 font-medium">var</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">void</td>
                            <td class="px-6 py-4 whitespace-nowrap">while</td>
                            <td class="px-6 py-4 whitespace-nowrap">with</td>
                            <td class="px-6 py-4 whitespace-nowrap">yield</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between mx-6 sm:mx-12 mt-3 mb-3'>

<button onClick={() => handlePrevious()} className=' flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
<button onClick={() => handleNext()} className=' flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>

</div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
