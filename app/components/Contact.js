import { Arvo } from 'next/font/google'
import React, { forwardRef } from 'react'

const arvoRegular = Arvo({ subsets: ['latin'], weight: '400', style:'italic' });

function AboutMe(props, ref){
    return (
    <div ref={ref} className={arvoRegular.className}>
        <div className='group my-8 w-[90vw]'>
            <div className='bg-gradient-to-r from-transparent via-black/100 to-transparent h-2'></div>
            <div className='relative flex flex-col items-center justify-center bg-gradient-to-r from-transparent via-black/50 to-transparent'>
                <div className='flex flex-row items-center justify-center'>
                    <div className='border-[3px] p-0.5 px-8 group-hover:px-16 transition-all duration-300'></div>
                    <div className='text-5xl p-4'>Contact</div>
                    <div className='border-[3px] p-0.5 px-8 group-hover:px-16 transition-all duration-300'></div>
                </div>
                <div className='relative flex flex-col items-center justify-start h-96'>
                    <div className='text-xl'>Get in touch!</div>
                    <input type='text' className='bg-white/25 rounded-lg p-2 m-2'/>
                    <input type='text' className='bg-white/25 rounded-lg p-2 m-2'/>
                    <input type='submit' className='bg-white/25 rounded-lg p-2 m-2'/>
                </div>
            </div>
            <div className='bg-gradient-to-r from-transparent via-black/100 to-transparent h-2'></div>
        </div>
    </div>
    );
}

export default forwardRef(AboutMe);