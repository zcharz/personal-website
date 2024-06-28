import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Introduction from "@/components/Introduction";


export const metadata = {
  title: 'Charlie Zhao',
}

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Introduction/>
      <About/>
      <Projects/>
      <Experience/>
      <Music/>
      <Contact/>
    </main>
  );
}
