import { Arvo } from 'next/font/google'
import ProjectCard from './ProjectCard.js'
import React, { forwardRef, useRef } from 'react'
import Image from 'next/image'

const arvoRegular = Arvo({ subsets: ['latin'], weight: '400', style:'italic' });

function Projects(props, ref){

    return (
    <div ref={ref} className={arvoRegular.className}>
        <div className='group my-8 w-[90vw]'>
            <div className='bg-gradient-to-r from-transparent via-[#4076b3] to-transparent h-2'></div>
            <div className='flex flex-col items-center justify-center bg-gradient-to-r from-transparent via-[#4076b3]/30 to-transparent'>
                <div className='flex flex-row items-center justify-center'>
                    <div className='border-[3px] p-0.5 px-8 group-hover:px-16 transition-all duration-300'></div>
                    <div className='text-5xl p-4'>Projects</div>
                    <div className='border-[3px] p-0.5 px-8 group-hover:px-16 transition-all duration-300'></div>
                </div>
                <div className='flex flex-col items-center justify-start w-full mb-5'>
                    <div className='flex flex-row items-center justify-center'>
                        <ProjectCard binNum='0001' flutter={true} googlecloud={true} linkToGitHub='https://github.com/NathanG-02/HackUMass-XI' title='UMass GeoGuessr' description='A web-based game built using Flutter and Dart in which players can test their knowledge of the UMass Amherst campus.  This project was built as a part of HackUMass, a popular 36-hour hackathon.  We won "Best Use of Google Cloud" for our use of the Google Maps API.'/>
                        <ProjectCard binNum='0010' react={true} nextjs={true} mongodb={true} mui={true} linkToDeployment='https://cwanalytics.vercel.app/member-stats' linkToGitHub='https://github.com/massbchou/CS320Team8' title='Campuswire Analytics Dashboard' description="An analytics dashboard built for a popular class forum website called Campuswire with the aim of giving course staff the data analytics they need to efficiently monitor and manage their forum.  The app includes an 'At-a-glance' Overview page that shows all of the relevant information that a member of the course staff might want to see immediately as they enter (unanswered questions, top posts, trending topics, most active users, and forum activity).  The app also includes a page for course staff to use to view activity statistics for individual members in aggregate and over time.  I designed and implemented a caching system that resulted in a significant performance increase."/>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <ProjectCard binNum='0011' react={true} nextjs={true} linkToGitHub='https://github.com/NathanG-02/Portfolio-Website' title='Portfolio Website' description="You're looking at it! This is a showcase of all of my projects and experience.  I plan to continue to add to and update this frequently."/>
                        <ProjectCard binNum='0100' threejs={true} title='Ray Tracing Implementation' description="An implementation of a ray tracer that includes ray-shape intersection checking, a spot light implementation as well as calculations of ambient, diffuse, and specular shading contributions.  I utilized the Three.js graphics library."/>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <ProjectCard binNum='0101' title='Statistics Bot' description="A TCP/IP client program in C that utilizes various system calls to create a network socket, connect remotely to a server, and send and receive data from the server.  I implemented functionality to receive various statistics problems from the server, do the computation, and send back a properly formatted answer."/>
                        <ProjectCard binNum='0110' title='JavaScript Interpreter' description="A JavaScript interpreter that parses sequences of strings as if they were JavaScript statements and expressions in a program.  I implemented functionality to handle variable declaration and assignment while maintaining proper scoping."/>
                    </div>
                </div>
                {/*<button className='absolute top-[48%] right-5 bg-black bg-opacity-50 p-2 border-white/0 border-4 rounded-full hover:border-white/80 hover:scale-125 transition-all' onClick={() => goToProject(firstProject)}>
                    <div className='pointer-events-none'>
                        <Image src='/Next Projects Right.png' alt='next projects right image' width={40} height={40}/>
                    </div>
                </button>
                <button className='absolute top-[48%] left-5 bg-black bg-opacity-50 p-2 border-white/0 border-4 rounded-full hover:border-white/80 hover:scale-125 transition-all' onClick={() => goToProject(firstProject)}>
                    <div className='pointer-events-none'>
                        <Image src='/Next Projects Left.png' alt='next projects left image' width={40} height={40}/>
                    </div>
                </button>*/}
            </div>
            <div className='bg-gradient-to-r from-transparent via-[#4076b3] to-transparent h-2'></div>
        </div>
    </div>
    );
}

export default forwardRef(Projects);