import React, { useRef } from 'react';
import Button from './Button.jsx'
import { useIsVisible } from '../hooks/useIsVisible';

function Introduction() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="min-h-screen flex items-center justify-start p-8" id="intro">
      <div ref={ref1} className= {`sm:ml-10 transition-translate ease-in duration-500 ${isVisible1 ? "translate-x-0" : "-translate-x-10"}`}>
        <p className="font-main text-black text-m mt-4 sm:text-xl">Hello, I'm</p>
        <h1 className="font-main font-bold text-black text-5xl mt-5 sm:text-7xl">Michaela Freire.</h1>
        <p className="font-main text-black text-m font-bold sm:text-xl">Junior UX Designer and Full Stack Developer</p>
        <p className="font-main text-black text-m mt-5 max-w-lg w-full sm:text-xl sm:max-w-xl">I love <span className="bg-pink-light">understanding</span> people and <span className="bg-pink-light">designing</span> and <span className="bg-pink-light">coding</span> solutions that hopefully make their lives a bit better. </p>
        <div className= "max-w-lg w-full mt-5 flex justify-start">
          <Button text="Say hi" website="mailto:michaela.freiregriffith@gmail.com"/>
        </div>
      </div>
    </div>
  )
}

export default Introduction
