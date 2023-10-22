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
Break;
    `;

const code2 = `
    <?php 
    for ($i = 1; $i<= 10;$i ++)
    { 
    if ($i == 5)
    break;
    echo $i ."
    ";
    }
    ?>    
    `;

const code3 = `
    <?php 
for ($i = 1; $i<= 10;$i ++)
{ 
if ($i % 2 == 0)
break;
echo $i;
}
?> `;

const code4 = `
<?php 
for ($i= 1; $i<= 10; $i++)
{ 
if ($i== 4)
break;
echo ("That is Break".$i." ");
}
echo ("Break Complete");
?> `;

export default function PhpBreak() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/php-introduction"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/php-user-define-function"; // Update with your actual URL

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
            1, Php programming languages were designed by Rasmus Lerdorf in 1994.<br></br>
2, Php 8.0 Version Present Release on 26/11/2020.<br></br>
3, Php implementation "Personal Home Page/Forms Interpreter" or PHP/FI.<br></br>


            </div>
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
                            PHP Versions
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            PHP Versions release date
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-gray-700">
                        <tr class=" bg-opacity-20  font-medium">
                          <td class="pl-4">1.0</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 font-medium">
                              {" "}
                              Php Version 1.0
                            </span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            08/06/1995
                          </td>
                        </tr>
                        <tr class="bg-gray-800 font-medium">
                          <td class="pl-4 ">2.0</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 "> Php Version 2.0</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            01/11/1997
                          </td>
                        </tr>
                        <tr class="font-medium">
                          <td class="pl-4">3.0</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 font-medium">
                              Php Version 3.0
                            </span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">6/06/1998</td>
                        </tr>
                        <tr class="bg-gray-800 font-medium">
                          <td class="pl-4">4.0</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 4.0</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            22/05/2000
                          </td>
                        </tr>
                        <tr class=" font-medium">
                          <td class="pl-4">4.1</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 "> Php Version 4.1</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            10/12/2001
                          </td>
                        </tr>
                        <tr class="bg-gray-800 font-medium">
                          <td class="pl-4">4.2</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 4.2</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            22/04/2020
                          </td>
                        </tr>
                        <tr class=" font-medium">
                          <td class="pl-4">4.3</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 4.3</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            27/12/2002
                          </td>
                        </tr>
                        <tr class="bg-gray-800 font-medium">
                          <td class="pl-4">4.4</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 4.4</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            11/07/2005
                          </td>
                        </tr>
                        <tr class=" font-medium">
                          <td class="pl-4">5.0</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 5.0</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            13/07/2004
                          </td>
                        </tr>
                        <tr class="bg-gray-800 font-medium">
                          <td class="pl-4">5.1</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 5.1</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            24/11/2005
                          </td>
                        </tr>
                        <tr class=" font-medium">
                          <td class="pl-4">5.2</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 5.2</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            02/11/2006
                          </td>
                        </tr>
                        <tr class="bg-gray-800 font-medium">
                          <td class="pl-4">5.3</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 5.3</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            30/06/2009
                          </td>
                        </tr>
                        <tr class=" font-medium">
                          <td class="pl-4">5.4</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 5.4</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            01/03/2012
                          </td>
                        </tr>
                        <tr class="bg-gray-800 font-medium">
                          <td class="pl-4">5.5</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 5.5</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            20/07/2013
                          </td>
                        </tr>
                        <tr class=" font-medium">
                          <td class="pl-4">5.6</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 5.6</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            28/08/2014
                          </td>
                        </tr>
                        <tr class="bg-gray-800 font-medium">
                          <td class="pl-4">6.x</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 6.x</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">N/A</td>
                        </tr>
                        <tr class=" font-medium">
                          <td class="pl-4">7.0</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 7.0</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            03/12/2015
                          </td>
                        </tr>
                        <tr class="bg-gray-800 font-medium">
                          <td class="pl-4">7.1</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 7.1</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            01/12/2016
                          </td>
                        </tr>
                        <tr class=" font-medium">
                          <td class="pl-4">7.2</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 7.2</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            30/11/2017
                          </td>
                        </tr>
                        <tr class="bg-gray-800 font-medium">
                          <td class="pl-4">7.3</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 "> Php Version 7.3</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            06/12/2018
                          </td>
                        </tr>
                        <tr class=" font-medium">
                          <td class="pl-4">7.4</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 7.4</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            28/11/2019
                          </td>
                        </tr>
                        <tr class="bg-gray-800 font-medium">
                          <td class="pl-4">8.0</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 ">Php Version 8.0</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            26/11/2020
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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
      </main>
      <Footer></Footer>
    </div>
  );
}
