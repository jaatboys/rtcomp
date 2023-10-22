
import React, { useState , useEffect} from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import Header from '../app/components/Header/page'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import CBar from './Cbar'
import CodeEditorFiled from '../app/components/CodeEditor';
import { useRouter } from 'next/router';
import './styles.css'
import Footer from '../app/components/Footer/Footer';
import Layout from '../app/layout'
const code =
    `160 / 160 % 160 

`
const code2 =
    ` (+ - / %)  

this is an operator
`
const code3 = `int a = b + c 
`
const code4 = `( + , = )  there are 2 operators 

( b, c, d) there re 3 operands 
`
const code5 = `a = b + c + d;
`
const code6 = `( + , = ) there are 2 operators

( b, c, d,) there are 3 operands
`
const code7 = `#include <stdio.h> 

int main ()

 { 

     int a,b,c;

     a = 8;

     b = 4;

     c = a + b;

     printf( c );

     return 0; 

}
`
const code8 = `12
`
const code9 = ` C = a - b;

C = a * b;

C = a / b;

C = a % b;

C = a++ OR  a-- ;

C = b++ OR  b-- ;
`
const code10 = `#include <stdio.h> 

int main ()

 { 

     int a,b;

     a = 10;

     b = 20;

     if( a < b )

     printf(" b is greater ");

     return 0; 

}
`
const code11 = `b is greater
`
const code12 = `#include <stdio.h> 

int main ()

 { 

     int a,b;

     a = 20;

     b = 20;

     if( a <= b )

     printf(" both equal ");

     return 0; 

}
`
const code13 = `both equal
`
const code14 = `#include <stdio.h> 

int main ()

 { 

     int a,b;

     a = 20;

     b = 20;

     if(a =  20  && b =  20)

     printf(" both equal ");

     return 0; 

}
`
const code15 = `both equal`
const code16 = `#include <stdio.h> 

int main ()

 { 

     int a,b;

     a = 5;

     a = a * 4;

     OR

     a * = 4;
     printf(a);
     return 0; 
}
`
const code17 = `20`
export default function COperator() {
    const [pageTitle, setPageTitle] = useState("");
    const router = useRouter();
    const [ListActioveMobile, setListActiveMobile] = useState(false);
      
    const handleNext = () => {
      // Calculate the next page URL based on your routing structure
      // For example, if you want to go to the next page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const nextPageUrl = "/c-control-structure"; // Update with your actual URL
  
      // Navigate to the next page
      router.push(nextPageUrl);
    };
  
    const handlePrevious = () => {
      // Calculate the previous page URL based on your routing structure
      // For example, if you want to go to the previous page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const previousPageUrl = "/c-literal"; // Update with your actual URL
  
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
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Q-What is Operator in C?</h5>
                        <p>
                            Operators in C are using special symbols which perform any operations. <br />
                            or <br />
                            The C and operator is a special symbol that is using in the expression. <br />
                        </p>

                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Operator in C Syntax code</p>
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
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Answer :</p>
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
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Operator in C Syntax code</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code3} />
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
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Operator in C Syntax code</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code5} />
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
                                <CodeEditorFiled code={code6} />
                            </div>
                        </div>

                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>C Operator Example</h5>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>1, Arithmetic operator:</h5>

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

                </div>

            </main>
            <Footer></Footer>
        </div>
        </Layout>
    );
}
