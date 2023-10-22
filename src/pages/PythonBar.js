
import { useEffect } from 'react';
import Link from 'next/link';
import { PythonIcon } from '../app/components/Svg';

const PythonBar = ({ ListActioveMobile, setListActiveMobile }) => {
    const PythonList = [
        'Python Variables',
        'Python Types of Variables',
        'Python Identifiers',
            'Python Keywords',
            'Python Input',
            'Python Comments',
            'Python Operators',
            'Python String',
            'Python Control Structure',
            'Python If',
            'Python If Else',
            'Python If Else If',
            'Python Looping',
            'Python While',
            'Python for loop',
            'Python Break',
            'Python Continue',
            'Python Lambda',
            'Python list',
            'Python list Method',
            'Python oops',
            'Python object and Class',
            'Python Dictionaries',
            'Python Tuple',
            'Python Inheritance',
            'Python Constructor',
            'Python Searching',
            'Python Function',
            'Python Function Argument',
            'Python Function overloading',
            'Python Function override',
            'Python exception handling',
            'Python History',
      ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname.replace('/', '').replaceAll('-', ' ');
      localStorage.setItem('listActive', JSON.stringify(currentPath));
    }
  }, []);

  return (
    <>
      <div className={`${ListActioveMobile ? 'flex' : 'hidden lg:flex'}  flex-col mt-20 z-10 lg:mt-4 mr-5 absolute top-0 left-4 lg:relative lg:left-0 lg:w-96 h-full overflow-y-auto  overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-600 scrollbar-track-rounded-xl`}>
        <Link legacyBehavior href="/python" passHref>
          <a className='relative flex no-underline  w-[111%] mb-4 border-4 border-[#01B6FF] bg-[#333F50]'>
            <div className='bg-[#01B6FF] absolute -left-0.5 -top-0.5 h-[105%] w-fit p-2.5 '>
              <PythonIcon className={'w-12 -mt-2'}></PythonIcon>
            </div>
            <h3 className='mt-1 w-full h-full text-center  text-[#01B6FF] py-2.5 ml-14 font-bold'>PYTHON</h3>
          </a>
        </Link>
        {PythonList.map((list, i) => (
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

export default PythonBar;
