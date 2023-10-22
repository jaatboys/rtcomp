"use client"
import {React,useState} from 'react';
import pythonLogo from '../../app/assets/pythonBigLogo.png';
import phpLogo from '../../app/assets/phpLogo.png';
import jsLogo from '../../app/assets/jsLogo.png';
import reactLogo from '../../app/assets/reactLogo.png';
import cplusLogo from '../../app/assets/cplusLogo.png';
import htmlLogo from '../../app/assets/htmlLogo.png';
import java from '../../app/assets/java.png';
import Csharp_Logo from '../../app/assets/Csharp_Logo.png';
import Clanguage from '../../app/assets/Clanguage.png';
import './Home.css'
import '../styles.css'
import Head from 'next/head';
import Image from 'next/image';

// import Book from '../../src/app/assets/book.png';
// import Code from '../../src/app/assets/code.png';

import Dialog from './Dialog'
import Link from 'next/link';

// import  Helmet  from "react-helmet";


const HomeMain = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);

    const link=(x)=>{
        setIsDialogOpen(true);
    setSelectedAction(x);
    //     if(x== 1){
    //         window.location.href = '/python-variables'; 
    //     }
    //     else if(x == 2){
    //         window.location.href = '/php-variables';
    //     }
    //     else if(x == 3){
    //         window.location.href = '/javascript-variables';
    //     }
    //     else if(x == 4){
    //         window.location.href = '/java-variables';
    //     }
    //     else if(x == 5){
    //         window.location.href = '/cpp-variable';
    //     }
    //     else if(x == 6){
    //         window.location.href = '/csharp-first-program';
    //     }
    //     else if(x == 7){
    //         window.location.href = '/c-variable';
    //     }
    //     else if(x == 8){
    //         window.location.href = '/java-vs-python-basic';
    //     }
    //     else if(x == 9){
    //         window.location.href = '/java-vs-csharp-basic';
    //     }
        
    }
    const openDialog = (action) => {
        setSelectedAction(action);
        setIsDialogOpen(true);
      };
    
      const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedAction(null);
      };
    
    const handleLearn = () => {
        // Perform the "Learn" action based on the selectedAction value
        // For example, navigate to the appropriate tutorial page.
        // You can use React Router or any other routing library.
        switch (selectedAction) {
          case 1:
            window.location.href = '/python-variables';
            break;
          // Handle other cases
          default:
            break;
        }
    
        setIsDialogOpen(false);
      };
    
      const handleCompile = () => {
        // Perform the "Compile" action based on the selectedAction value
        // You can implement your logic here.
        setIsDialogOpen(false);
      };
    
      const handleCloseDialog = () => {
        setIsDialogOpen(false);
      };
    

    return (
     <div>
            <div className='max-w-[1440px] mx-auto my-10 '>


            <Head>

<title>Programmings Language Tutorials and Difference Between Programming Language</title>
<meta name="description" content="Programming language tutorial for begineers tutorial for begineers.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and  questions of all technology like java tutorial, python tutorial,python tutorial for beginners in deeply knowledge With Deeply" />
<meta name="keywords" content="codeexampler,programming language,tutorial for begineers,Difference Between Java and Python,Difference between program and code,java tutorial for begineers,python tutorial for begineers,Python tutorial for begineers,code,exampler,which online website to learn code,Difference Between Java and python tutorial,code,exampler,java vs python,java vs Python" />
<link rel="canonical" href="https://www.codeexampler.com/programming-language-to-learn" />
</Head>


                <div className='mx-4 md:mx-[5%] space-y-4'>
                    <h1 className='text-3xl mdd:text-5xl text-[#01B6FF]  text-center'>Choose what to Learn Free Coding</h1>
                    <h1 className='text-center text-[#01B6FF]'>Start Learn <span className='text-white'>Free</span> Popular Programming Languages</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>

                        {/* python */}
                        <div onClick={()=>link(1)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto bg-[#1E405D] text-white flex justify-between gap-4 py-2'>
                            <div className='w-fit  textMode  py-3'>
                                <h1 className='transform rotate-[180deg] text-6xl lg:text-7xl font-semibold uppercase '>Python</h1>
                                <p className='text-base  transform rotate-[180deg]'>High-Level Programming Language</p>
                            </div>
                            <div className='w-[70%] flex flex-col justify-around mr-5 '>
                                <Image src={pythonLogo} alt="pythonLogo" className='w-52 mx-auto mt-1' />
                                <button
        className="rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]"
        onClick={() => openDialog(1)}
      >
        Learn Free Tutorial
      </button>

      {/* Modal Overlay */}
      {isDialogOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
    {/* Modal Dialog */}
    <div className=" bg-[#333f50] p-12  rounded-xl md:w-[600px] w-[90%] m-auto  flex flex-col  gap-6   ">
            <div className="flex justify-center text-[20px] ">

           <div className='md:tracking-[3px] '>Amplify Your <span className='text-[#03c3f1] '>Coding </span>Skills through</div>
            </div>
           <div className=" flex gap-6 justify-center" >
            <div className=" bg-[#1e2736] flex justify-center pt- md:h-60 w-60 rounded-xl p-16">
                <div className='text-center'>

                <Image width='120px' src={pythonLogo} alt="dfgfd" />
                <div className='text-[25px] text-[#03c3f1] relative top-[-15px]'>Learn</div>
                </div>
            </div>
            <div className=" bg-[#1e2736] flex justify-center md:h-60 w-60 rounded-xl p-16">
                <Link href="/compiler/python" target="_blank" rel="noopener noreferrer">
                <div className='text-center'>

                <Image width='120px' src={pythonLogo} alt="dfgfd" />
                <div className='text-[25px] text-[#03c3f1] relative top-[-15px]'>
                    Compile</div>
                </div>
                </Link>
            </div>
             
           </div>
        </div>
  </div>
)}



                            </div>
                        </div>

                        {/* javascript */}
                        <div onClick={()=>link(3)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto bg-[#000000] flex justify-between gap-4 text-[#F7DF1E]'>
                            <div className='w-fit  textMode  py-3'>
                                <h1 className='transform rotate-[180deg] text-6xl lg:text-6xl font-semibold uppercase '>JAVASCRIPT</h1>
                                <p className='text-base  transform rotate-[180deg]'>Programming Language</p>
                            </div>
                            <div className='w-[70%] flex flex-col justify-around mr-5 '>
                                <Image src={jsLogo} alt="jsLogo" className='w-48 mx-auto' />
                                <Link href='/javascript-variables' className='rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</Link>

                            </div>
                        </div>

                        {/* reactjs */}
                        {/* <div className='rounded-xl  lg:w-md  lg:h-auto bg-[#20232A] text-[#01B6FF] flex justify-between gap-4 '>
                            <div className='w-fit  textMode  py-3'>
                                <h1 className='transform rotate-[180deg] text-6xl lg:text-7xl font-semibold uppercase '>reactjs</h1>
                                <p className='text-base  transform rotate-[180deg]'>A JavaScript library for building user interfaces</p>
                            </div>
                            <div className='w-[70%] flex flex-col justify-around mr-5 '>
                                <img src={reactLogo} alt="reactLogo" className='w-48 mx-auto' />
                                <button className='rounded-lg border-[0.0625rem] font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-1 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</button>

                            </div>
                        </div> */}
                        {/* java */}
                        <div onClick={()=>link(4)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto bg-[#20232A] text-[#01B6FF] flex justify-between gap-4 '>
                            <div className='w-fit  textMode  py-3'>
                                <h1 className='transform rotate-[180deg] text-6xl lg:text-7xl font-semibold uppercase '>Java</h1>
                                <p className='text-base  transform rotate-[180deg] '>Java is Link powerful general-purpose language.</p>
                            </div>
                            <div className='w-[70%] flex flex-col justify-around mr-5 '>
                                <Image src={java} alt="java" className='w-48 mx-auto' />
                                <Link href='/java-variables' className='rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</Link>

                            </div>
                        </div>
                        {/* php */}
                        <div onClick={()=>link(2)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto bg-[#4F5B93] text-white  p-4 flex flex-col justify-between '>
                            <div className='grid grid-cols-3  '>
                                <div className='col-span-1'>
                                    <h1 className='text-5xl lg:text-6xl font-semibold uppercase'>PHP</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-sm lg:text-base text-right mt-2'>A General -purpose <br /> Programming <br /> Language</p>
                                </div>
                            </div>
                            <Image src={phpLogo} alt="phpLogo" className='w-48 mx-auto' />
                            <div className='flex flex-col items-end '>
                                <Link href='/php-variables' className='rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</Link>

                            </div>
                        </div>
                        {/* c#  */}
                        <div onClick={()=>link(6)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto  text-white  p-4 flex flex-col justify-between bg-[#1b1447]'>
                            <div className='grid grid-cols-3  '>
                                <div className='col-span-1'>
                                    <h1 className='text-5xl mdd:text-4xl lgg:text-6xl font-semibold uppercase'>C#</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-sm lg:text-base text-right mt-2'>C# high-level multi-paradigm programming language</p>
                                </div>
                            </div>
                            <Image src={Csharp_Logo} alt="phpLogo" className='w-44  ' />
                            <div className='flex flex-col items-end '>
                                <Link href='/csharp-first-program' className='rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</Link>

                            </div>
                        </div>
                        {/* c++ */}
                        <div onClick={()=>link(5)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto  text-white  p-4 flex flex-col justify-between bg-[#004D9D]'>
                            <div className='grid grid-cols-3  '>
                                <div className='col-span-1'>
                                    <h1 className='text-5xl lg:text-6xl font-semibold uppercase'>C++</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-sm lg:text-base text-right mt-2'>A igh Level <br /> Programming <br /> Language</p>
                                </div>
                            </div>
                            <Image src={cplusLogo} alt="cplusLogo" className='w-44 ' />
                            <div className='flex flex-col items-end '>
                                <Link href='/cpp-variable' className='rounded-lg border-[0.0625rem] text-center font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</Link>

                            </div>
                        </div>
                        <div onClick={()=>link(7)} className='rounded-xl cursor-pointer lg:w-md  lg:h-auto  text-white  p-4 flex flex-col justify-between bg-[#004D9D]'>
                            <div className='grid grid-cols-3  '>
                                <div className='col-span-1'>
                                    <h1 className='text-5xl lg:text-6xl font-semibold uppercase'>C</h1>
                                </div>
                                <div className='col-span-2'>
                                    <p className='text-sm lg:text-base text-right mt-2'>C is Link general-purpose computer programming language</p>
                                </div>
                            </div>
                            <Image src={Clanguage} alt="cplusLogo" className='w-44 ' />
                            <div className='flex flex-col items-end '>
                                <Link href='/c-variable' className='rounded-lg border-[0.0625rem] font-bold bg-[#01B6FF] text-center border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</Link>

                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='my-10 text-center text-4xl mdd:text-5xl text-[#01B6FF]'>Difference Between Programming Languages Tutorial</h1>
                        <div className='md:flex justify-between space-y-10 md:space-y-0 mt-6'>
                          
                            <div onClick={()=>link(8)} className='cursor-pointer rounded-xl w-full md:w-[40%] lg:h-auto bg-[#4F5B93] text-white  p-4 flex flex-col justify-between '>
                                <div className='flex justify-between'>
                                    <h1 className='text-5xl'>JAVA</h1>
                                    <h1 className='text-5xl'>PYTHON</h1>
                                </div>
                                <div className='flex items-center justify-between mt-4 gap-2'>

                                    <Image src={java} alt="java" className='w-[32%] md:w-[30%] lg:w-[40%] mx-auto' />
                                    <h1 className='text-6xl'>VS</h1>
                                    <Image src={pythonLogo} alt="phpLogo" className='w-[32%] md:w-[30%] lg:w-[40%] mx-auto' />
                                </div>
                                <div className='flex flex-col items-end my-3'>
                                   <button className='border-[0.0625rem] font-bold w-full rounded-lg bg-[#01B6FF] border-[#01B6FF] text-center text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</button>

                                </div> 
                            </div>
                            <div onClick={()=>link(9)} className='cursor-pointer rounded-xl w-full md:w-[40%] lg:h-auto bg-[#1E405D] text-white  p-4 flex flex-col justify-between '>
                                <div className='flex justify-between'>
                                    <h1 className='text-5xl'>JAVA</h1>
                                    <h1 className='text-5xl'>C#</h1>
                                </div>
                                <div className='flex items-center justify-between mt-4 gap-2'>

                                    <Image src={java} alt="phpLogo" className='w-[32%] md:w-[30%] lg:w-[40%] mx-auto' />
                                    <h1 className='text-6xl'>VS</h1>
                                    <Image src={Csharp_Logo} alt="phpLogo" className='w-[32%] md:w-[30%] lg:w-[40%] mx-auto' />
                                </div>
                                <div className='flex flex-col items-end my-3'>
                                    <button className='border-[0.0625rem] font-bold w-full rounded-lg bg-[#01B6FF] border-[#01B6FF] text-center text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]'>Learn Free Tutorial</button>

                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default HomeMain;