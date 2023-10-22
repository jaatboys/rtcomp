"use client";
import Link from "next/link";
import Image from "next/image";
import pythonLogo from "../../assets/pythonBigLogo.png";
import phpLogo from "../../assets/phpLogo.png";
import jsLogo from "../../assets/jsLogo.png";
import java from "../../assets/java.png";
import cplusLogo from "../../assets/cplusLogo.png";
import Csharp_Logo from "../../assets/Csharp_Logo.png";
import Clanguage from "../../assets/Clanguage.png";
import Header from "../Header/page";
import './Home.css'

const HomePage = () => {
  return (
    <div className="bg-[#1e2736] ">
    <Header></Header>
    <div className="max-w-full px-10 py-10  bg-[#1e2736] ">
      
      <title>
        CodeExampler Learn Programming Tutorial for Beginners For Free
      </title>
      <meta
        name="description"
        content="CodeExampler Learn Programming tutorial for beginners for Free Learn interview Questions and learn lot of Examples for free,Free Online Tutorials for beginners like Java, Python, C, C++ ,C#, PHP, JavaScript tutorial for beginners learn interview Questions and learn lot of Examples "
      />
      <meta
        name="keywords"
        content="codeexampler,programming language,tutorial for beginners,Difference Between Java and Python,Difference between program and code,java tutorial for beginners,C# tutorial for beginners,Python tutorial for beginners,C tutorial for beginners, JavaScript tutorial for beginners,C++ tutorial for beginners,code,exampler,which online website to learn code,Difference Between Java and C# ,java vs c#,java vs python,free programming online website to learn Python, Java, C#, Csharp, JavaScript, PHP, C, C++"
      />

      {/* <link rel="canonical" href="https://www.codeexampler.com/" /> */}

      <div className="mx-5">
        <h1 className="text-2xl text-[#01B6FF] mb-3 md:block hidden">
          Choose from our courses
        </h1>
        <div className="grid grid-cols-12 gap-2">
          <div
            className="col-span-12 lg:col-span-4
           "
          >
            {/* python */}
            <div className="rounded-xl cursor-pointer h-[18rem] md:h-[24rem] lg:w-[90%] bg-[#1E405D] text-white flex justify-between gap-4 py-2">
              <div className="w-fit  textMode  py-3 ">
                <h1 className="transform rotate-[180deg] text-5xl md:text-7xl font-semibold uppercase ">
                  Python
                </h1>
                <p className="text-base  transform rotate-[180deg]">
                  High-Level Programming Language
                </p>
              </div>
              <div className="w-[70%] flex flex-col justify-around mr-5 ">
                <Image
                  src={pythonLogo}
                  alt="pythonLogo"
                  className="w-40 lgg:w-56 mx-auto mt-1"
                />
                <Link
                  href="/python-variables"
                  className="border-[0.0625rem] bg-[#01B6FF] border-[#01B6FF] text-center rounded-md text-sm font-bold px-2 py-2 hover:border-[#028bc2] text-[#ebf4f8]"
                >
                  Learn Free Tutorial
                </Link>
              </div>
            </div>
            {/* php */}
            <div className="bg-[#4F5B93] cursor-pointer h-[19rem] md:h-[25rem] lg:w-[90%] text-white mt-5 p-4 rounded-lg">
              <div className="grid grid-cols-3 ">
                <div className="col-span-1">
                  <h1 className="text-6xl md:text-6xl font-semibold uppercase">
                    PHP
                  </h1>
                </div>
                <div className="col-span-2">
                  <p className="text-sm lg:text-base text-right mt-2">
                    A General <br className="hidden md:block" />
                    -purpose <br className="hidden md:block" /> Programming{" "}
                    <br className="hidden md:block" /> Language
                  </p>
                </div>
              </div>
              <Image
                src={phpLogo}
                alt="phpLogo"
                className=" h-[8rem] md:h-[12rem] sm:mt-5 mt-8  mx-auto md:mx-0"
              />
              <div className="flex justify-end -mt-2">
                <Link
                  href="/Python-variables"
                  className="w-[100%] text-center md:w-fit bg-white  text-[#4F5B93] text-sm font-bold mt-4  px-5 rounded-md py-2 hover:bg-[#c5c8d8] hover:text-[#1c2e80]"
                >
                  Learn Free Tutorial
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 ">
            {/* js */}
            <div className="w-full cursor-pointer h-[18rem] bg-[#000000] text-white p-2 sm:p-5 md:mt-0 mt-5 rounded-md">
              <div className="sm:flex justify-between h-full ">
                <Image
                  src={jsLogo}
                  alt="jsLogo"
                  className="w-[35%] max-sm:hidden mdd:w-[30%]"
                />
                <div className="w-full sm:text-right text-[#F7DF1E] sm:flex flex-col justify-between  h-full">
                  <div className="max-sm:text-center">
                    <h1 className="md:text-6xl lg:text-8xl  text-5xl ml-2 font-semibold uppercase">
                      JavaScript
                    </h1>
                    <p className="text-base mt-2 ml-2">
                      A Programming Language
                    </p>
                  </div>

                  <Image
                    src={jsLogo}
                    alt="jsLogo"
                    className="w-[8rem] mt-4 mx-auto sm:hidden  md:w-[30%]"
                  />
                  <div className="space-x-2 space-y-3 sm:text-right text-center  ml-2 sm:mb-4 mt-3  ">
                    <Link
                      href="JavaScript/JavaScriptVariables"
                      className="bg-[#F7DF1E] text-black px-12 rounded-md text-sm font-bold w-full mdd:w-[40%]   p-2 hover:bg-[#b6a311] hover:text-[#323336]"
                    >
                      Learn Free Tutorial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12  gap-5 mt-5">
              <div className="col-span-12 lg:col-span-7">
                {/* java */}
                <div className="w-full cursor-pointer h-[15rem] bg-[#20232A] text-white p-5 rounded-md">
                  <div className="flex justify-between">
                    <div className="flex gap-2 -mt-4">
                      <div className="w-fit  textMode  py-3 ">
                        <h1 className="transform rotate-[180deg] text-5xl font-semibold uppercase text-[#01B6FF]">
                          JAVA
                        </h1>
                      </div>
                      <div className="relative  w-[45%]">
                        <p className="text-lg text-[#01B6FF]">
                          A JavaScript library for building <br /> user <br />{" "}
                          interfaces
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-center w-full gap-2">
                      <Image
                        src={java}
                        alt="java"
                        className=" md:w-40 w-36 h-30 md:h-40"
                      />
                      <div className="smm:flex gap-2 mt-2">
                        <Link
                          href="/java-variables"
                          className="bg-[#01B6FF] rounded-md text-white text-sm font-bold whitespace-nowrap w-full  p-2 hover:bg-[#068ec4]"
                        >
                          Learn Free Tutorial
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* c++ */}
                <div className="w-full cursor-pointer h-[15rem] bg-[#004D9D] text-white p-5 mt-5 rounded-md">
                  <div className="flex justify-between ">
                    <div className="w-1/3">
                      <h1 className="text-6xl font-bold uppercase">c++</h1>
                      <div className="md:w-[10%]">
                        <p className="text-base">
                          A High Level Programming Language
                        </p>
                      </div>
                    </div>
                    <div className=" w-full flex flex-col items-end">
                      <Image
                        src={cplusLogo}
                        alt="cplusLogo"
                        className=" h-[10rem]"
                      />
                      <div className="sm:flex gap-2 mt-2">
                        <Link
                          href="/Python-variables"
                          className="bg-[#01B6FF] text-white rounded-md text-sm font-bold whitespace-nowrap w-full  p-2 hover:bg-[#068ec4]"
                        >
                          Learn Free Tutorial
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 space-y-3">
                {/* c#  */}
                <div className="rounded-xl cursor-pointer text-white  p-4 flex flex-col justify-between bg-[#1b1447]  h-[49%]">
                  <div className="grid grid-cols-3  ">
                    <div className="col-span-1">
                      <h1 className="text-5xl mdd:text-4xl lgg:text-6xl font-semibold uppercase">
                        C#
                      </h1>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm lg:text-base text-right mt-2">
                        C# high-level multi-paradigm programming language
                      </p>
                    </div>
                  </div>
                  <Image
                    src={Csharp_Logo}
                    alt="phpLogo"
                    className="w-[25%] lgg:w-[30%]  "
                  />
                  <div className="flex flex-col items-end ">
                    <Link
                      href="/csharp-first-program"
                      className="rounded-md border-[0.0625rem] font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-4 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]"
                    >
                      Learn Free Tutorial
                    </Link>
                  </div>
                </div>
                {/* c  */}
                <div className="rounded-xl cursor-pointer text-white  p-4 flex flex-col justify-between bg-[#2a4566]  sm:h-[49%] ">
                  <div className="grid grid-cols-3  ">
                    <div className="col-span-1">
                      <h1 className="text-5xl mdd:text-4xl lg:text-6xl font-semibold uppercase">
                        C
                      </h1>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm lg:text-base text-right mt-2">
                        C is Link general-purpose computer programming language
                      </p>
                    </div>
                  </div>
                  <Image
                    src={Clanguage}
                    alt="Clanguage"
                    className="w-[30%]  "
                  />
                  <div className="flex flex-col items-end ">
                    <Link
                      href="/Python-variables"
                      className="rounded-md border-[0.0625rem] font-bold bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-4 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]"
                    >
                      Learn Free Tutorial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="my-10 text-center text-4xl md:text-5xl text-[#01B6FF]">
            Difference Between Programming Languages Tutorial
          </h1>
          <div className="md:flex justify-between space-y-10 md:space-y-0 mt-6">
            <div className=" rounded-xl cursor-pointer w-full md:w-[40%] lg:h-auto bg-[#4F5B93] text-white  p-4 flex flex-col justify-between ">
              <div className="flex justify-between">
                <h1 className="text-5xl">JAVA</h1>
                <h1 className="text-5xl">PYTHON</h1>
              </div>
              <div className="flex items-center justify-between mt-4 gap-2">
                <Image
                  src={java}
                  alt="java"
                  className="w-[32%] md:w-[30%] lg:w-[40%] mx-auto"
                />
                <h1 className="text-6xl">VS</h1>
                <Image
                  src={pythonLogo}
                  alt="phpLogo"
                  className="w-[32%] md:w-[30%] lg:w-[40%] mx-auto"
                />
              </div>
              <div className="flex flex-col items-end my-3">
                <Link
                  href="/javavspython/javavspython"
                  className="border-[0.0625rem] font-bold w-full text-center rounded-lg bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]"
                >
                  Learn Free Tutorial
                </Link>
              </div>
            </div>
            <div className=" rounded-xl cursor-pointer w-full md:w-[40%] lg:h-auto bg-[#1E405D] text-white  p-4 flex flex-col justify-between ">
              <div className="flex justify-between">
                <h1 className="text-5xl">JAVA</h1>
                <h1 className="text-5xl">C#</h1>
              </div>
              <div className="flex items-center justify-between mt-4 gap-2">
                <Image
                  src={java}
                  alt="phpLogo"
                  className="w-[32%] md:w-[30%] lg:w-[40%] mx-auto"
                />
                <h1 className="text-6xl">VS</h1>
                <Image
                  src={Csharp_Logo}
                  alt="phpLogo"
                  className="w-[32%] md:w-[30%] lg:w-[40%] mx-auto"
                />
              </div>
              <div className="flex flex-col items-end my-3">
                <Link
                  href="/Python-variables"
                  className="border-[0.0625rem] font-bold w-full text-center rounded-lg bg-[#01B6FF] border-[#01B6FF] text-white text-sm px-2 py-2 hover:border-[#028bc2] hover:text-[#ebf4f8]"
                >
                  Learn Free Tutorial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
