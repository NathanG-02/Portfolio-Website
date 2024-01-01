import { Arvo } from 'next/font/google'
import ProjectCard from './ProjectCard.js'

const arvoRegular = Arvo({ subsets: ['latin'], weight: '400', style:'italic' });

export default function Projects(){
    return (
    <div className={arvoRegular.className}>
        <div className='group m-8'>
            <div className='bg-gradient-to-r from-transparent via-black/100 to-transparent h-2 w-screen'></div>
            <div className='flex flex-col items-center justify-center bg-gradient-to-r from-transparent via-black/50 to-transparent w-screen'>
                <div className='flex flex-row items-center justify-center'>
                    <div className='border-[3px] p-0.5 px-8 group-hover:px-16 transition-all duration-300'></div>
                    <div className='text-5xl p-4'>Projects</div>
                    <div className='border-[3px] p-0.5 px-8 group-hover:px-16 transition-all duration-300'></div>
                </div>
                <div className='flex flex-row items-center justify-start w-screen h-[21rem]'>
                    <ProjectCard binNum='0001' link='https://github.com/NathanG-02/HackUMass-XI' title='UMass GeoGuessr' description='A web-based game built using Flutter and Dart in which players can test their knowledge of the UMass Amherst campus.  This project was built as a part of HackUMass, a popular 36-hour hackathon.  We won "Best Use of Google Cloud" for our use of the Google Maps API.'/>
                    <ProjectCard binNum='0010' link='https://github.com/massbchou/CS320Team8' title='Campuswire Analytics' description='An analytics dashboard built for a popular class forum website called Campuswire with the aim of giving course staff the data analytics they need to efficiently monitor and manage their forum.'/>
                    <ProjectCard binNum='0011' link='https://github.com/NathanG-02/Portfolio-Website' title='Portfolio Website' description="You're looking at it! This is a showcase of all of my projects and experience.  I plan to continue to add to and update this frequently."/>
                    <ProjectCard binNum='0100' link='' title='Statistics Bot' description="A TCP/IP client program in C that utilizes various system calls to create a network socket, connect remotely to a server, and send and receive data from the server.  I implemented functionality to receive various statistics problems from the server, do the computation, and send back a properly formatted answer."/>
                    <ProjectCard binNum='0101' link='' title='JavaScript Interpreter' description="A JavaScript interpreter that parses sequences of strings as if they were JavaScript statements and expressions in a program.  I implemented functionality to handle variable declaration and assignment while maintaining proper scoping."/>
                </div>
            </div>
            <div className='bg-gradient-to-r from-transparent via-black/100 to-transparent h-2 w-screen'></div>
        </div>
    </div>
    );
}