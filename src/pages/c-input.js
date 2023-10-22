
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
    `#include <stdio.h> 

int main ()

 { 

   int a; //this declare a variable

   float b; //this declare a variable

   printf("enter value of a");

   scanf("%d", &a );

   printf("enter float value of b");

   scanf("%d", &b );

   return 0; 

}
`
const code2 =
    `#include <stdio.h> 

int main ()

 { 

    int a, b, c, sum;

   printf("enter first no\n");

   scanf("%d", &a);

   printf("enter second no\n");

   scanf("%d", &b );

   printf("enter third no\n");

   scanf("%d",&c );

   sum = a + b + c;

   printf(" %d ", sum );

   return 0; 

}
`
const code3 =
    `enter first no 24 

enter second no  14 

enter third no  25 

sum = 63
`
const code4 =
    `#include <stdio.h> 

int main ()

 { 

   float p, r, t, si; 

   printf("enter the value of p");

   scanf("%f", &p );

   printf("enter the value of r");

   scanf("%f", &r );

   printf("enter the value of t");

   scanf("%f", &t );

   si = p* r* t/100;

   printf("si = %f", si");

   return 0; 

}
`

const code5 =
    `enter the value of p 45 

enter the value of r  68 

enter the value of t  25 

si = 765.000000
`
const code6 =
    `#include <stdio.h> 

int main ()

 { 

   int l, b, area; 

   printf("enter a value of l ");

   scanf("%d", &l );

   printf("enter a value of b ");

   scanf("%d", &b );

   area = l * b;

   printf("area = %d", area");

   return 0; 

}
`
const code7 =
    `enter a value of l 4 

enter the value of b  5 

area = 20
`
const code8 =
    `#include <stdio.h> 

int main ()

 { 

   float r, area; 

   printf("enter a value of r ");

   scanf("%f", &r );

   area = 3.14 * r* r;

   printf("area = %f", area");

   return 0; 

}
`
const code9 =
    `enter a value of r 2 

area = 12.560000
`
const code10 =
    `#include <stdio.h> 

int main ()

 { 

   int a, b, c, add, mult; 

   printf("enter a value of a ");

   scanf("%d", &a );

   printf("enter a value of b ");

   scanf("%d", &b );

   printf("enter a value of c ");

   scanf("%d", &c );

   add = a + b+ c;

   mult = a * b* c;

   printf("total = %d", add");

   printf("multiply = %d", mult");

   return 0; 

}
`

const code11 =
    `enter a value of a 2 

enter a value of b 4 

enter a value of c 6 

total = 12

multiply = 48
`
export default function CInput() {
    const [pageTitle, setPageTitle] = useState("");
    const router = useRouter();
    const [ListActioveMobile, setListActiveMobile] = useState(false);
      
    const handleNext = () => {
      // Calculate the next page URL based on your routing structure
      // For example, if you want to go to the next page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const nextPageUrl = "/c-literal"; // Update with your actual URL
  
      // Navigate to the next page
      router.push(nextPageUrl);
    };
  
    const handlePrevious = () => {
      // Calculate the previous page URL based on your routing structure
      // For example, if you want to go to the previous page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const previousPageUrl = "/c-first-program"; // Update with your actual URL
  
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
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Input in c programming language at run time:</h5>
                        <p className='font-thin'>The scanf ( ) function is commonly used to input the value. scanf ( ) receives from the keyboard.</p>

                        <div>
                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program to user input in string input in C programming example?</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code} />
                            </div>
                        </div>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Input in C Examples :</h5>
                        <div>
                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program to input 3 numbers and print the total marks in C programming example?</p>
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
                        <div>
                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program to calculate and print simple interest in C programming example?</p>
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
                        <div>
                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program to find and print the area of rectangle in C programming example?</p>
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
                        <div>
                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program to find out the value of pi and print area of a circle in C programming example?</p>
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
                        <div>
                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program to 3 subject marks, add all values,and multiply all the values in C programming example?</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code10} />
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
                                <CodeEditorFiled code={code11} />
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
