import NavBar from './components/navbar/NavBar.tsx';
import Hero from './components/hero/Hero.tsx';
import Technologies from './components/technologies/Technologies.tsx';
import Projects from './components/projects/Projects.tsx';
import Experience from './components/experience/Experience.tsx';
import Contact from './components/contact/Contact.tsx';

function App() {
  
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <NavBar />
          <Hero />
          <Technologies />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
