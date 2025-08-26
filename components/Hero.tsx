
//updated portfolio in the hero section 
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/text-generate-effect';
import Link from 'next/link';
import Magic from './ui/Magic-button';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="pb-20  pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:left32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 -left-80  h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[100vh] w-[50vw]" fill="blue" />
      </div>
      <div className=" flex h-screen w-full items-center justify-center bg-white dark:bg-black absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
       
      </div>
      <div className='relative my-20 z-10 flex items-center  justify-center'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex-col items-center text-center justify-center'>
          <h2 className='  uppercase tracking-widest text-xs  items-center text-center text-blue-100 max-w-full'>Dynamic web magic with next.js</h2>

          <TextGenerateEffect   
          className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words='Transforming Concepts Into seamless User Experiences'/>

          <p className='text-center md:tracking-wider mb-4 text-sm  md:text-xl lg:text-2xl'>
            Hi  I&apos;m Sharique,a software engineer with a passion for building
            beautiful and functional web applications.
          </p>
          <Link href="#about">
          <Magic 
          title="show my work"
          icon={<FaLocationArrow className="ml-2 h-4 w-4" />}
          position="right"
          /> 
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Hero
