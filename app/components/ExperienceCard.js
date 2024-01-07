import { Arvo } from 'next/font/google'
import LaunchIcon from '@mui/icons-material/Launch'
import Link from 'next/link'
import React, { forwardRef } from 'react'

const arvoRegular = Arvo({ subsets: ['latin'], weight: '400', style:'italic' });

function ExperienceCard( { company, role, date, description, binNum, link }, ref ){
    return (
    <div ref={ref} className={arvoRegular.className}>
        <div className='relative h-80 p-6 m-4 bg-black bg-opacity-50 opacity-80 rounded-2xl border-4 border-white/0 hover:border-white/80 hover:scale-105 transition-all duration-200'>
            <div className='absolute inset-x-0 top-1.5 flex flex-row items-center justify-center'>
                {[...binNum].map((digit, i) => (digit == 1) ? <div key={'bit' + i} className='p-1 m-1 bg-white bg-opacity-100 rounded-2xl'></div> : <div key={'bit' + i} className='p-1 m-1 bg-white bg-opacity-20 rounded-2xl'></div>)}
            </div>
            <div className='flex flex-row justify-center items-center text-center text-xl'>
                <div className='p-1 m-1'>{role}</div>
                <div className='p-1 m-1'>@</div>
                {(link !== undefined) ? <Link href={link} target='_blank' className='flex flex-row justify-center items-center bg-white bg-opacity-0 border-2 rounded-lg p-1 m-1 hover:bg-opacity-30 transition-all'>
                    <div className='m-0.5'>{company}</div>
                    <LaunchIcon className='w-6 h-6 m-0.5'/>
                </Link> : 
                <div className='flex flex-row justify-center items-center bg-white bg-opacity-0 border-2 rounded-lg p-1 m-1 hover:bg-opacity-30 transition-all'>
                    <div className='m-0.5'>{company}</div>
                </div>}
            </div>
            <div className='text-center'>{date}</div>
            <div>{description}</div>
        </div>
    </div>
    );
}

export default forwardRef(ExperienceCard);