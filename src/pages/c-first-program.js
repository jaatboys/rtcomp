
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

const code =
    `main () 
{ 
 Statement1; 
 Statement2; 
}
`
const code2 =
    `#include <stdio.h> 

int main ()

 { 

//printf() is used to outputs the values on the screen

   printf("hello world program in C");

   return 0; 
}
`
const code3 =
    `hello world program in C
`
const code4 =
    `#include <stdio.h> 

int main ()

 { 

   printf("sports\n");

   printf("1,football\n");

   printf("2.badminton\n");

   printf("3,tennis\t,cricket");
   printf("\n");
   return 0; 
}
`
const code5 =
    `sports
1,football
2,badminton
3,tennis    4,cricket
`

export default function CFirstProgram() {
    const [pageTitle, setPageTitle] = useState("");
    const router = useRouter();
    const [ListActioveMobile, setListActiveMobile] = useState(false);
      
    const handleNext = () => {
      // Calculate the next page URL based on your routing structure
      // For example, if you want to go to the next page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const nextPageUrl = "/c-input"; // Update with your actual URL
  
      // Navigate to the next page
      router.push(nextPageUrl);
    };
  
    const handlePrevious = () => {
      // Calculate the previous page URL based on your routing structure
      // For example, if you want to go to the previous page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const previousPageUrl = "/c-short-cut-keys"; // Update with your actual URL
  
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
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>How to write C program for Beginners or hello world program in c:</h5>
                        <div className='text-[#9EB2D2]'>
                            <p>

                                1, First program in c programming no blanks space used within a variable, constant, or keyword. <br />
                                2, All statements are entered in small case letters.<br />
                                3, All C statements end with a ;<br />
                                4, (;) means the statement terminate<br />
                                5, Main() – this is a collective name given to a set of statements. main() is a function, and Every function has a pair of parentheses ( ) Every function has a pair of parentheses ( ) <br />
                                6, Clrscr() – is used to clear screen<br />
                                7, and code finish by use (return 0 ;).<br />
                                8, This is the basics of c programming language<br />
                            </p>


                        </div>

                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Fundamental or First program for C Programming Syntax:</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code} />
                            </div>
                        </div>
                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a hello world program in C example?</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code2} />
                            </div>
                        </div>
                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Output :</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code3} />
                            </div>
                        </div>

                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Escape sequence character:</h5>
                        <p>
                            \t – tab(gap b/w two characters) <br />
                            \n – newline <br />
                            \b – backspace <br />
                            \" – " <br />
                            \\ - \ <br />
                            \0 – null used In a string <br />
                        </p>
                        <p><span className='font-bold'>Important-</span>each escape sequence Character occupied only one bite.</p>

                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program to give sports name out for C programming example?</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code4} />
                            </div>
                        </div>
                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Output :</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code5} />
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
