import { Arvo } from 'next/font/google'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link'
import React, { forwardRef } from 'react'

const arvoRegular = Arvo({ subsets: ['latin'], weight: '400', style:'italic' });

function ProjectCard( { title, description, binNum, linkToGitHub, linkToDeployment }, ref ){
    return (
    <div className='w-1/2'>
        <div ref={ref} className={arvoRegular.className}>
            <div className='relative h-80 p-6 m-4 bg-black bg-opacity-40 rounded-2xl border-4 border-white/0 hover:border-[#4076b3] hover:scale-105 transition-all duration-200'>
                <div className='absolute inset-x-0 top-1.5 flex flex-row items-center justify-center'>
                    {[...binNum].map((digit, i) => (digit == 1) ? <div key={'bit' + i} className='p-1 m-1 bg-white bg-opacity-100 rounded-2xl'></div> : <div key={'bit' + i} className='p-1 m-1 bg-white bg-opacity-20 rounded-2xl'></div>)}
                </div>
                {(linkToDeployment !== undefined) ? <Link href={linkToDeployment} target='_blank' className='absolute top-2 right-2 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                    <LaunchIcon className='w-6 h-6'/>
                </Link> : ''}
                <div className='text-center text-xl'>{title}</div>
                <div>{description}</div>
                {(linkToGitHub !== undefined) ? <Link href={linkToGitHub} target='_blank' className='absolute left-2 bottom-2 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                    <GitHubIcon className='w-6 h-6'/>
                </Link> : ''}
            </div>
        </div>
    </div>
    );
}

export default forwardRef(ProjectCard);