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
    const nextPageUrl = "/php-identifier"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/php-setup"; // Update with your actual URL

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
            <div class="text-[#9EB2D2]">
              <p>
                1, Php keywords cannot be used as identifiers. <br />
                2, They cannot use as names for a variable, class, or method.{" "}
                <br />
                3, Php Programming keywords are Known as Reserved Words.
              </p>
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
                            abstract
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            and
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            array
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            as
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
                            callable
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
                        </tr>
                      </thead>
                      <tbody class="bg-gray-700 font-medium">
                        <tr class=" bg-opacity-20">
                          <td class="pl-4"></td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 font-medium">class</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">clone</td>
                          <td class="px-6 py-4 whitespace-nowrap">const</td>
                          <td class="px-6 py-4 whitespace-nowrap">continue</td>
                          <td class="px-6 py-4 whitespace-nowrap">declare</td>
                          <td class="px-6 py-4 whitespace-nowrap">default</td>
                          <td class=" px-6 py-4 whitespace-nowrap">die</td>
                          <td class=" px-6 py-4 whitespace-nowrap">do</td>
                        </tr>
                        <tr class="bg-gray-800 text-xs uppercase font-medium">
                          <td class="pl-4"></td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 font-medium">else</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">echo</td>
                          <td class="px-6 py-4 whitespace-nowrap">elseif</td>
                          <td class="px-6 py-4 whitespace-nowrap">empty</td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            end declare
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">endfor</td>
                          <td class=" px-6 py-4 whitespace-nowrap">
                            endforeach
                          </td>
                          <td class=" px-6 py-4 whitespace-nowrap">endif</td>
                        </tr>
                        <tr>
                          <td class="pl-4 font-medium"></td>
                          <td class="flex px-6 py-4 whitespace-nowrap ">
                            <span class="ml-2 ">endswitch</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">endwhile</td>
                          <td class="px-6 py-4 whitespace-nowrap">eval()</td>
                          <td class="px-6 py-4 whitespace-nowrap">exit ()</td>
                          <td class="px-6 py-4 whitespace-nowrap">extends</td>
                          <td class="px-6 py-4 whitespace-nowrap">final</td>
                          <td class=" px-6 py-4 whitespace-nowrap">finally</td>
                          <td class=" px-6 py-4 whitespace-nowrap">for</td>
                        </tr>
                        <tr class="bg-gray-800 text-xs uppercase font-medium">
                          <td class="pl-4"></td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 font-medium">foreach</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">function</td>
                          <td class="px-6 py-4 whitespace-nowrap">global</td>
                          <td class="px-6 py-4 whitespace-nowrap">goto</td>
                          <td class="px-6 py-4 whitespace-nowrap">if</td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            implements
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">include</td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            include_once
                          </td>
                        </tr>
                        <tr class=" text-xs uppercase font-medium">
                          <td class="pl-4"></td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 font-medium">instanceof</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">insteadof</td>
                          <td class="px-6 py-4 whitespace-nowrap">interface</td>
                          <td class="px-6 py-4 whitespace-nowrap">isset()</td>
                          <td class="px-6 py-4 whitespace-nowrap">list()</td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            namespace()
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">new</td>
                          <td class="px-6 py-4 whitespace-nowrap">or</td>
                        </tr>
                        <tr class="bg-gray-800 text-xs uppercase font-medium">
                          <td class="pl-4"></td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 font-medium">print</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">private</td>
                          <td class="px-6 py-4 whitespace-nowrap">protected</td>
                          <td class="px-6 py-4 whitespace-nowrap">public</td>
                          <td class="px-6 py-4 whitespace-nowrap">require</td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            require_once
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">return</td>
                          <td class="px-6 py-4 whitespace-nowrap">static</td>
                        </tr>
                        <tr class=" text-xs uppercase font-medium">
                          <td class="pl-4"></td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 font-medium">switch</span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">throw</td>
                          <td class="px-6 py-4 whitespace-nowrap">trait</td>
                          <td class="px-6 py-4 whitespace-nowrap">try</td>
                          <td class="px-6 py-4 whitespace-nowrap">unset()</td>
                          <td class="px-6 py-4 whitespace-nowrap">use</td>
                          <td class="px-6 py-4 whitespace-nowrap">var</td>
                          <td class="px-6 py-4 whitespace-nowrap">while</td>
                        </tr>
                        <tr class="bg-gray-800 text-xs uppercase font-medium">
                          <td class="px-6 py-4 whitespace-nowrap"></td>
                          <td class="px-6 py-4 whitespace-nowrap">xor</td>
                          <td class="px-6 py-4 whitespace-nowrap">yield</td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            yield_from
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
