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
106 / 8 % 40
    `;


    const code2 = `
    ( + - / %) this is an  operator   
    `;

    const code3 =`
    $a =  $b +  $c -  $d;
    Above in this line of code  `;

const code4 =`
+, = are operators means there are Two operators 
a, b, c, d are operands means there are Four operands `;

const code5 =`
<? php
$a = 8; 
$b = 4; 
$c = $a + $b;
echo $c;
?>`;
    
const code6 =
`$C =  $a -  $b ;
$C =  $a +  $b ;
$C =  $a *  $b ;
$C =  $a /  $b ;
$C =  $a %  $b ;
$C =  $a ++ ; or  $a -- ;
$C =  $b ++ ; or  $b -- ;`;

const code7 =
`
<?php
$a = 10; 
$b = 20;
if ($a < $b)
echo ("b is greater");
?>`

const code8 =
`<?php
$a = 10; 
$b = 20; 
if ($a  = $b)
echo "both are equal";
?>`

const code9=`
<?php
 $a = 5; // $a is assigned a value of 5
  echo ($a); // The value of $a (5) is printed to the console
  echo " "; // A space is printed to separate the two values in the output

 $a = $a * 4; // $a is multiplied by 4 (resulting in 20)
  echo ($a); // The updated value of $a (20) is printed to the console
?>
    `
    
export default function PhpBreak() {
    const [pageTitle, setPageTitle] = useState("");
    const router = useRouter();
    const [ListActioveMobile, setListActiveMobile] = useState(false);
      
    const handleNext = () => {
      // Calculate the next page URL based on your routing structure
      // For example, if you want to go to the next page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const nextPageUrl = "/php-first-program"; // Update with your actual URL
  
      // Navigate to the next page
      router.push(nextPageUrl);
    };
  
    const handlePrevious = () => {
      // Calculate the previous page URL based on your routing structure
      // For example, if you want to go to the previous page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const previousPageUrl = "/php-comments"; // Update with your actual URL
  
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
<Header></Header>
<PhpNav></PhpNav>
         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <PhpBar ListActiveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></PhpBar>

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
                      
                      <div className='text-[#9EB2D2]'>
                          <p>1, Php break keyword is used to exit from loop and switch.</p>
<p>2, When a Php break Encounter inside any loop, control automatically passes to the first statement after the loop.</p>
<p>3, Break in Php break statement is used to terminate a loop immediately. The break statement Encounter inside a loop.</p>
                      </div>
                      <h1 className='text-[#01B6FF] mt-3 text-3xl'>The syntax for Php break:</h1>
                      <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2 pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'></p>
    </div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code1} onChange={undefined} />
</div>
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program loop start from 1 to 10 but break on 5 and Show Output?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code2} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-t-xl flex flex-col'>
            1 
2 
3 
4
            </div>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program Break on first, even no in Php Break for loop Example?</p>
    </div>

</div>

</div>

                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code3} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col'>
            1 

            </div>
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program Break if i=4 and show output in Php Break for loop?</p>
    </div>

</div>
</div>

                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code4} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col'>
            That is Break 1
That is Break 2
That is Break 3
Break Complete 

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
      </Layout>
  );
}
