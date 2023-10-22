
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const CBar = ({ ListActioveMobile, setListActiveMobile }) => {
  const [ListCssActive, setListCssActiove] = useState(null)
 

  const CList = [
    'C Variable',
     'C Scope Of Variable',
     'C Element',
     'C keyword',
     'C Identifier',
     'C Short Cut Keys',
     'C First Program',
     'C Input',
     'C Literal',
     'C Operator',
     'C Control Structure',
     'C If',
     'C If Else',
     'C If Else If',
     'C Switch',
     'C Looping',
     'C While',
     'C Do While',
     'C For Loop',
     'C Break',
     'C Continue',
     'C Array',
     'C Function',
     'C User Defined Function',
     'C Passing Argument',
     'C History',
  ];
  const handleOptionClick = (selectedOption) => {
    setListCssActiove(selectedOption.replaceAll(' ', ''));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if we're running on the client side
      if (window.location.pathname.includes('C')) {
        localStorage.setItem(
          'list',
          JSON.stringify(CList.map((p) => p.toLowerCase().replaceAll(' ', '-')))
        );
      }

      // const storedListActive = JSON.parse(localStorage.getItem('listActive'));
      // storedListActive(storedListActive || ''); // Set listActive to the stored value or an empty string if it's not found
    }
  }, []); // Empty dependency array, runs only once

  return (
    <>
      <div className={`${ListActioveMobile ? 'flex' : 'hidden lg:flex'}  flex-col mt-20 z-10 lg:mt-4 mr-5 absolute top-0 left-4 lg:relative lg:left-0 lg:w-96 h-full overflow-y-auto  overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-600 scrollbar-track-rounded-xl`}>
        <Link legacyBehavior href="/c" passHref>
          <a className='relative flex no-underline  w-[111%] mb-4 border-4 border-[#01B6FF] bg-[#333F50]'>
            <div className='bg-[#01B6FF] absolute -left-0.5 -top-0.5 h-[105%] w-fit p-2.5 '>
              {/* <PythonIcon className={'w-12 -mt-2'}></PythonIcon> */}
            </div>
            <h3 className='mt-1 w-full h-full text-center  text-[#01B6FF] py-2.5 ml-14 font-bold'>C</h3>
          </a>
        </Link>
        {CList.map((list, i) => (
          <Link legacyBehavior href={list.toLowerCase().replaceAll(' ', '-')} key={i} passHref>
            <a className={`shadow-[0px_10px_30px_rgba(1,182,255,0.25)]  no-underline relative text-white py-4 text-lg bg-[#333F50]  px-6  font-bold whitespace-nowrap ${list.toLowerCase() === (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('listActive')) : '') && 'border-2 border-[#01B6FF]'} `}>
              <div className={`${list.toLowerCase() === (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('listActive')) : '') ? 'border-y-2 border-r-2 border-t-[#01B6FF] border-b-[#01B6FF] border-r-[#01B6FF] h-[105%] -top-0.5' : 'h-full -top-0'} absolute  -right-5 w-10  bg-[#333F50] transform -skew-x-[18deg]`}></div>
              <div className={`${list.toLowerCase() === (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('listActive')) : '') ? 'block' : 'hidden'} w-2 absolute -left-0.5 top-0 h-full bg-[#01B6FF]`}></div>  {list}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CBar;