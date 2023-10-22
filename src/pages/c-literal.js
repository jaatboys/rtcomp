
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
    `int a = "Code Exampler"; 

int is a data_types

a is a variable

= is an operator

Code Exampler is a C string literal
`
const code2 =
    `#include <stdio.h> 

int main ()

 { 

     string a = "hello";

     string b= " ram";

     OR

     string a, b;

     a =" hello";

     b =" ram";

     printf(a+" "+b);

     return 0; 

}
`
const code3 =
    `hello ram
`
const code4 =
    `#include <stdio.h> 

int main ()

 { 

     int  a="10";

     int  b="200";

      OR

     string a, b;

     printf( a + b );

     return 0; 

}
`
const code5 =
    `210
`
const code6 =
    `float  a, b;

a = 400.8206;

b = 40.25;

printf (" a float value %f \n ", a); 

printf (" b float value %f \n ", borderRadius);
`
const code7 =
    `a float value of  400.820600 

b float value of 40.250000
`

const code8 =
    `double  a, b;

a = 400.8206;

b = 40.25684;

printf (" a double value %if \n ", a); 

printf (" b double value %if \n ", b); 
`

const code9 =
    `a double value of  400.821 

b double value of 40.2568
`
const code10 =
    `char  a = "hello";

char  b = "ram 5";

 OR

char  a, b;

a = "hello";

b = "code Exampler 100";
`
const code11 =
    ` Boolean a = "true";

Boolean b = "false";

    OR

    Boolean a, b;

a = "true";

b = "false";
`

export default function CLiteral() {
    const [pageTitle, setPageTitle] = useState("");
    const router = useRouter();
    const [ListActioveMobile, setListActiveMobile] = useState(false);
      
    const handleNext = () => {
      // Calculate the next page URL based on your routing structure
      // For example, if you want to go to the next page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const nextPageUrl = "/c-operator"; // Update with your actual URL
  
      // Navigate to the next page
      router.push(nextPageUrl);
    };
  
    const handlePrevious = () => {
      // Calculate the previous page URL based on your routing structure
      // For example, if you want to go to the previous page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const previousPageUrl = "/c-input"; // Update with your actual URL
  
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
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Q-what is literals in a C programming language?</h5>
                        <p className='font-thin'><span className='font-bold'>Answer</span>
                            -Those values are fixed to a variable and refer to fixed values. That is known as literal.</p>

                        <p>
                            1, Literal is also known as constants <br />
                            2, Literal depends upon its type <br />
                            3, C literals have any primitive data types <br />
                        </p>
                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Literal in C Programming language example</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code} />
                            </div>
                        </div>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>There are many types of literals:</h5>
                        <p>
                            1, String Literals <br />
                            2, Integer Literals <br />
                            3, Float Literals <br />
                            4, Double Literals <br />
                            5, Character Literals <br />
                            6, Boolean Literals <br />
                            7, Null Literals <br />
                        </p>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>1, String literal in C Programming language example:</h5>

                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program print String literal in C programming example?</p>
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
                                {code3}
                            </div>
                        </div>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>2, Integer Literal in C :</h5>

                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program print Integer literal in C programming example ?</p>
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
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>3, Float Literal in C Example:</h5>

                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Write a program print float Literal in C programming example ?</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code6} />
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
                                <CodeEditorFiled code={code7} />
                            </div>
                        </div>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>4, Double Literal in c programming language example:</h5>

                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Write a program print Double literal in C programming example ?</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code8} />
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
                                <CodeEditorFiled code={code9} />
                            </div>
                        </div>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>5, Character Literals</h5>

                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q- Write a program a and b in Character literals in C programming example?</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code10} />
                            </div>
                        </div>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>6, Boolean Literals:</h5>

                        <div>

                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q- Write a program and b in Boolean literals in C programming example ?</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code11} />
                            </div>
                        </div>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Null Literals:</h5>
                        <p>Null Literal is using to indicate that this object is not available more.</p>


                    </div>

                </div>

            </main>
        <Footer></Footer>
        </div>
        </Layout>
    );
}
