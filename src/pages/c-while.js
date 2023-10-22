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
  `type variable-name;
int is a type
a,b and ab  are a variable name
;
`;
const code2 =
  `type variable-name;

int roll_no; //this declare a variable

float percentage; //this declare a variable

roll_no=40; //assigns a variable a value 
  
percentage=40.80; //assigns a variable a value 
`;
const code3 =
  `int abc //this declare a variable;

int abc; //(abc and a_bc) are a variable

int a,b,x,z; //(a,b,x,z)are a variable

byte a1=40; //initialize a 
  
double a2=40.80; //like a float 
  
char a3="ram""; //a variable gain value (ram) 
`;

const code4 =
  `#include <stdio.h> 

int main ()

 { 

     int a, b, c, d;

     a=10; b=20; c=30; d=40;

     printf("a+b+c+d");

     return 0; 
}
`
const code5 =
  `#include <stdio.h> 

int main ()

 {

   int a = 10; // a is a variable and a is a variable

   a + = 40;

   a = a + 20;

   printf (a) ;

   return 0; 
}
`
const code6 =
  `#include <stdio.h> 

int main ()

 { 

     int a;

     a=40;

OR

     int a=40;

     printf(a);

     return 0; 
}
`
const code7 =
  `#include <stdio.h> 

int main ()

 { 

     string a="Ram";

     string a="Lakshman";

OR

     string a,b;

     a="Ram";

     b="Lakshman";

     printf(a+b);

     return 0; 
}
`
const code8 =
  `#include <stdio.h> 

  int main ()
  
   { 
  
       string a,b,c;
  
       a="Ram";
  
       b="Lakshman";
  
       c="My Name is CodeExampler 160208";
  
       printf(a+" "+b+" "+c" ");
  
       return 0; 
  }
`


export default function CVariable() {
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);
    
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/c-do-while"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/c-looping"; // Update with your actual URL

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
    <div className='text-[#9EB2D2] bg-[#1E2736]  min-h-screen font-Poppins'>

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
            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>What is Python Variable, and how is Python vairiable declaration ?</h5>
            <div className='text-[#9EB2D2]'>
              <p>

                1, Variable is the name of a memory location in which we can store the value <br />
                2, C Variable can change the value<br />
                3,  A variable is defined by combining an identifier, data types, and an initializer.<br />
                4, The first character in the variable name must be an alphabet, underscore, a digit, or a dollar sign. <br />
                5, All variables have a scope<br />
                6, The identifier is the name of the Variable<br />
                7, Commas or blanks not used inside a Variable Name
              </p>


            </div>
            <h5 className='text-xs smm:text-lg text-[#01B6FF]'>Variable syntax in C:
            </h5>
            <div>

              <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                  <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                  <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>C Variable Declaration Syntax</p>
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
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>C Variable Declaration Syntax Examples:</p>
                  </div>

                </div>

              </div>
              <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code2} />
              </div>
            </div>
            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Declare a Variable in C Rules:</h5>

            <div>
              <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                  <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                  <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Variable declare in various types.</p>
                  </div>

                </div>

              </div>
              <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code3} />
              </div>
            </div>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Addition of variables Examples:</h5>
            <div>
              <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                  <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                  <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program to add variables in C?</p>
                  </div>

                </div>

              </div>
              <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code4} />
              </div>
            </div>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Output :</h5>
            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              100
            </div>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Variable increment values in C:</h5>
            <div>
              <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                  <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                  <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program variable Increment in C?</p>
                  </div>

                </div>

              </div>
              <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code5} />
              </div>
            </div>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Output :</h5>
            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              70
            </div>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Q-Write a program to create a variable, store a no inside this Variable and print output in C?</h5>
            <div>
              <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                  <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                  <div className='p-1.5 rounded-full bg-[#29c940]'> </div>

                </div>

              </div>
              <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code6} />
              </div>
            </div>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Output :</h5>
            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              40
            </div>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>String in C</h5>
            <pre className='text-[#9EB2D2]'>
              1, String is a sequence of characters and closed in " ". <br />
              2, String is the name of a memory location in which we can store the Text <br />
              3, Text of String change easily <br />
              4, Text or character enclosed by double quotes <br />
            </pre>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Create Variable String Type:</h5>
            <div>
              <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                  <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                  <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program to create a string variable and store a no inside string type variable and print output in C?</p>
                  </div>

                </div>

              </div>
              <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code7} />
              </div>
            </div>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Output :</h5>
            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              RamLakshman
            </div>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Another string type static variable in c example</h5>
            <div>
              <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                <div className=' flex gap-2 pl-7 items-center'>
                  <div className='p-1.5 rounded-full bg-[#ff6056]'> </div>
                  <div className='p-1.5 rounded-full bg-[#ffbf21]'> </div>
                  <div className='p-1.5 rounded-full bg-[#29c940]'> </div>
                  <div className='mx-1'>
                    <p className='text-xs smm:text-lg text-[#01B6FF]'>Q-Write a program to create a string variable and store a no inside string type Static variable and print output in C?</p>
                  </div>

                </div>

              </div>
              <div className='bg-[#1f3040] rounded-b-xl'>
                <CodeEditorFiled code={code8} />
              </div>
            </div>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Output :</h5>
            <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              Ram Lakshman My name is CodeExampler 160208
            </div>

            <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>Constant:</h5>
            <p>Constant is use when you store a value inside a variable, but after you can't overwrite existing value, so on that place use constantly.</p>

          </div>

        </div>

      </main>
      <Footer></Footer>
    </div>
    </Layout>
  );
}
