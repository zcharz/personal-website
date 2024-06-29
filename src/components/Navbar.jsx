const sections = ["charz", "projects", "experience", "contact"]


export default function Navbar () {
    return (
        <div className="fixed">
            <div className="container flex flex-col flex-start">
                {sections.map((item) => (
                    <button key={item} className="hover:text-rose-400 text-left"> {item} </button>
                ))}
            </div>
        </div>
    );
}