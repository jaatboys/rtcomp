import React from 'react';
import { useState,useEffect } from 'react';
import Link from 'next/link'
import './styles.css';


const CsharpBar = ({ ListActioveMobile, setListActiveMobile }) => {
    const [ListCssActive, setListCssActiove] = useState(null)

    const CsharpBar = [
        'C# First Program',
        'C# Comments',
        'C# keyword',
        'C# Operator',
        'C# Datatypes',
        'C# Variable',
        'C# Identifier',
        'C# Input',
        'C# Literal',
        'C# Namespace',
        'C# String',
        'C# Control Structure',
        'C# If',
        'C# If Else',
        'C# If Else If',
        'C# Conditional Operator',
        'C# Switch',
        'C# Looping Statement',
        'C# While',
        'C# Do Wile',
        'C# For Loop',
        'C# Break',
        'C# Continue',
        'C# Goto',
        'C# Array',
        'C# Oops',
        'C# Class And Object',
        'C# Method',
        'C# User Define Function',
        'C# Passing Argument',
        'C# Object Initializers',
        'C# Constructor',
        'C# Inheritance',
        'C# Single Inheritance',
        'C# Multilevel Inheritance',
        'C# Association',
        'C# Overloading',
        'C# Overriding',
        'C# History',
        'C# Introduction',
        

    ]

    const handleOptionClick = (selectedOption) => {
      setListCssActiove(selectedOption.replaceAll(' ', ''));
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Check if we're running on the client side
        if (window.location.pathname.includes('C#')) {
          localStorage.setItem(
            'list',
            JSON.stringify(PythonList.map((p) => p.toLowerCase().replaceAll(' ', '')))
          );
        }
  
        // const storedListActive = JSON.parse(localStorage.getItem('listActive'));
        // storedListActive(storedListActive || ''); // Set listActive to the stored value or an empty string if it's not found
      }
    }, []); // Empty dependency array, runs only once
  
    return (
  <div
        className={`${
          ListActioveMobile ? 'flex' : 'hidden lg:flex'
        } flex-col mt-20 z-10 lg:mt-4 mr-5 absolute top-0 left-4 lg:relative lg:left-0 lg:w-96 h-full overflow-y-auto  overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-600 scrollbar-track-rounded-xl`}
      >
        <Link href="/C#-" passHref>
          <div className="relative flex no-underline w-full mb-4 border-4 border-[#01B6FF] bg-[#333F50]">
            <div className="bg-[#01B6FF] absolute -left-0.5 -top-0.5 h-[105%] w-fit p-2.5 "></div>
            <h3 className="mt-1 w-full h-full text-center text-[#01B6FF] py-2.5 ml-0 font-bold">
              C#
            </h3>
          </div>
        </Link>
        {CsharpBar.map((list, i) => (
          <Link href={`/${list.replaceAll(' ', '')}`} key={i} passHref>
          <div
            className={`shadow-[0px_10px_30px_rgba(1,182,255,0.25)] no-underline relative text-white py-4 text-lg bg-[#333F50] px-6 font-bold whitespace-nowrap ${
              list.replaceAll(' -', '') === ListCssActive && 'border-2 border-[#01B6FF]'
            }`}
            onClick={() => handleOptionClick(list)}
            // onMouseEnter={() => setListActive(list.replaceAll(' ', ''))} // Set listActive when hovering
            // onMouseLeave={() => setListActive('')} // Clear listActive when no longer hovering
          >
              <div
                className={`${
                  list.replaceAll(' ', '') === ListCssActive
                    ? 'border-y-2 border-r-2 border-t-[#01B6FF] border-b-[#01B6FF] border-r-[#01B6FF] h-[105%] -top-0.5'
                    : 'h-full -top-0'
                } absolute -right-5 w-10 bg-[#333F50] transform -skew-x-[18deg]`}
              ></div>
              <div
                className={`${
                  list.replaceAll(' ', '-') === ListCssActive ? 'block' : 'hidden'
                } w-2 absolute -left-0.5 top-0 h-full bg-[#01B6FF]`}
              ></div>{' '}
              {list}
            </div>
          </Link>
        ))}
      </div>
    );
  };
  
  
  export default CsharpBar;
  