import React, { useEffect, useState } from "react";
import JavaBar from "./javaSidebar";
import CodeEditorFiled from "../app/components/CodeEditor";
import JavaNavBar from "./JsNav";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useRouter } from "next/router";
import Header from "../app/components/Header/page";
import Footer from "../app/components/Footer/Footer";
import Head from "next/head";
import Layout from "../app/layout";
export default function JavaClassAndObject() {
  const code1 = `
Class classname
{ 
 constructors 
 blocks 
 methods 
 nested class 
 fields 
} 
    `;
  const code2 = `
access-modifier Class ClassName
{ 
  Type variable1;
  Or
  Type instancevariable2;
    .. 
    .. 
  Type instancevariable N;
  //Methods
  Type method1 (parameters) 
   { 
    //Body
   } 
  Type method N(parameters) 
   { 
    //Body
   } 
}
    `;
  const code3 = `
Class school
{ 
  int teachers; // no of teachers
  int students; // no of students
  int peon; // no of poem
} 
    `;
  const code4 = `
ClassName object _name = new className();
  Or
School sch = new school();     // create a school object known as sch.
    `;
  const code5 = `
ClassName objectName ;// declare reference to an object

ObjectName sch = new ClassName();// allocate a class object
    `;
  const code6 = `
Class school
{ 
  int teachers; // no of teachers
  int students; // no of students
  int peon; // no of poem

  school sch = new school(); // create a school object known as sch
 
  Or
  school sch;
  Sch = new school();
} 
    `;
  const code7 = `
Object.Member
  Or
School.Teachers = 18;
    `;
  const code8 = `
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
     System.out.println("there are "+ sch.teachers +" teachers in this school");
     System.out.println("there are "+ sch.students +" students in this school");
     System.out.println("there are "+ sch.peon +" peon in this school");
   } 
} 
    `;
  const codeout8 = `
there are 40 teachers in this school
there are 500 students in this school
there are 20 peon in this school
    `;
  const code9 = `
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
   System.out.println("there are "+ sch1.teachers+ " teachers in this school 1");
   System.out.println("there are "+ sch1.students+ " students in this school 1");
   System.out.println("there are "+ sch1.peon+ " peon in this school 1");
   //sch2
   System.out.println("there are "+ sch2.teachers+ " teachers in this school 2");
   System.out.println("there are "+ sch2.students+ " students in this school 2");
   System.out.println("there are "+ sch2.peon+ " peon in this school 2");
 } 
} 
    `;
  const codeout9 = `
there are 40 teachers in this school 1
there are 500 students in this school 1
there are 20 peon in this school 1
  
there are 20 teachers in this school 2
there are 250 students in this school 2
there are 10 peon in this school 2 
    `;

  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/java-method"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/java-oops"; // Update with your actual URL

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
      <div className=" bg-[#1E2736] text-[#9EB2D2] min-h-screen font-Poppins">
        <Header></Header>
        <JavaNavBar />
        <Head>
          <title>
            Unlock the Power of Java Objects: A Beginner's Guide to Java Class
            and Object Tutorial
          </title>
          <meta
            name="description"
            content="Discover the power of Java programming with CodeExampler's Java Class and Object tutorial. Our beginner-friendly guide provides real-world examples and engaging exercises to help you master the basics of class and object in Java. Learn to create and use objects, understand prototypes, and explore the differences between class and object. Start your journey towards Java programming excellence today with CodeExampler!"
          />
          <meta
            name="keywords"
            content="codeexampler, add two numbers using java class and object tutorial,java class and object examples in hindi,difference between class and object in java beginner programming tutorial"
          />
          <link
            rel="canonical"
            href="https://www.codeexampler.com/java-class-and-object"
          />
        </Head>

        <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
          {/* Python bur component   */}
          <JavaBar
            ListActioveMobile={ListActioveMobile}
            setListActiveMobile={setListActiveMobile}
          ></JavaBar>

          <div className="w-full lg:mr-10 relative ">
            {/* only mobile mode show */}
            <button
              onClick={() => setListActiveMobile(!ListActioveMobile)}
              className="absolute -top-3 left-0 bg-[#01B6FF] rounded-br-2xl rounded-bl-2xl p-2.5 lg:hidden text-white"
            >
              All Topics
            </button>
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
            <div className=" mt-6">
              <div className="text-[#9EB2D2] my-4">
                <p>
                  1, Java class is a prototype or blueprint that define the form
                  of an object. <br />
                  2, Java class is constructed by the use of class keyword.{" "}
                  <br />
                  3, Java class is a collection of an object. <br />
                  4, Class doesn't gain space or memory. <br />
                  5, One main thing is that data, variables, define within a
                  class are known as an <strong>
                    {" "}
                    instance variable
                  </strong>. <br />
                </p>
              </div>

              <p className="font-bold text-lg">Important:</p>
              <div className="text-[#9EB2D2]">
                <p>
                  If you don’t write access-modifier before the class so java
                  give by default access-modifier is default.
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold  ">
                Class Syntax in Java:
              </h1>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]"></p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040]  rounded-b-xl">
                <CodeEditorFiled code={code1} />
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold  ">
                Class Syntax in Java:
              </h1>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]"></p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code2} />
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold  ">
                Class Syntax in Java:
              </h1>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]"></p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code3} />
              </div>

              <h1 className="text-[#01B6FF] mt-8 sm:text-2xl text-xl font-semibold">
                Following steps to define a class:
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  1, We created a class name called school. <br />
                  2, You create a few instance variables like- teachers,
                  students, peon.
                  <br />
                  3, You also know that class defines a new data type or a new
                  type of data is known as school.
                  <br />
                  4, The main thing is that you will use the school name to
                  declare as an object type.
                  <br />
                  5, Class don’t create an actual object because this is only a
                  prototype or blueprint.
                </p>
              </div>

              <h1 className="text-[#01B6FF] mt-4 sm:text-2xl text-xl font-semibold">
                Create an object in java:
              </h1>

              <div className="text-[#9EB2D2]">
                <p>
                  1, Object allocates memory <br />
                  2, Java object is an instance of the class <br />
                  3, New keyword is a keyword that creates a new java object
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold  ">
                Syntax for Creating an Object in Java:
              </h1>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]"></p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code4} />
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                We Combine both Statements in Two Steps in java:
              </h1>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]"></p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code5} />
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Create object class in java example:
              </h1>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]"></p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code6} />
              </div>

              <div className="text-[#9EB2D2] my-8">
                <p>
                  1, Sch will be referred to as an instance of a class known as
                  school. <br />
                  2, Every school object contains its own copies in the form of
                  instance variable such as teachers, students, poem. <br />
                  3, Dot operator(.) use to link the name of an object with the
                  member name for ex:
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Object Syntax in Java:
              </h1>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]"></p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code7} />
              </div>

              <div className="text-[#9EB2D2] my-4">
                <p>
                  1, This also known as a <strong>reference variable.</strong>{" "}
                  <br />
                  2, Object put on the left and member put on the right and
                  after assigning the value is 18 or as your choice
                </p>
              </div>

              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                The Reference Variable in Java Example:
              </h1>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]"></p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code8} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout8}</p>
              </div>

              <div className="text-[#9EB2D2] my-4">
                <p>
                  1, This file call by school.java because this program use
                  school class but not call because main() method inside this
                  class known as an inside School so this file call by inside
                  School.java only. <br />
                  2, This is not compulsory both class school and inside School
                  put in same source file .you could put each class in a
                  different file known as school.java and insideSchool.java.{" "}
                  <br />
                  3, To run this program by executing inside the school.class
                </p>
              </div>

              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Create 2 Object in Java class Example?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code9} />
              </div>
              <h1 className="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal">
                Output :
              </h1>
              <div className="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p className="whitespace-pre-wrap ">{codeout9}</p>
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
          </div>
        </main>
        <Footer></Footer>
      </div>
    </Layout>
  );
}
