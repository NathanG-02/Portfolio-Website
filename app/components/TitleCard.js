import { Arvo } from 'next/font/google'

const arvoRegular = Arvo({ subsets: ['latin'], weight: '400', style:'italic' });
const arvoBold = Arvo({ subsets: ['latin'], weight: '700', style:'italic' });

export default function TitleCard(){
    return (
    <div className={arvoBold.className}>
        <div className='p-6 m-10 mt-64 mb-36'>
            <div className='text-8xl text-center p-3'>Hi, I'm</div>
            <div className='text-6xl text-center p-3'>Nathan Grabowski</div>
            <div className={arvoRegular.className}>
                <div className='text-xl text-center'>Software engineer, app developer, motion designer</div>
            </div>
        </div>
    </div>
    );
}