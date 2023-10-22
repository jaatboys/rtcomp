import React, { useEffect, useState } from 'react';
import JavaBar from './javaSidebar'
import CodeEditorFiled from '../app/components/CodeEditor';
import JavaNavBar from './JsNav';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Header from '../app/components/Header/page'
import Footer from '../app/components/Footer/Footer';
import Head from 'next/head';
export default function JavaObjectInitialize() {
    const code1 = `
class Human 
{ 
  int age; 
  String name; 

  public static void main (String[] args) 
   { 
     Human h = new Human();
     h.age = 160208;
     h.name = "codeExampler";
     System.out.println(h.age+" "+h.name);
   } 
} 
    `
    const codeout1 = `
160208 codeExampler
    `
    const code2 = `
class school 
{ 
  int teachers; // no of teachers
  int students; // no of students
  int peon; // no of poem
  //this class declares an object of type school.

   public static void main (String[] args) 
   { 
     school sch = new school();
     sch.teachers = 40;
     sch.students = 500;
     sch.peon = 20;
     // This dot operator (.) is used to access the member
     System.out.println("there are "+ sch.teachers+" teachers in this school");
     System.out.println("there are "+ sch.students+" students in this school");
     System.out.println("there are "+ sch.peon+" peon in this school");
   } 
}
    `
    const codeout2 = `
there are 40 teachers in this school
there are 500 students in this school
there are 20 peon in this school
    `
    const code3 = `
class school 
{ 
  int teachers; // no of teachers
  int students; // no of students
  int peon; // no of poem
  //this class declares an object of type school.

   public static void main (String[] args) 
   { 
   school sch1 = new school();
   school sch2 = new school();
   //Sch1 and sch2 Both are different objects
   //assigns value inside the sch1 fields
   sch1.teachers = 40;
   sch1.students = 500;
   sch1.peon = 20;
   //assigns value inside the sch2 fields
   sch2.teachers = 20;
   sch2.students = 250;
   sch2.peon = 10;
   // This dot operator (.) is used to access the member
   //sch1
   System.out.println("there are "+ sch1.teachers+" teachers in this school 1");
   System.out.println("there are "+ sch1.students+" students in this school 1");
   System.out.println("there are "+ sch1.peon+" peon in this school 1");
   //sch2
   System.out.println("there are "+ sch2.teachers+" teachers in this school 2");
   System.out.println("there are "+ sch2.students+" students in this school 2");
   System.out.println("there are "+ sch2.peon+" peon in this school 2");
 } 
} 
    `
    const codeout3 = `
there are 40 teachers in this school 
there are 500 students in this school 1
there are 20 peon in this school 1
 
there are 20 teachers in this school 2
there are 250 students in this school 2
there are 10 peon in this school 2 
    `
    const code4 = `
class Human {
 int teachers;
 int students;
 void numbers(int t, int s) {
     teachers = t;
     students = s;
 }
 void show() {
     System.out.println(teachers + " " + students);
 }
 public static void main(String[] args) {
     Human h = new Human();
     h.numbers(40, 400);
     h.show();
 }
}
    `
    const codeout4 = `
40 400
    `
    const router = useRouter();
    const [ListActioveMobile,setListActiveMobile] = useState(true);
    const [pageTitle, setPageTitle] = useState("");
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "./JavaConstructor"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "./JavaUserDefinedFunction"; // Update with your actual URL

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
<Header></Header>
<JavaNavBar/>
<Head>
 
 <title>Master the Art of Java object initialization: A Beginner's Tutorial Guide by CodeExampler</title>
<meta name="description" content="Java object initialization tutorial for beginners.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and questions of all technology like java tutorial, Java tutorial,Java tutorial for beginners in deeply knowledge With Deeply" />
<meta name="keywords" content="codeexampler,programming language,rrefrence variable,using method in java,using constructor in java,tutorial for begineers,java object initialization,java constructor initialization list,java object initialization like c#,java initialize object in loop,java initialize object outside constructor,object initialization through method in java,java object initialization process,java object initialization without new,object initialization in java javatpoint,java new object array initialization" />
<link rel="canonical" href="https://www.codeexampler.com/java-object-initialize" />
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
                  <div className='font-bold'>

<p>
    1, Reference variable in java <br />
    2, Using Method in java<br />
    3, Using Constructor in java
</p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Reference Variable in Java:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write Program the reference variable in java example?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled value={code1} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout1}
              </p>
            </div>

            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a program reference variable in java example?
        </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled value={code2} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout2}
              </p>
            </div>

            <div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write a Program create 2 object class?</p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled value={code3} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout3}
              </p>
            </div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>2, Using Method:</h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Write Program the reference variable in java example?
        </p>
    </div>

</div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                      <CodeEditorFiled value={code4} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Output :</h1>
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
}
