import { Arvo } from 'next/font/google'
import React, { forwardRef } from 'react'
import Image from 'next/image'

const arvoRegular = Arvo({ subsets: ['latin'], weight: '400', style:'italic' });

function AboutMe(props, ref){
    return (
    <div ref={ref} className={arvoRegular.className}>
        <div className='group my-8 w-[90vw]'>
            <div className='bg-gradient-to-r from-transparent via-black/100 to-transparent h-2'></div>
            <div className='relative flex flex-col items-center justify-center bg-gradient-to-r from-transparent via-black/50 to-transparent'>
                <div className='flex flex-row items-center justify-center'>
                    <div className='border-[3px] p-0.5 px-8 group-hover:px-16 transition-all duration-300'></div>
                    <div className='text-5xl p-4'>About Me</div>
                    <div className='border-[3px] p-0.5 px-8 group-hover:px-16 transition-all duration-300'></div>
                </div>
                <div className='w-5/6 flex flex-row items-center justify-start h-96'>
                    <div className='relative pointer-events-none m-4'>
                        <div className='p-4 opacity-30 group-hover:opacity-75 transition-all'>
                            <Image src='/Profile Background 2.png' alt='profile photo' width={200} height={200}/>
                        </div>
                        <div className='absolute right-8 top-8'>
                            <Image src='/Profile Photo.jpg' alt='profile photo' width={200} height={200}/>
                        </div>
                    </div>
                    <div className='w-3/4 m-4'>
                    Hi, I&apos;m Nathan Grabowski, a computer science student at the University of Massachusetts Amherst.
                    <br/>
                    <br/>
                    My programming journey started early. It began in middle school with some simple games in the Unity game engine and then later, some basic chatbots for the popular gaming-focused social app Discord.
                    <br/>
                    <br/>
                    In high school, I took up VEX robotics, which combined both hardware and software design and implementation. I eventually became team captain and led a team of newcomers to win multiple tournament-style competitions. Here, I fell in love with the engineering design process: given a task or problem, finding the best and most efficient solution.
                    <br/>
                    <br/>
                    Today, I&apos;m always self-teaching to expand my software engineering toolkit and to build quality software for projects that I believe in.
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-transparent via-black/100 to-transparent h-2'></div>
        </div>
    </div>
    );
}

export default forwardRef(AboutMe);