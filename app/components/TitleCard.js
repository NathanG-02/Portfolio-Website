import { Arvo } from 'next/font/google'
import React, { forwardRef } from 'react'
import Link from 'next/link'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import DownloadIcon from '@mui/icons-material/Download'
import Image from 'next/image'

const arvoRegular = Arvo({ subsets: ['latin'], weight: '400', style:'italic' });
const arvoBold = Arvo({ subsets: ['latin'], weight: '700', style:'italic' });

function TitleCard(props, ref){
    return (
    <div id='TitleCard' ref={ref} className={arvoBold.className}>
        <div className='p-56 mx-96 flex flex-col items-center justify-center'>
            <div className='text-8xl text-center p-3'>Hi, I&apos;m</div>
            <div className='relative text-6xl text-center p-3 m-2'>
                <div className='absolute top-3 left-14 scale-125 pointer-events-none'>
                    <Image src='/Title Outline 1.png' alt='border image 1' width={600} height={200}/>
                </div>
                <div>Nathan Grabowski</div>
                <div className='absolute bottom-3 right-14 scale-125 pointer-events-none'>
                    <Image src='/Title Outline 2.png' alt='border image 2' width={600} height={200}/>
                </div>
            </div>
            <div className={arvoRegular.className}>
                <div className='text-xl text-center'>Software engineer, app developer, motion designer</div>
            </div>
            <div className='flex flex-row items-center justify-center m-3'>
                <Link href='https://www.linkedin.com/in/nathan-g02/' target='_blank' className='mx-1 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                    <LinkedInIcon className='w-9 h-9'/>
                </Link>
                <Link href='https://github.com/NathanG-02' target='_blank' className='mx-1 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                    <GitHubIcon className='w-9 h-9'/>
                </Link>
                <Link href='https://drive.google.com/file/d/1UBX7dPFj5WlrUQTx_AAoBkQm79-vFsxk/view?usp=sharing' target='_blank' className='border-2 mx-2 bg-opacity-0 bg-white rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                    <div className='flex flex-row items-center justify-center'>
                        <div className=''>
                            <div className={arvoRegular.className}>
                                <div className='text-lg text-center'>Resume</div>
                            </div>
                        </div>
                        <DownloadIcon className='w-7 h-7'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    );
}

export default forwardRef(TitleCard);