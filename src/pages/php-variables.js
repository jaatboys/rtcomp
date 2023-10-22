import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import Header from '../app/components/Header/page'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import PhpBar from './Phpbar';
import PhpNav from './PhpNav';
import { useRouter } from 'next/router';
import './styles.css'
import Footer from '../app/components/Footer/Footer';
import CodeEditor from '../app/components/CodeEditor';
import Layout from '../app/layout'

const code1 = `

Type Variable Name;
$ is a Type
a, b and ab are a Variable Name
    
    `;

const code2 = `
Type Variable Name;
$ roll_no;  //this declare a variable
$ percentage;  //this declare a variable
$ roll_no = 40;  //Assigns a variable a value
$ precentage = 40.80;  //Assigns a variable a value
   
    `;

const code3 = `
$ abc;//this declare a variable
$ abc; //(abc and a_bc are a variable)
$a; $b; $x $z; //(a,b,x,z) are a variable
$ a3 = "ram";//a variable gain value ( ram ) `;

const code4 = `
<?php
$ab= 12; $cd= 24; $ef= 36; 
echo ($ab + $cd + $ef); 
?> `;

const code5 = `
<?php
$a= 10;// a is a variable and a is a variable
$a+= 40;
$a= $a + 20;
echo $a;
?> `;

const code6 = `

<?php
$a ="Ram";
$b ="Lakshman";
echo ($a. " " .$b);
?>
`;

export default function PhpBreak() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/php-setup"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/"; // Update with your actual URL

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
      <PhpNav></PhpNav>
      <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
        {/* Python bur component   */}
        <PhpBar
          ListActiveMobile={ListActioveMobile}
          setListActiveMobile={setListActiveMobile}
        ></PhpBar>

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
                1, Variable is the name of a memory location in which we can
                store the value.
              </p>
              <p>2, The variable value can be change.</p>
              <p>
                3, A variable is defined by combining an identifier, data types,
                and an initializer.
              </p>
              <p>
                4, The first character in the variable name must be an alphabet,
                underscore, a digit or, a dollar sign.
              </p>
              <p>5, All variables have a scope.</p>
              <p>6, The identifier is the name of the Variable.</p>
              <p>7, Commas or blanks do not use inside a variable name</p>
              <p>8,Use dollar symbol($) before variable-name.</p>
            </div>
            <h1 className="text-[#01B6FF] mt-3 text-xl">
              Php variable declaration syntax:
            </h1>
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
              <CodeEditor code={code1} onChange={undefined} />
            </div>
            <h5 className="text-[#01B6FF] mt-3 text-xl">
              Php variable declaration syntax Examples:
            </h5>
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
              <CodeEditor code={code2} onChange={undefined} />
            </div>
            <h5 className="text-[#01B6FF] mt-3 text-xl">
              Declare variable in Php Rules:
            </h5>
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
              <CodeEditor code={code3} onChange={undefined} />
            </div>
            <h5 className="text-[#01B6FF] mt-3 text-xl">
              Addition of variables examples
            </h5>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                    Q-Add 3 variables in Php?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code4} onChange={undefined} />
            </div>
            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h3>
            <div className="bg-[#2c3e4c] p-3 rounded-t-xl flex flex-col">
              72
            </div>
            <h5 className="text-[#01B6FF] mt-3 text-xl">
            Variable increment codes in Php:
            </h5>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-Add 3 variables in Php?
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code5} onChange={undefined} />
            </div>
            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h3>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col">70</div>
            
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-Create a variable and store a no inside this variable and print output?
                  </p>
                </div>
              </div>
            </div>
            <h5 className="text-[#01B6FF] mt-3 text-xl">
            Examples:
            </h5>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code4} onChange={undefined} />
            </div>
            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h3>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col">
              40
            </div>
            <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
              <div className=" flex gap-2  sm:pl-7 items-center">
                <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                <div className="mx-1">
                  <p className="text-lg font-semibold text-[#01B6FF]">
                  Q-Create a string variable and store a and b value inside string type variable and print output?
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#1f3040] rounded-b-xl">
              <CodeEditor code={code6} onChange={undefined} />
            </div>
            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Output :
            </h3>
            <div className="bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col">
            Ram Lakshman
            </div>
            <h3 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
              Constant:
            </h3>
            <p className="p-3 rounded-b-xl ">
            Constant use when you store a value inside a variable, but after, you can’t overwrite the current value, so use constant on that place.
            </p>
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
