import { Arvo } from 'next/font/google'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link'
import React, { forwardRef } from 'react'
import Image from 'next/image'

const arvoRegular = Arvo({ subsets: ['latin'], weight: '400', style:'italic' });

function ProjectCard( { title, description, binNum, linkToGitHub, linkToDeployment, react, nextjs, mongodb, mui, flutter, googlecloud, threejs }, ref ){
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
                <div className='absolute inset-x-0 bottom-3.5 width-1/2 flex flex-row items-center justify-center'>
                    {(react !== undefined) ? <Link href='https://react.dev/' target='_blank' className='mx-1 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                        <Image src='/React Logo.png' alt='React Logo' width={35} height={35}/>
                    </Link>: ''}
                    {(nextjs !== undefined) ? <Link href='https://nextjs.org/' target='_blank' className='mx-1 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                        <Image src='/Nextjs Logo.png' alt='Next.js Logo' width={85} height={50}/>
                    </Link>: ''}
                    {(mongodb !== undefined) ? <Link href='https://www.mongodb.com/' target='_blank' className='mx-1 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                        <Image src='/Mongo.png' alt='MongoDB Logo' width={95} height={50}/>
                    </Link>: ''}
                    {(mui !== undefined) ? <Link href='https://mui.com/' target='_blank' className='mx-1 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                        <Image src='/MUI Logo.png' alt='MaterialUI Logo' width={35} height={35}/>
                    </Link>: ''}
                    {(flutter !== undefined) ? <Link href='https://flutter.dev/' target='_blank' className='mx-1 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                        <Image src='/Flutter.png' alt='Flutter Logo' width={90} height={35}/>
                    </Link>: ''}
                    {(googlecloud !== undefined) ? <Link href='https://cloud.google.com/' target='_blank' className='mx-1 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                        <Image src='/GoogleCloud Logo.png' alt='Google Cloud Logo' width={35} height={35}/>
                    </Link>: ''}
                    {(threejs !== undefined) ? <Link href='https://threejs.org/' target='_blank' className='mx-1 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                        <Image src='/Threejs Logo.png' alt='Three.js Logo' width={90} height={35}/>
                    </Link>: ''}
                </div>
                {(linkToGitHub !== undefined) ? <Link href={linkToGitHub} target='_blank' className='absolute left-2 bottom-2 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                    <GitHubIcon className='w-6 h-6'/>
                </Link> : ''}
            </div>
        </div>
    </div>
    );
}

export default forwardRef(ProjectCard);