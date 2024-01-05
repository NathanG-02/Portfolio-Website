"use client"
import TitleCard from './components/TitleCard.js'
import SectionIndicator from './components/SectionIndicator.js'
import Projects from './components/Projects.js'
import React, { useRef } from 'react';

export default function Home() {

  const title = useRef(null);
  const projects = useRef(null);
  const experience = useRef(null);
  const aboutme = useRef(null);
  const contact = useRef(null);

  return (
    <main>
      <SectionIndicator references={{title, projects, experience, aboutme, contact}}/>
      <div className="flex min-h-screen flex-col items-center justify-center text-white">
        <TitleCard ref={title}/>
        <Projects ref={projects}/>
        <Projects ref={experience}/>
        <Projects ref={aboutme}/>
        <Projects ref={contact}/>
      </div>
    </main>
  )
}