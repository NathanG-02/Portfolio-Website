import { Arvo } from 'next/font/google'
import LaunchIcon from '@mui/icons-material/Launch'
import Link from 'next/link'

const arvoRegular = Arvo({ subsets: ['latin'], weight: '400', style:'italic' });

export default function Projects( { binNum, link, title, description } ){
    return (
    <div className={arvoRegular.className}>
        <div className='relative w-96 h-72 p-6 ml-8 bg-black bg-opacity-50 opacity-80 rounded-2xl border-4 border-white/0 hover:border-white/80 hover:scale-105 transition-all duration-200'>
            <div className='absolute inset-x-0 top-1.5 flex flex-row items-center justify-center'>
                {[...binNum].map((digit, i) => (digit == 1) ? <div key={'bit' + i} className='p-1 m-1 bg-white bg-opacity-100 rounded-2xl'></div> : <div key={'bit' + i} className='p-1 m-1 bg-white bg-opacity-20 rounded-2xl'></div>)}
            </div>
            <Link href={link} target='_blank' className='absolute top-2 right-2 bg-white bg-opacity-0 rounded-lg p-1.5 hover:bg-opacity-30 transition-all'>
                <LaunchIcon className='w-6 h-6'/>
            </Link>
            <div className='text-center text-xl'>{title}</div>
            <div>{description}</div>
        </div>
    </div>
    );
}