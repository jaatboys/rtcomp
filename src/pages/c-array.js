import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Header from "../app/components/Header/page";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import CBar from "./Cbar";
import CodeEditorFiled from "../app/components/CodeEditor";
import { useRouter } from "next/router";
import "./styles.css";
import Footer from "../app/components/Footer/Footer";
import Layout from "../app/layout";

export default function CArray() {
  const code = `


    1, One-dimensional array in c
    2, Multi-dimensional array in c
        
        
         `;
  const code1 = `
    
  Ex- {10,20,30,40,50}
     
          
      `;
  const code2 = `
      
    
    Type array_name [size];
    Ex-int a [4]
    int b [5]
      
      `;

  const code3 = `
    int a [6]= {20,40,30,60,50}
    int a []= {1,2,3,5,8,10}
    float a []= {2.8,20.46,8.6,4.5,46.50}
      
      `;
  const code4 = `
  #include <stdio.h> 
  #include <stdio.h> 
  
  int main() {
    int a[10], i, flag = 0;
    printf("Enter 10 elements: ");
    for (i = 0; i < 10; i++) {
        scanf("%d", &a[i]);
    }
    printf("Even numbers in the given array are: ");
    for (i = 0; i < 10; i++) {
        if (a[i] % 2 == 0) {
            printf("%d ", a[i]);
            flag = 1;
        }
    }
    if (flag == 0) {
        printf("None");
    }
    return 0;
  }
    
      `;

  const code5 = `
  #include <stdio.h>
  int main()
  {
  int a[10],i, maximum;
  printf("enter 10 elements\n");
  for(i=0;i<10;i++)
  scanf("%d",&a[i]);
  maximum=a[0];
  for(i=0;i<10;i++)
  {
  if (a[i]>maximum)
  maximum=a[i];
  }
  printf("maximum=%d",maximum);
  return 0;
  }
      `;

  const code6 = `
       
    
#include <stdio.h> 
int main() { 
 int i;
 int a[8]; 
 printf("Enter 8 elements:");
 for (i = 1; i <= 8; i++) {
     scanf("%d", &a[i]);
 }
 printf("Reverse: ");
 for (i = 8; i >= 1; i--) {
     printf("%d ", a[i]);
 }
 printf("\n");
 return 0; 
}`;

  const code7 = `
  #include <stdio.h> 
  int main() 
  { 
   int i, max;
   int a[10]; 
   
   printf("Enter 10 elements:");
   for (i = 1; i <= 10; i++)
       scanf("%d", &a[i]);
   
   max = a[1];
   for (i = 2; i <= 10; i++)
   {
       if (a[i] > max) 
           max = a[i];
   }
   
   printf("Maximum : %d", max);
   
   return 0; 
  } `;
  const code8 = `
    
  #include <stdio.h> 
  int main()
  { 
   int i, a[5], b[5], c[5]; 
   printf("Enter 5 elements of A:");
   for (i = 0; i < 5; i++)
   {
       scanf("%d", &a[i]);
   }
   printf("Enter 5 elements of B:");
   for (i = 0; i < 5; i++)
   {
       scanf("%d", &b[i]);
   }
   printf("Sum of corresponding elements of A and B:\n");
   for (i = 0; i < 5; i++)
   {
       c[i] = a[i] + b[i];
       printf("%d ", c[i]);
   }
   return 0; 
  } 
      `;

  const code9 = `
      #include <iostream>
    using namespace std;
    
    int main()
    {
      int arr[10];
    
      cout << "Enter 10 integers: " << endl;
      for (int i = 0; i < 10; i++)
      {
        cin >> arr[i];
      }
    
      cout << "Even elements of the array: " << endl;
      for (int i = 0; i < 10; i++)
      {
        if (arr[i] % 2 == 0)
          {
            cout << arr[i] << " ";
          }
      }
      cout << endl;
    return 0;
    } `;

  const [pageTitle, setPageTitle] = useState("");
  const router = useRouter();
  const [ListActioveMobile, setListActiveMobile] = useState(false);

  const handleNext = () => {
    // Calculate the next page URL based on your routing structure
    // For example, if you want to go to the next page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const nextPageUrl = "/c-function"; // Update with your actual URL

    // Navigate to the next page
    router.push(nextPageUrl);
  };

  const handlePrevious = () => {
    // Calculate the previous page URL based on your routing structure
    // For example, if you want to go to the previous page, you can manipulate the current route as needed
    // Replace this logic with your actual routing structure
    const previousPageUrl = "/c-continue"; // Update with your actual URL
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
        <main className="max-w-[1440px] mx-auto flex gap-14 justify-between relative py-3 px-4">
          <CBar
            ListActioveMobile={ListActioveMobile}
            setListActiveMobile={setListActiveMobile}
          ></CBar>

          <div className="w-full relative ">
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
            <div className="space-y-3">
              {/* <h5 className='text-[#01B6FF] mt-3 lg:text-xl'>The syntax for if-else in C++:</h5> */}
              {/* <div class="text-[#9EB2D2]">
                    <p>If Statement use for making a decision. If and else can be a block statement and else if c++ Statement</p>
                   </div> */}
              <p>
                1, This is a collection of similar types of data and stored
                manually consecutively under one name <br />
                2, The index number will be different <br />
                3, Main purpose of the array is used to handle a large volume of
                data of some type more easily
              </p>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                There are 2 types of Array in C:
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
                <CodeEditorFiled code={code} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Basic array C Style Examples:
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
                <CodeEditorFiled code={code1} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Array in C Syntax:
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
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Initialize Array Example in C:
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
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                How to print an array in c
              </h1>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      QQ-Write a program to input an array of 10 elements and
                      print only even elements?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code4} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                input :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  Enter 10 elements: 1 2 3 4 5 6 7 8 9 12
                </p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  Even numbers in the given array are: 2 4 6 8 12{" "}
                </p>
              </div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q- Write a program to input an array of 10 elements and
                      print only even elements?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code5} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                input :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  Enter 10 elements: 33 45 16 24 54 23 51 95 6 45
                </p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">maximum=95</p>
              </div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program to input an array of 8 elements and
                      print in reverse?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code6} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                input :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  Enter 10 elements: Enter 8 elements: 1 2 3 4 5 6 7 8
                </p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">Reverse: 8 7 6 5 4 3 2 1</p>
              </div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program to input an array of 10 elements and
                      print maximum in C?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code7} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  Enter 10 elements: 5 7 2 8 1 9 3 6 12 10
                </p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">Maximum : 12</p>
              </div>
              <div className="bg-[#2c3e4c] sm:p-3 py-3  rounded-t-xl">
                <div className=" flex gap-2  sm:pl-7 items-center">
                  <div className="sm:p-1.5  rounded-full bg-[#ff6056]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#ffbf21]"> </div>
                  <div className="sm:p-1.5  rounded-full bg-[#29c940]"> </div>
                  <div className="mx-1">
                    <p className="text-lg font-semibold text-[#01B6FF]">
                      Q-Write a program to add two arrays and results should be
                      stored into a third array in C?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1f3040] rounded-b-xl">
                <CodeEditorFiled code={code8} />
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Input :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  Enter 5 elements of A: 2 4 6 8 12 Enter 5 elements of B: 1 3 5
                  7 10
                </p>
              </div>
              <h1 class="text-[#01B6FF] my-4 sm:text-2xl text-xl font-semibold sm:font-normal ">
                Output :
              </h1>
              <div class="bg-[#2c3e4c] p-3 rounded-b-xl font-bold ">
                <p class="whitespace-pre-wrap ">
                  Sum of corresponding elements of A and B: 3 7 11 15 22
                </p>
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
