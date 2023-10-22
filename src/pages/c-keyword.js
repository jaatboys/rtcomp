
import React, { useState , useEffect} from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import Header from '../app/components/Header/page'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import CBar from './Cbar'
import CodeEditorFiled from '../app/components/CodeEditor';
import { useRouter } from 'next/router';
import './styles.css'
import Footer from '../app/components/Footer/Footer';
import Layout from '../app/layout';
export default function CKeyword() {
    const [pageTitle, setPageTitle] = useState("");
    const router = useRouter();
    const [ListActioveMobile, setListActiveMobile] = useState(false);
      
    const handleNext = () => {
      // Calculate the next page URL based on your routing structure
      // For example, if you want to go to the next page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const nextPageUrl = "/c-identifier"; // Update with your actual URL
  
      // Navigate to the next page
      router.push(nextPageUrl);
    };
  
    const handlePrevious = () => {
      // Calculate the previous page URL based on your routing structure
      // For example, if you want to go to the previous page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const previousPageUrl = "/c-element"; // Update with your actual URL
  
      // Navigate to the previous page
      router.push(previousPageUrl);
    };
    useEffect(() => {
      const pathArray = window.location.pathname.split("/");
      const fileName = pathArray[pathArray.length - 1];
    
      // Add spaces between uppercase letters and capitalize the first letter of each word
      const formattedFileName = fileName.replace(/([A-Z])/g, ' $1').trim();
      
      // Capitalize the first letter of the entire string
      const capitalizedFileName = formattedFileName.charAt(0).toUpperCase() + formattedFileName.slice(1);
    
      // Set the page title for client-side rendering
      setPageTitle(capitalizedFileName);
    }, []);



    return (
        <Layout>
        <div className=' bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins'>

           <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <CBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CBar>

                <div className='w-full relative '>
                    {/* only mobile mode show */}
                    <button onClick={() => setListActiveMobile(!ListActioveMobile)} className='absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white'>All Topics</button>
                    {/* ----------------- */}
                    <div className="flex justify-between mt-3">
        <button onClick={handlePrevious} className="flex text-lg gap-1 text-[#9EB2D2] no-underline">
          <BsFillArrowLeftCircleFill className="text-4xl mt-1" /> <span className="mt-2">Previous</span>
        </button>
        <p className="mt-3 lg:mt-0 text-3xl no-underline text-[#01B6FF] capitalize">
          {pageTitle}
        </p>
        <button onClick={handleNext} className="flex text-lg gap-1 text-[#9EB2D2] no-underline">
          <span className="mt-2">Next</span>
          <BsFillArrowRightCircleFill className="text-4xl mt-1" />
        </button>
      </div>
                    <div className='space-y-3'>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>C Keyword in Programming Language</h5>
                        <div className='text-[#9EB2D2]'>
                            <p>
                                1,There are 32 types of keywords in C Programming Language. <br />
                                2, C keywords are Known as Reserved Words. <br />
                                3, These Keywords are Not used in Variable Name Means These keywords cannot use as identifiers. They cannot use as names for a variable, class, or method.
                            </p>

                        </div>

                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>C Programming Keyword Table</h5>

                        {/* <thead>
                            <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <th></th>
                                <th>auto</th>
                                <th>double</th>
                                <th>int</th>
                                <th>struct</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                
                                <td>break</td>
                                <td>char</td>
                                <td>continue</td>
                                <td>case</td>

                            </tr>
                            <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                
                                <td>const</td>
                                <td>else</td>
                                <td>float</td>
                                <td>goto</td>

                            </tr>
                            <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                
                                <td>default</td>
                                <td>do</td>
                                <td>enum</td>
                                <td>if</td>

                            </tr>

                            <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                
                                <td>for</td>
                                <td>extern</td>
                                <td>long</td>
                                <td>return</td>

                            </tr>

                            <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                
                                <td>sizeof</td>
                                <td>static</td>
                                <td>signed</td>
                                <td>register</td>

                            </tr>

                            <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                
                                <td>short</td>
                                <td>switch</td>
                                <td>union</td>
                                <td>void</td>


                            </tr>

                            <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                
                                <td>unsigned</td>
                                <td>volatile</td>
                                <td>while</td>
                                <td>typedef</td>

                            </tr>

                        </tbody> */}

                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <thead class="bg-gray-200 border-b">
                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        auto
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        double
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        int
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        struct
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        break
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        char
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        continue
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        case
                                                    </td>
                                                </tr>
                                              
                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        const
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        else
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        float
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        goto
                                                    </td>
                                                </tr>
                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">default</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">do</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">enum</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">if</td>

                                                </tr>

                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">for</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">extern</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">long</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">return</td>

                                                </tr>

                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">sizeof</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">static</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">signed</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">register</td>

                                                </tr>

                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">short</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">switch</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">union</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">void</td>


                                                </tr>

                                                <tr class="bg-slate-300 border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">unsigned</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">volatile</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">while</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">typedef</td>

                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </main>
            <Footer></Footer>
        </div>
        </Layout>
    );
}
