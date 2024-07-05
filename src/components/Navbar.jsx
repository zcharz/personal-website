const sections = ["charz", "experience", "projects", "music", "contact"]


export default function Navbar () {
    return (
        <div className="fixed pl-10 pt-10">
            <div className="flex flex-col">
                {sections.map((item) => (
                    <button key={item} className="hover:text-rose-400 text-left"> {item} </button>
                ))}
            </div>
        </div>
    );
}