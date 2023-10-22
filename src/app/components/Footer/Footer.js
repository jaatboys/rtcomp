import React from 'react';
import Link from 'next/link';
import { IconCE, IconFooterC, IncoLinkdin } from '../Svg';
import { BiCurrentLocation } from "react-icons/bi";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <div className='relative bg-black md:px-16 sm:px-10 px-4 py-10 text-center items-center'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#1f1f1f] z-0 font-bold smm:text-[5rem] sm:text-[4rem] text-[3rem] min-[1154px]:text-[10rem] min-[1000px]:text-[8rem] min-[890px]:text-[7rem] md:text-[6rem]'>
        <p>CodeExampler</p>
      </div>
      <div className='relative z-1 '>
        <div className='md:flex '>
          <div className='md:w-[25%] text-center w-[100%] '>
            <div className='max-md:flex justify-center'>
            <p className='flex md:text-4xl  text-3xl   text-white'><span> <IconCE className={'md:w-16  w-12 '}> </IconCE></span> Code<span className='text-[#01B6FF]'>Exampler</span></p>
            </div>
            <div>
              <p className='text-white whitespace-normal mt-6 sm:text-sm md:text-2xl '>
                We provide high-quality tutorials For <span className='font-bold'>Free</span> in popular Coding languages like Python, Java, C#, C++, PHP, C, and more. Our goal is to make programming accessible and easy to understand for anyone who wants to learn.
                <span className='text-white flex justify-center font-bold'>
                  <GoMail className='text-1xl mr-1 mt-1'></GoMail>
                  contact@codeexampler.com
                </span>
              </p>
            </div>
          </div>
          <div className='w-full mt-8 flex justify-between md:ml-[10rem] '>
            <div className='flex flex-col text-white gap-y-2 md:text-xl sm:text-base text-xs max-md:w-[33%]'>
              <p className='text-[#01B6FF]  md:text-2xl text-base font-semibold '>Programs</p>
              <Link href="/python-variables" legacyBehavior>
                <a>Python</a>
              </Link>
              <Link href="/javascript-variables" legacyBehavior>
                <a>Javascript</a>
              </Link>
              <Link href="/java-variables" legacyBehavior>
                <a>Java</a>
              </Link>
              <Link href="/php-variables" legacyBehavior>
                <a>PHP</a>
              </Link>
              <Link href="/csharp-first-program" legacyBehavior>
                <a>C#</a>
              </Link>
              <Link href="/c-variable" legacyBehavior>
                <a>C</a>
              </Link>
              <Link href="/cpp-variable" legacyBehavior>
                <a>C++</a>
              </Link>
              <hr />
              <Link href="/java-vs-python-basic" legacyBehavior>
                <a>Java Vs Python</a>
              </Link>
              <Link href="/java-vs-csharp-basic" legacyBehavior>
                <a>Java Vs C#</a>
              </Link>
            </div>
            <div className='flex flex-col text-white gap-y-2 md:text-xl sm:text-base text-xs max-md:w-[33%]'>
              <p className='text-[#01B6FF] md:text-2xl text-base font-semibold '>Links</p>
              <Link href="/AboutUs" legacyBehavior>
                <a>About Us</a>
              </Link>
              <Link href="/Privacy" legacyBehavior>
                <a>Privacy</a>
              </Link>
              <Link href="/Terms" legacyBehavior>
                <a>Terms &<br className='sm:hidden' /> Conditions</a>
              </Link>
              <Link href="/Disclaimer" legacyBehavior>
                <a>Disclaimer</a>
              </Link>
            </div>
            <div className='flex flex-col gap-y-2 md:text-xl sm:text-base text-xs max-md:w-[33%]'>
              <p className='text-[#01B6FF] md:text-2xl text-base font-semibold text-left md:ml-4'>Contact</p>
              <a target="_blank" href="https://www.linkedin.com/company/codeexampler/">  <p className='text-white flex items-center font-bold  '><IncoLinkdin className={'w-4 mdd:w-6 mr-2'}></IncoLinkdin>Linkedin</p> </a> 
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <hr />
          <span className='flex justify-center text-[#01B6FF] items-center text-xs sm:text-sm md:text-base'>
          <IconFooterC className={' w-5 mb-3 sm:mb-0 sm:mr-2'}></IconFooterC>{new Date().getFullYear()} CodeExampler | Designed By CodeExampler.com | All Right Reserved
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
