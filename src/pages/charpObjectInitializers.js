import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import CsharpNavBar from "./pythonNav";
import { useRouter } from "next/router";
import CodeEditorFiled from "../app/components/CodeEditor";
import CsharpBar from "./CsharpBar";
import Header from "../app/components/Header/page";
import Head from "next/head";
import Footer from "../app/components/Footer/Footer";
import Layout from "../app/layout";

const CSharpObjectInitializers = () => {
  const code1 = `
using System;
public class Human {
 int age;
 string name;

 public static void Main(string[] args) {
     Human h = new Human();
     h.age = 160208;
     h.name = "CodeExampler";
     Console.WriteLine(h.age + " " + h.name);
 }
}
  `
  const codeout1 = `
160208 codeExampler 
  `
  const code2 = `
using System;
class school 
{
int teachers ; // no of teachers 
int students ; // no of students 
int peon ; // no of peon 
  
 // This class declares an object of type school. 
 
static void Main(string[] args)
{
school sch = new school (); 
sch .teachers = 40; 
sch .students = 500; 
sch .peon = 20; 
 
// This dot operator (.) is used to access the member
 
Console.WriteLine ("there are "+ sch.teachers +" teachers in this school ");
Console.WriteLine ("there are "+ sch.students +" students in this school ");
Console.WriteLine ("there are "+ sch.peon +" peon in this school ");
}
}
`
  const codeout2 = `
there are 40 teachers in this school 
there are 500 students in this school 
there are 20 peon in this school 
  `
  const code3 = `
using System;
class school {
  int teachers; // number of teachers 
  int students; // number of students 
  int peon; // number of peons 
    
  // This class declares an object of type school. 
   
 static void Main(string[] args)
  {
    school sch1 = new school(); 
    school sch2 = new school(); 
  
    // sch1 and sch2 are different objects and have different values assigned to their fields
   
    // Assign values to sch1 fields
    sch1.teachers = 40; 
    sch1.students = 500; 
    sch1.peon = 20; 
   
    // Assign values to sch2 fields 
    sch2.teachers = 20; 
    sch2.students = 250; 
    sch2.peon = 10; 
  
    // This dot operator (.) is used to access the members
   
    // sch1.
    Console.WriteLine("There are "+ sch1.teachers +" teachers in this school 1 ");
    Console.WriteLine("There are "+ sch1.students +" students in this school 1 ");
    Console.WriteLine("There are "+ sch1.peon +" peons in this school 1 ");
   
    // sch2.
    Console.WriteLine("There are "+ sch2.teachers +" teachers in this school 2 ");
    Console.WriteLine("There are "+ sch2.students +" students in this school 2 ");
    Console.WriteLine("There are "+ sch2.peon +" peons in this school 2 ");
  }
}
  
  `
  const codeout3 = `
there are 40 teachers in this school 1
there are 500 students in this school 1
there are 20 peon in this school 1
   
there are 20 teachers in this school 2
there are 250 students in this school 2 
there are 10 peon in this school 2
  `
  const code4 = `
using System;
class school 
{
int teachers ;
int students ;
void numbers (int t,int s)
{
teachers = t; 
students = s; 
}
void show ()
{
Console.WriteLine(teachers +" "+ students); 
}
static void Main(string[] args)
{
school sch = new school();
sch.numbers (40,400);
sch.show ();
}
}
  `
  const codeout4 = `
40 400 
  `
  
  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "./CSharpConstructor"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "./CSharpPassingArgument"; // Update with your actual URL

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
        <div className=' bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins'>
  

  <Header/>
  <CsharpNavBar></CsharpNavBar>
  <Head>
 
 <title>Master the Art of C# object initializer: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="C# object initializer tutorial for beginners.There are 3 Types of object initializer in C# ,CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners" />
 <meta name="keywords" content="codeexampler,programming language, by using constructor in C#,tutorial for begineers,by using a method in C#,Reference variable in c#,C# object initializer,c# object initializer for,c sharp object initializer,c# object initializer for loop,end for loop c#," />
 <link rel="canonical" href="https://www.codeexampler.com/csharp-object-initializers" />
 </Head>

           <main className='max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4'>
                {/* Python bur component   */}
                <CsharpBar ListActioveMobile={ListActioveMobile} setListActiveMobile={setListActiveMobile}></CsharpBar>
  
                <div className='w-full relative '>
                    {/* only mobile mode show */}
                    <button onClick={() => setListActiveMobile(!ListActioveMobile)} className='absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white'>All Topics</button>
                    {/* ----------------- */}
                    <div className="flex justify-between mt-3">
            <button
              onClick={handlePrevious}
              className="flex text-lg gap-1 text-[#9EB2D2] no-underline"
            >
              <BsFillArrowLeftCircleFill className="text-4xl mt-1" />{" "}
              <span className="mt-2">Previous</span>
            </button>
            <p className="mt-3 lg:mt-0 text-3xl no-underline text-[#01B6FF] capitalize">
              {pageTitle}
            </p>
            <button
              onClick={handleNext}
              className="flex text-lg gap-1 text-[#9EB2D2] no-underline"
            >
              <span className="mt-2">Next</span>
              <BsFillArrowRightCircleFill className="text-4xl mt-1" />
            </button>
          </div>
                    <div className='space-y-3'>
                    <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>There are 3 Types of object initialization C#</h1>
                      
                      <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>1, by the reference variable in C#<br/>
                      2, by using a method in C#<br/>
                      3, by using constructor in C#
                    
                      </h1>



                      <p className='font-bold'>1, Reference Variable in C#:</p>

                      <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              <div className=' flex gap-2 pl-7 items-center'>
                <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                <div className='mx-1'>
                  <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program and Print int and name in Reference variable in C# Example?</p>
                </div>

              </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled value={code1} /> 
</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
              </p>
            </div>

<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              <div className=' flex gap-2 pl-7 items-center'>
                <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                <div className='mx-1'>
                  <p className='text-lg font-semibold text-[#01B6FF]'>Q-Reference variable in C# Example?</p>
                </div>

              </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled value={code2} /> 
</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>

           
<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              <div className=' flex gap-2 pl-7 items-center'>
                <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                <div className='mx-1'>
                  <p className='text-lg font-semibold text-[#01B6FF]'>Q-create 2 object class and Initilize in C#?</p>
                </div>

              </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled value={code3} /> 
</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>


<p className='font-bold'>2,Using Method:</p>


<div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
              <div className=' flex gap-2 pl-7 items-center'>
                <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
                <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
                <div className='mx-1'>
                  <p className='text-lg font-semibold text-[#01B6FF]'>Q-Reference variable by Using Method in c# example?</p>
                </div>

              </div>
</div>
                    <div className='bg-[#1f3040] rounded-b-xl'>
<CodeEditorFiled value={code4} /> 
</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout4}
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
  );
};

export default CSharpObjectInitializers;