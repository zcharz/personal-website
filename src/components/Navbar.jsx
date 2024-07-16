'use client'

const sections = ['charz', 'experience', 'projects', 'music', 'contact']

export default function Navbar () {

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className='fixed pl-8 pt-8 flex flex-row font-bold space-x-4'>
            <div className='bg-slate-50 w-2 drop-shadow-lg'></div>

            <div className='flex flex-col text-xl space-y-2 text-slate-100 drop-shadow-lg'>
                <button onClick={() => scrollTo('charz')} className='text-left  hover:text-emerald-400 hover:drop-shadow-lg duration-200'>charz</button>
                <button onClick={() => scrollTo('experience')} className='text-left hover:text-emerald-400 hover:drop-shadow-lg duration-200'>experience</button>
                <button onClick={() => scrollTo('projects')} className='text-left hover:text-emerald-400 hover:drop-shadow-lg duration-200'>projects</button>
                <button onClick={() => scrollTo('music')} className='text-left hover:text-emerald-400 hover:drop-shadow-lg lduration-200'>music</button>
                <button onClick={() => scrollTo('contact')} className='text-left hover:text-emerald-400 hover:drop-shadow-lg duration-200'>contact</button>
                {/* {sections.map((item) => (
                    <button onClick={()=> scrollTo(String({item}))} key={item} className='text-left hover:text-slate-50 duration-200'>{item}</button>
                ))} */}
            </div>
        </div>
    );
}
