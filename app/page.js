import Image from 'next/image'
import TitleCard from './components/TitleCard.js'
import SectionIndicator from './components/SectionIndicator.js'
import Projects from './components/Projects.js'

export default function Home() {
  return (
    <main>
      <SectionIndicator/>
      <div className="flex min-h-screen flex-col items-center justify-center text-white">
        <TitleCard/>
        <Projects/>
      </div>
    </main>
  )
}