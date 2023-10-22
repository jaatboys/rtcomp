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
    `#include <stdio.h> 
  int i;
  
  void show ()
  
   { 
  
       printf("%d"",i);
  
  }
  
  void main ()
  
   { 
  
      int i= 10;
  
      i++ ;
  
      show();
  
  }
`;
const code2 =
    `#include <stdio.h> 
#include <conio.h> 

int i= 50;

void show ()

 { 

     printf("%d",i);

     i=40;

}

void main ()

 { 

    i++ ;

     show();

     printf("%d",;i);

}
`

const code3 =
    `
#include <stdio.h> 
#include <conio.h> 

int i;

void show ()

 { 

   static int i = 60;

   printf("%d"",i);

   i++;

}

void main ()

 { 

    show();

    show();

    show();
}

`

export default function CScopeOfVariable() {
    const [pageTitle, setPageTitle] = useState("");
    const router = useRouter();
    const [ListActioveMobile, setListActiveMobile] = useState(false);
      
    const handleNext = () => {
      // Calculate the next page URL based on your routing structure
      // For example, if you want to go to the next page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const nextPageUrl = "/c-element"; // Update with your actual URL
  
      // Navigate to the next page
      router.push(nextPageUrl);
    };
  
    const handlePrevious = () => {
      // Calculate the previous page URL based on your routing structure
      // For example, if you want to go to the previous page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const previousPageUrl = "/c-variable"; // Update with your actual URL
  
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
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>A Local variable in C Computer language:</h5>
                        <div className='text-[#9EB2D2]'>
                            <p>

                                1, These types of variables in the c programming language defined inside a function <br />
                                2, It Can’t use it from outside that function. <br />
                                3, The initial value will be garbage <br />
                            </p>
                        </div>


                        <div>
                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a Program Local variable in c Example?</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code} />
                            </div>
                        </div>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Output :</h5>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                            11
                        </div>


                        <div>
                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a Program Global variable in c Example?</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code2} />
                            </div>
                        </div>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Output :</h5>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                            51 <br />
                            40
                        </div>

                        <p className='text-white'>Ans-error ! Because undefined symbol i in show() function</p>

                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Global variable in C computer language:</h5>
                        <div className='text-[#9EB2D2]'>
                            <p>

                                1, Global variable in C programming language is defined from outside all functions and can be used anywhere in the program <br />
                                2, The initial code will be zero. <br />

                            </p>
                        </div>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Static Variable in C programming language:</h5>
                        <div className='text-[#9EB2D2]'>
                            <p>

                                1, These types of variables defines inside a function with the static keyword. <br />
                                2, Variable can’t rationalize 2, Value of the static Variable in a different function call. <br />
                                3, Initial value will be zero

                            </p>
                        </div>

                        <div>
                            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                                <div className=' flex gap-2 pl-7 items-center'>
                                    <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                                    <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                                    <div className='mx-1'>
                                        <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a Static Program variable in c Example?</p>
                                    </div>

                                </div>

                            </div>
                            <div className='bg-[#1f3040] rounded-b-xl'>
                                <CodeEditorFiled code={code3} />
                            </div>
                        </div>
                        <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Output :</h5>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                            60 <br />
                            61 <br />
                            62
                        </div>

                    </div>

                </div>

            </main>
            <Footer></Footer>
        </div>
        </Layout>
    );
}
