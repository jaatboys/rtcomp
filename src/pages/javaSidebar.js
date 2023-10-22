'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const JavaBar = ({ ListActiveMobile, setListActiveMobile }) => {
  const [ListCssActive, setListCssActive] = useState(null);

  const JavaBar = [
    'Java Variables',
        'java types of variables',
        'Java Comments',
        'Java Identifier',
        'Java String',
        'Java Literals',
        'Java Data Types',
        'Java Operators',
        'Java keywords',
        'Java First Program',
        'Java Control Structure',
        'Java If',
        'Java If Else',
        'Java If Else If',
        'Java Conditional Operator',
        'Java Switch',
        'Java Looping',
        'Java While',
        'Java Do While',
        'Java For Loop',
        'Java Break',
        'Java Continue',
        'Java Array',
        'Java Oops',
        'Java Class And Object',
        'Java Method',
        'Java User Defined Function',
        'Java Object Initialize',
        'Java Constructor',
        'Java Inheritance',
        'Java Single Inheritance',
        'Java Multilevel Inheritance',
        'Java Hierarchical Inheritance',
        'Java Association',
        'Java Overloading',
        'Java Overriding',
        'Java Passing Argument',
        'Java Enum',
        'Java History',
        'Java Features',
        
    ]

  

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('list');
      if (window.location.pathname.includes('java-')) {
        localStorage.setItem('list', JSON.stringify(JavaBar.map((p) => p.toLowerCase().replaceAll(' ', '-'))));
      }

      localStorage.setItem('listActive', JSON.stringify(window.location.pathname.replace('/', '').replaceAll('-', ' ')));
    }
  }, []); // Use an empty dependency array to ensure this runs only once on the client side.

  return (
    <div className={`${ListActiveMobile ? 'flex' : 'hidden lg:flex'} flex-col mt-20 z-10 lg:mt-4 mr-5 absolute top-0 left-4 lg:relative lg:left-0 lg:w-96 h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-600 scrollbar-track-rounded-xl`}>
      <Link href="/java">
        <div className='relative flex no-underline w-[111%] mb-4 border-4 border-[#01B6FF] bg-[#333F50]'>
          <div className='bg-[#01B6FF] absolute -left-0.5 -top-0.5 h-[105%] w-fit p-2.5 '>
            {/* Add your icon here */}
          </div>
          <h3 className='mt-1 w-full h-full text-center text-[#01B6FF] py-2.5 ml-14 font-bold'>Java</h3>
        </div>
      </Link>
      {JavaBar.map((list, i) => (
        <Link href={`/${encodeURIComponent(list.toLowerCase().replaceAll(' ', '-'))}`} key={i}>
          <div className={`shadow-[0px_10px_30px_rgba(1,182,255,0.25)] no-underline relative text-white py-4 text-lg bg-[#333F50] px-6 font-bold whitespace-nowrap ${list.toLowerCase() === (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('listActive')) : '') && 'border-2 border-[#01B6FF]'} `}>
            <div className={`${list.toLowerCase() === (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('listActive')) : '') ? 'border-y-2 border-r-2 border-t-[#01B6FF] border-b-[#01B6FF] border-r-[#01B6FF] h-[105%] -top-0.5' : 'h-full -top-0'} absolute -right-5 w-10 bg-[#333F50] transform -skew-x-[18deg]`}></div>
            <div className={`${list.toLowerCase() === (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('listActive')) : '') ? 'block' : 'hidden'} w-2 absolute -left-0.5 top-0 h-full bg-[#01B6FF]`}></div>  {list}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JavaBar;
