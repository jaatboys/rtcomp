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
Do  {
  statement;
  }
While (condition); 

    `;


    const code2 = `
    <?php 
    $a = 1; 
    do
    { 
    echo "Hello Code Exampler 
    ";
    $a ++;
    }
    while ($a <= 10);
    ?> 
          
    `;

    const code3 =`

     
<?php 
$a = 1; 
do
{ 
echo "Hello Everyone".$a."
";
$a = $a + 2;
}
while ($a <= 5);
?>  `;

const code4 =`


<?php 
$a = 1; 
do
{ 
echo "Increment No".$a."
";
$a ++;
}
while ($a <= 10);
?> 
    `;

const code5 =
`<?php 
$a = 10; 
do
{ 
echo "Decrement  No".$a."
";
$a --;
}
while ($a >= 1);
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
      const nextPageUrl = "/php-for-loop"; // Update with your actual URL
  
      // Navigate to the next page
      router.push(nextPageUrl);
    };
  
    const handlePrevious = () => {
      // Calculate the previous page URL based on your routing structure
      // For example, if you want to go to the previous page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const previousPageUrl = "/php-while"; // Update with your actual URL
  
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
                  <h1 className='text-[#01B6FF] mt-3 text-lg'>for loop in Php</h1>
                      <div className='text-[#9EB2D2]'>
                          <p>In do-while, Php loop will consistently execute at least once</p>
                      </div>
                      <h1 className='text-[#01B6FF] mt-3 text-xl'>Do-while Php loop Syntax:</h1>
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
<h1 className='text-[#01B6FF] mt-3 text-xl'>Php for loop examples:</h1>
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>
        Q-Write a program for loop in Do while loop and print names Example in Php?
</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code2} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-t-xl flex flex-col'>
            Output :

            Hello Code Exampler
Hello Code Exampler
Hello Code Exampler
Hello Code Exampler
Hello Code Exampler
Hello Code Exampler
Hello Code Exampler
Hello Code Exampler
Hello Code Exampler
Hello Code Exampler
            </div>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>
        Q-Write a program Addition or increment of 2 numbers every Times in do-while loop Example in Php?</p>
    </div>

</div>

</div>

                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code3} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col'>
            Hello Everyone 1
Hello Everyone 3
Hello Everyone 5

            </div>
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program Addition or increment of 1+ every Times in do-while loop Example in Php?</p>
    </div>

</div>
</div>

                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code4} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col'>
              
            Increment No 1
Increment No 2
Increment No 3
Increment No 4
Increment No 5
Increment No 6
Increment No 7
Increment No 8
Increment No 9
Increment No 10

            </div>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>
        Q-Write a program Subtract or decrement of -1 numbers every Times in do-while loop Example in Php?</p>
    </div>

</div>
</div>

                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code5} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col'>
              
       
Decrement No 10
Decrement No 9
Decrement No 8
Decrement No 7
Decrement No 6
Decrement No 5
Decrement No 4
Decrement No 3
Decrement No 2
Decrement No 1

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
