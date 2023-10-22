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
For ( initialization; condition; iteration )
{ 
Statement sequence 
} 

    `;


    const code2 = `
    <?php
    for ($i = 1; $i<= 10; $i ++)
    { 
    echo "Loop Start : ".$i."
    ";
    } 
    ?>   
    `;

    const code3 =`

    <?php
    for  ($i = 1; $i<= 10; $i++)
    { 
    echo $i."
    ";
    } 
    echo "CodeExampler";
    ?> `;

const code4 =`

<?php
for ($i = 1; $i<=10; $i++)
{ 
echo $i; 
echo "Ram Ram 
";
} 
?> `;

const code5 =
`<?php
for ($i = 1; $i <=10; $i++)
{ 
echo "Hello Ram".$i." 
";
} 
?> `

const code6 =
` 
<?php
$a = 0; 
$b = 1; 
$c; 
for ($i = 1; $i<= 10; $i++)
{ 
$c = $a + $b; 
echo $c."
";
$a = $b; 
$b = $c; 
} 
?>`
    
export default function PhpBreak() {
    const [pageTitle, setPageTitle] = useState("");
    const router = useRouter();
    const [ListActioveMobile, setListActiveMobile] = useState(false);
      
    const handleNext = () => {
      // Calculate the next page URL based on your routing structure
      // For example, if you want to go to the next page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const nextPageUrl = "/php-break"; // Update with your actual URL
  
      // Navigate to the next page
      router.push(nextPageUrl);
    };
  
    const handlePrevious = () => {
      // Calculate the previous page URL based on your routing structure
      // For example, if you want to go to the previous page, you can manipulate the current route as needed
      // Replace this logic with your actual routing structure
      const previousPageUrl = "/php-do-while"; // Update with your actual URL
  
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
                          <p>1, The body of the loop must be Executes until the given condition is false.<br></br>
2, In the Php for loop semicolon, must be used.<br></br>
3, This Php for loop is using to repeat a particular piece of code for a fixed no of times.<br></br></p>
                      </div>
                      <h1 className='text-[#01B6FF] mt-3 text-xl'>Php for loop syntax:</h1>
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
Q-Write a Program to print a number from 1 to 10 in PHP for loop?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code2} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-t-xl flex flex-col'>
            Output :

Loop Start 1 <br/>
Loop Start 2 <br/>
Loop Start 3 <br/>
Loop Start 4 <br/>
Loop Start 5 <br/>
Loop Start 6 <br/>
Loop Start 7 <br/>
Loop Start 8 <br/>
Loop Start 9 <br/>
Loop Start 10<br/> 
            </div>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>
Q-Write a program to print a name when the program is complete in Php for loop Example?</p>
    </div>

</div>

</div>

                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code3} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col'>
            1 
2 
3 
4 
5 
6 
7 
8 
9 
10 
CodeExampler

            </div>
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to print a name again and loop increment by 10 with Ram Ram Word in Php for loop Example?</p>
    </div>

</div>
</div>

                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code4} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col'>
              
1 Ram Ram  
2 Ram Ram   
3 Ram Ram               
4 Ram Ram               
5 Ram Ram               
6 Ram Ram               
7 Ram Ram               
8 Ram Ram               
9 Ram Ram               
10Ram Ram 

            </div>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>
Q-Write a program to print a name again and loop increment by 10 with Hello Ram Word in Php for loop Example?</p>
    </div>

</div>
</div>

                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code5} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col'>
              
            Hello Ram 1 
Hello Ram 2 
Hello Ram 3 
Hello Ram 4 
Hello Ram 5 
Hello Ram 6 
Hello Ram 7 
Hello Ram 8 
Hello Ram 9 
Hello Ram 10 
     

            </div>
            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program to Fibonacci series in Php for loop Example?</p>
    </div>

</div>
</div>

                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditor code={code6} onChange={undefined} />
</div>
<h3 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h3>
            <div className='bg-[#2c3e4c] p-3 rounded-b-xl flex flex-col'>
              

            1 
2 
3 
5 
8 
13 
21 
34 
55 
89 

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
