import React, {useEffect, useState} from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";


const App = () => {

  const [show, setShow]= useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset > 500){
        setShow(true)
      }else{
        setShow(false)
      }
    })
  })

  const clickHandler=()=>{
    window.scroll({top:0, behavior:'smooth'})
  }


  return (
    <div className='h-full'>

      <section className='h-screen flex justify-center items-center text-3xl text-white bg-blue-950 '>first</section>
      <section className='h-screen flex justify-center items-center text-3xl text-white bg-green-700 '>second</section>
      <section className='h-screen flex justify-center items-center text-3xl text-white bg-yellow-700 '>third</section>
      <section className='h-screen flex justify-center items-center text-3xl text-white bg-pink-700 '>fourth</section>

      {/* <a href='#'
      className={`fixed right-4 ${show ?'bottom-12' :'bottom-8'} transition-all duration-300
      text-white text-4xl ${show ?'opacity-1' :'opacity-0'} 
      `}
      >
        <FaArrowAltCircleUp />
      </a> */}

      <button
      className={`fixed right-4 ${show ?'bottom-12' :'bottom-8'} transition-all duration-300
      text-white text-4xl ${show ?'opacity-1' :'opacity-0'} 
      `}
       onClick={clickHandler}>
        <FaArrowAltCircleUp />
      </button>

    </div>
  );
};

export default App;