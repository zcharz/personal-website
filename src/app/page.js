import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Music from "@/components/Music";
import Contact from "@/components/Contact";


export const metadata = {
  title: 'Charlie Zhao',
}

export default function Home() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Projects/>
      <Experience/>
      {/* <Music/> */}
      <Contact/>
    </main>
  );
}
