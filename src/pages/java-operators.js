import React, { useEffect, useState } from 'react';
import JavaBar from './javaSidebar'
import CodeEditorFiled from '../app/components/CodeEditor';
import JavaNavBar from './JsNav';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Header from '../app/components/Header/page'
import Footer from '../app/components/Footer/Footer';
import Head from 'next/head';


export default function JavaOperators() {
    const code1 = `
106/8%40+5-2
    `
    const codeout1 = `
(+-/%) this is an operator 
    `
    const code2 = `
int c=a+b
=,+ are an operator
a,b is an operand
    `
    const code3 = `
int A=b+c+d; Above in this line of code  
+,= are operators means there are Two operators
b,c,d are operands means there are Three operands
    `
    const code4 = `
A=b*d-c;
Above in this line of code  
+,=,-,*  are operators means there are Four operators
b,c,d are operands means there are Three operands
    `
    const code5 = `
int a ,b ,c;
a = 8;
b = 4;
c = a+b;
System.out.println(c);
 `
const codeout5 = `
12
    `
    const code6 = `
 C = a-b;
 C = a*b;
 C = a/b;
 C = a%b;
 C = a++; OR a--;
 C = b++; OR b--;
    `
    const code7 = `
int a,b;
a = 10;
b = 20;
if(a<b)
{ 
 System.out.println("b is greater");
} 
    `
    const codeout7 = `
b is greater 
    `
    const code8 = `
int a ,b;
a = 20;
b = 20;
  if(a<=b)
   { 
    System.out.println("both equal");
   } 
    `
    const codeout8 = `
both equal 
    `
    const code9 = `
int a ,b ,c;
a = 20;
b = 20;
c = 40;
System.out.println(a<=b && a>c);
    `
    const codeout9 = `
false
    `
    const code10 = `
int a;
a = 5;
System.out.println(a);
a = a*4;
System.out.println(a);
    `
    const codeout10 = `
5
20
    `
    const code11 = `
Variable a = (expression)?true:false
    `
    const code12 = `
int a = 10;
System.out.println(a);
a++;
System.out.println(a);
    `
    const codeout12 = `
10 
11 
    `
    const code13 = `
int  a ;
a = 20;
a = a + 2;

System.out.println(a);

 OR
a ++++; 
   
System.out.println(a);
    `
    const codeout13 = `
22 
error 
    `
    const code14 = `
// If we use (++a) 
int a = 10,b;
System.out.println(a);
b = ++a;
System.out.println(b);

OR

// if we use (a++) 
int a = 20,b;
System.out.println(a);
b = a++;
System.out.println(b);
    `
    const codeout14 = `
10 
11 
   
20 
20 
    `
    
    const router = useRouter();
    const [ListActioveMobile,setListActiveMobile] = useState(true);
    const [pageTitle, setPageTitle] = useState("");
  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "./JavaKeywords"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "./JavaDataTypes"; // Update with your actual URL

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
 
 <title>Master the Art of Java operator: A Beginner's Tutorial Guide by CodeExampler</title>
 <meta name="description" content="Java operator tutorial for beginners.Operators in Java are used special symbols which perform any type of operations." />
 <meta name="keywords" content="codeexampler,programming language,tutorial for begineers,java operator,javascript operator
 ,what is java operator,java operators,java is operator,java operator precedence
 ,java and operator,java operator and,operator overloading in java,java operator overloading" />
 <link rel="canonical" href="https://www.codeexampler.com/java-operators" />
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
                  <h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>The Operator in Java:</h1>

<div className='text-[#9EB2D2]'>

    <p>

        Operators in Java are used special symbols that perform any operation.  <br />
        OR <br />
        Java and operator is a special symbol that is used in the expression.
    </p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>The Operator in Java Syntax code:</h1>

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
                      
<CodeEditorFiled value={code1} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Answer :</h1>
                        <div className='bg-[#2c3e4c] p-3 rounded-t-xl'>
                        <CodeEditorFiled code={codeout1} />
                        </div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Operator in Java Syntax Example:</h1>

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

<CodeEditorFiled value={code2} />
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Another Operator in Java Syntax code:</h1>

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
    
<CodeEditorFiled value={code3} />
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Operator in Java Syntax code:</h1>

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
  
<CodeEditorFiled value={code4} />
</div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>1, Arithmetic operator:</h1>

<div className='text-[#9EB2D2] font-bold'>

    <p>
        <strong>
            + Add  <br />
            - Sub <br />
            * Multiply <br />
            / Division <br />
            % Modules <br />
            ++ Increment <br />
            -- Decrement
        </strong>
    </p>

</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java Operator Example</h1>

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
                
<CodeEditorFiled value={code5} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout5}
              </p>
            </div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java Operator Example code:</h1>

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
   
