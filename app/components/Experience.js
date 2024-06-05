import { Arvo } from 'next/font/google'
import ExperienceCard from './ExperienceCard.js'
import React, { forwardRef } from 'react'

const arvoRegular = Arvo({ subsets: ['latin'], weight: '400', style:'italic' });

function Experience(props, ref){
    return (
    <div ref={ref} className={arvoRegular.className}>
        <div className='group my-8 w-[90vw]'>
            <div className='bg-gradient-to-r from-transparent via-[#4076b3] to-transparent h-2'></div>
            <div className='flex flex-col items-center justify-center bg-gradient-to-r from-transparent via-[#4076b3]/30 to-transparent'>
                <div className='flex flex-row items-center justify-center'>
                    <div className='border-[3px] p-0.5 px-8 group-hover:px-16 transition-all duration-300'></div>
                    <div className='text-5xl p-4'>Experience</div>
                    <div className='border-[3px] p-0.5 px-8 group-hover:px-16 transition-all duration-300'></div>
                </div>
                <div className='relative flex flex-col items-center justify-start'>
                    <ExperienceCard fit='true' company='Klaviyo' role='Front End Software Engineering Intern' date='Summer 2024 (Current)' link='https://www.klaviyo.com/' binNum='0001' description=''/>
                    <ExperienceCard company='Concord Group Insurance' role='Application Development Intern' date='Summer 2023' link='https://www.concordgroupinsurance.com/' binNum='0010' description='At Concord Group, I collaborated with other developers on various projects and assignments related to the Policy Administration System (PAS), the frontend system that takes in policy information.  I wrote extensive technical specification documents in order to clearly communicate solutions, and I participated in daily stand-up meetings as part of the Agile/Scrum development process.  I also received training in JIRA/Confluence.'/>
                </div>
            </div>
            <div className='bg-gradient-to-r from-transparent via-[#4076b3] to-transparent h-2'></div>
        </div>
    </div>
    );
}

export default forwardRef(Experience);