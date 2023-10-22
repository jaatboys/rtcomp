
// import { useState } from "react";
import HomePage from './components/Home/Home'

export default function Home() {

  // const lang = ['javascript','c','cpp','java','python','php','go','typescript','csharp'];
  
  // const [langauge,setLangauge] = useState();
  // const [code,setCode] = useState();
  // const [output,setOutput] = useState("");

  // const Reset = ()=>{
  //   setCode("");
  // };

  // const Run = async()=>{
  //   const rawResponse = await fetch(`api/compiler/${langauge}`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({code})
  //   });
  //   const content = await rawResponse.json();
    
  // if(content.error){
  //   setOutput(content.error);
  // }else if(content.massege){
  //   setOutput(content.massege);
  // }else{
  //   setOutput(content.output);
  // }

  // }

  return (
    <HomePage/>
    // <main className=" container mx-auto p-5">
    //   <p className="mb-5 font-medium">Choose a Langauge</p>
    //   {
    //     lang.map((item,index)=>{
    //       return <button onClick={(e)=>setLangauge(e.target.value)} value={item} key={index} className={`border px-2 py-1 mx-1 rounded-md font-medium bg-green-300 ${langauge ===item?"bg-green-500":""}`}>{item}</button>
    //     })
    //   }
    //   <p className="text-center mt-10">
    //     <button onClick={Reset} className="border outline-none p-1 px-3 mr-3 rounded-md bg-red-500 text-white">Reset</button>
    //     <button onClick={Run} className="border outline-none p-1 px-3 rounded-md bg-green-500 text-white">Run</button>
    //   </p>
    //   <Editor code={code} setCode={setCode} output={output}/>
    // </main>
  )
}

// const Editor = ({code,setCode,output}) =>{
//   return (
//     <>
//       <div className=" border border-black container h-80 mx-auto mt-5 md:flex">
//         <div className="md:w-1/2">
//           <textarea onChange={(e)=>setCode(e.target.value)} value={code} className="outline-none px-1 w-full" rows={13} cols={82}/>
//         </div>
//         <div className="border-black border-l px-1 md:w-1/2">
//          {output}
//         </div>
//       </div>
//     </>
//   )
// }
