export default function Navbar () {
    return (
        <div className="fixed pl-10 pt-10">
            <div className="flex flex-col font-bold space-y-2 text-xl">
                <button key="charz" className="text-left hover:text-rose-400 duration-150">charz</button>
                <button key="experience" className="text-left hover:text-rose-400 duration-150">experience</button>
                <button key="projects" className="text-left hover:text-rose-400 duration-150">projects</button>
                <button key="music" className="text-left hover:text-rose-400 duration-150">music</button>
                <button key="contact" className="text-left hover:text-rose-400 duration-150">contact</button>
            </div>
        </div>
    );
}