<CodeEditorFiled value={code6} />
</div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>2, Relational operator:</h1>



<div className='text-[#9EB2D2]'>

    <p>
        <strong>

            &gt; greater than <br />
            &lt; less than <br />
            &gt;= greater than or equal to<br />
            &lt;= less than or equal to<br />
            !=  not equal to <br />
            ==  equal to
        </strong>
    </p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java Relational Operator Example:</h1>

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
                
<CodeEditorFiled value={code7} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout7}
              </p>
            </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java another Operator Example code:</h1>

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
              
<CodeEditorFiled value={code8} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout8}
              </p>
            </div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>3, Logic operator:</h1>



<div className='text-[#9EB2D2]'>

    <p>
        <strong>

            And && <br />
            Or || <br />
            Not!
        </strong>
    </p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java Logic Operator Example code:</h1>

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
                
<CodeEditorFiled value={code9} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout9}
              </p>
            </div>



<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>4, Bitwise operator:</h1>



<div className='text-[#9EB2D2]'>

    <p>
        <strong>

            &gt;&gt; right shift <br />
            &lt; &lt; left shift <br />
            ^ xor <br />
            ~ Not
        </strong>
    </p>

</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>5, Assignment operator:</h1>



<div className='text-[#9EB2D2] font-bold'>

    <p>
        <strong>

            =  <br />
            += <br />
            -= <br />
            *= <br />
            /= <br />
            %= <br />
          { " //= "}<br />
            **= <br />
            &= <br />
            &lt;&lt;= <br />
            &gt;&gt;= <br />
            ^=
        </strong>
    </p>

</div>




<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>6, Identifier operator in Java:</h1>


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
               
<CodeEditorFiled value={code10} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout10}
              </p>
            </div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>7, The conditional operator (?:) in Java:</h1>


<div className='text-[#9EB2D2]'>

    <p>
        A conditional operator is known as a ternary operator. <br />
        * The main point is that this Conditional operator consists of three operands.
    </p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java Operator Syntax code: </h1>


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
                
<CodeEditorFiled value={code11} />
</div>


<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>8, Unary operator:</h1>



<div className='text-[#9EB2D2]'>

    <p>
        <strong>
            ++ <br />
            --
        </strong>
    </p>

</div>

<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal'>Java Unary Operators Examples: </h1>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Java unary Operator increment a by using (++) Example?</p>
        </div>

    </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                
<CodeEditorFiled value={code12} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout12}
              </p>
            </div>

<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-If you add more no inside unary Java operator?</p>
        </div>

    </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
                
<CodeEditorFiled value={code13} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout13}
              </p>
            </div>
                        
<div className='bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl'>
<div className=' flex gap-2  sm:pl-7 items-center'>
    <div className='sm:p-1.5  rounded-full bg-[#ff6056]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#ffbf21]'> </div>
    <div className='sm:p-1.5  rounded-full bg-[#29c940]'> </div>
    <div className='mx-1'>
        <p className='text-lg font-semibold text-[#01B6FF]'>Q-Change position of the unary operator?</p>
        </div>

    </div>
</div>
                      <div className='bg-[#1f3040] rounded-b-xl'>
           
<CodeEditorFiled value={code14} />
</div>
<h1 className='text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal '>Output :</h1>
<div className='bg-[#2c3e4c] p-3 rounded-b-xl font-bold '>
              <p className='whitespace-pre-wrap '>
              {codeout14}
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
