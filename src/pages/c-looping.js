
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
export default function CElement() {
    const [pageTitle, setPageTitle] = useState("");
    const router = useRouter();
    const [ListActioveMobile, setListActiveMobile] = useState(false);
      
    const handleNext = () => {
      // Calculate the next page URL based on your routing structure
      // For example, if you want to go to the next page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const nextPageUrl = "/c-while"; // Update with your actual URL
  
      // Navigate to the next page
      router.push(nextPageUrl);
    };
  
    const handlePrevious = () => {
      // Calculate the previous page URL based on your routing structure
      // For example, if you want to go to the previous page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const previousPageUrl = "/c-switch"; // Update with your actual URL
  
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
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>1, The character set in a C Programming language:</h5>
                        <div className='text-[#9EB2D2]'>
                            <p className="m-4 para"> Letters = a-z,A-Z,( _ underscope)<br />
                                Digits  = (0,1,2,----,8,9,10)<br />
                                Special symbols=( ; , ! @ # $ % ^ &#38; * ” ? /. &#62; &#60; , ) &#123; : &#125; ’[ ]<br />
                                Total character is 256
                                ASCII-American standard coded information interchange
                            </p>


                        </div>
                        <h5 className='text-[#01B6FF]'>2,Constant in a c programming language(literals):
                        </h5>
                        <p className='font-bold'>There are two types of constant computer programming in c:</p>
                        <h5 className='text-[#01B6FF] font-semibold'>1, Primary constant <br />
                            2, Secondary constant
                        </h5>

                        <p className='mx-4'>
                           <span className='font-medium -ml-1'> Primary Constant in c</span> : <br /> integer,real,character <br />
                            <span className='font-medium -ml-1'>Secondary Constant in c </span>: <br /> array,pointer,structure,union,enum,etc.
                        </p>

                        <h5 className='text-[#01B6FF]'>Integer constant in a C programming language:
                        </h5>
                        <p className='mx-4'>
                            Means not less then -32768 or  not more then 32767. ex-0,1,40,500,1000 ,+456,-688,etc
                        </p>

                        <h5 className='text-[#01B6FF]'>Floating point or real constant in a C programming language
                        </h5>
                        <p className='mx-4'>
                            Means It must have a decimal point ,decimal is compulsory and also no use commas or blanks.for ex-1.2,5.6,46.88,-288,642,+64.24,etc.
                        </p>
                        <h5 className='text-[#01B6FF]'>Character in a C programming language
                        </h5>
                        <p className='mx-4'>
                            Use single alphabet, use only single-digit or single special symbol enclosed within single inverted commas.
                            Ex- ’a’,’b’,’y’,’z’.
                        </p>


                    </div>

                </div>

            </main>
            <Footer></Footer>
        </div>
        </Layout>
    );
}
