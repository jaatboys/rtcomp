import React, { useEffect, useState } from 'react';
import JavaBar from './javaSidebar'
import CodeEditorFiled from '../app/components/CodeEditor';
import JavaNavBar from './JsNav';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Header from '../app/components/Header/page'
import Footer from '../app/components/Footer/Footer';
import Head from 'next/head';
import Layout from '../app/layout'

export default function JavaInheritance() {
    const code1 = `
Teacher IS-A students
    `
    const code2 = `
class students //superclass or parent class
{
  void learn(){
    System.out.println("This is a students");
  }
}
class teachers extends students //teachers is a child class 
{
   public static void main(String[]args)
    {
        teachers t = new teachers();
        t.learn();
    }
}
    `
    const codeout2 = `
This is a students
    `
    
    const router = useRouter();
    const [ListActioveMobile,setListActiveMobile] = useState(true);
    const [pageTitle, setPageTitle] = useState("");
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/java-single-inheritance"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/java-inheritance"; // Update with your actual URL

    // Navigate to the previous page
    router.push(previousPageUrl);
  };
  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const fileName = pathArray[pathArray.length - 1];

    // Add spaces between uppercase letters and capitalize the first letter of each word
    const formattedFileName = fileName.replace(/([A-Z])/g, " $1").trim();

    // Capitalize the first letter of the entire string
    const capitalizedFileName =
      formattedFileName.charAt(0).toUpperCase() + formattedFileName.slice(1);

    // Set the page title for client-side rendering
    setPageTitle(capitalizedFileName);
  }, []);


  return (
    <Layout>
      <div className=' bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins'>
<Header></Header>
<JavaNavBar/>
<Head>
 
 <title>Master the Art of Java Inheritance: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content=" Learn the main concept of OOP with CodeExampler's beginner Java inheritance tutorial. Create parent and child classes with ease." />
<meta name="keywords" content="Java inheritance, Java inheritance example,java inheritance interview questions,order of execution of constructors in java inheritance is Java inheritance types, Java inheritance and polymorphism,java inheritance practice problems pdf, CodeExampler" />
<link rel="canonical" href="https://www.codeexampler.com/java-inheritance" />
</Head>


         <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
              {/* Python bur component   */}
              <JavaBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></JavaBar>

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

<p>
    1, Inheritance in java is important because it supports the concept of hierarchical classification. <br />
    2, Inheritance is the main concept of oops by which we can create parent and child class. <br />
    3, Inheritance in java it inherits the property of parent class into child class. This is also known as inheritance. <br />
    4, A parent class is a superclass.
</p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Advantages and Disadvantages of inheritance in java:</h1>


<h1 className='text-[#01B6FF] mt-3'>Advantage in Inheritance :</h1>
<div className='text-[#9EB2D2]'>
<p>
    1, A child class is a subclass. <br />
    2, The main advantage of inheritance is that we can access the member of the superclass directly (without creating an object). <br />
    3, Inheritance is code reusability. <br />
    4, Construct can’t inherit in another class because is not the part of the class. <br />
    5, The private method can’t call when child class call superclass inside methods.
</p>

</div>

<h1 className='text-[#01B6FF] mt-3'>Disadvantage in Inheritance:</h1>
<div className='text-[#9EB2D2]'>
<p>
    1, Inheritance give tightly coupled means after use extends between two class are tightly coupled occupy more space or memory. <br />
    2, for the reason of tightly coupled, when you change inside any class so show changes in another class
</p>
</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>inheritance basics in java:</h1>

<div className='text-[#9EB2D2]'>

<p>
    You can access the member of the superclass directly by the use of extends keyword means subclass adds to the superclass by using extend keyword. and this inheritance in java interview questions put up in many MNC companies.
</p>

</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>This is inheritance IS-A relationship in java:</h1>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Syntax of Inheritance in Java:
</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'></p>
    </div>

</div>
</div>
<div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled code={code1} />
</div>





<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Example:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program Example of inheritance in Java?
        </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled code={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>There are 5 types of inheritance in java:</h1>

<div className='text-[#9EB2D2]'>

<p className='font-semibold'>
    1, Single inheritance in java <br />
    2, Multilevel inheritance in java <br />
    3, Hierarchical inheritance in java <br />
    4, Multiple inheritances in java <br />
    5, Hybrid inheritance in java
</p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>But inside java use only 3 types of inheritance :</h1>

<div className='text-[#9EB2D2]'>

<p className='font-semibold'>
    1, Single inheritance in java <br />
    2, Multilevel inheritance in java <br />
    3, Hierarchical inheritance in java
</p>

</div>

<div className='flex justify-between mx-6 sm:mx-12 mt-3 mb-3'>

                        <button onClick={() => handlePrevious()} className=' flex  text-lg gap-1 text-[#9EB2D2] no-underline '><BsFillArrowLeftCircleFill className='text-4xl mt-1'></BsFillArrowLeftCircleFill> <span className='mt-2'>Previous</span></button>
                        <button onClick={() => handleNext()} className=' flex text-lg gap-1 text-[#9EB2D2] no-underline '><span className='mt-2'>Next</span><BsFillArrowRightCircleFill className='text-4xl mt-1'></BsFillArrowRightCircleFill></button>

                    </div>



</div>

</div>

</main>
<Footer></Footer>
</div>
</Layout>
);
}
