"use client"
import React, { useState } from 'react';

export default function SectionIndicator({ references }){

    const sections = ['title', 'projects', 'experience', 'aboutme', 'contact'];

    const [selectedIndex, setSelectedIndex] = useState(0);

    const goToSection = function(sectionRef, index){
        setSelectedIndex(index);
        sectionRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
    <div className='fixed right-0 top-[40vh] m-5'>
        <div className='flex flex-col items-center justify-between bg-black bg-opacity-40 rounded-3xl p-2.5 h-48'>
            {sections.map((section, index) => <button key={section + ' section'} onClick={() => goToSection(references[section], index)} className={((selectedIndex === index) ? 'bg-opacity-35 hover:bg-opacity-75 ' : 'bg-opacity-15 hover:bg-opacity-50 ') + 'w-3 h-4 py-3 bg-white rounded-2xl hover:scale-125 transition-all'}></button>)}
        </div>
    </div>
    );
}