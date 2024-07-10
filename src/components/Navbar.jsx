'use client'

export default function Navbar () {

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className='fixed pl-8 pt-10 flex flex-row font-bold space-x-4'>
            <div className='bg-slate-800 w-2'></div>

            <div className='flex flex-col text-xl space-y-2 text-slate-800'>
                <button onClick={() => scrollTo('charz')} className='text-left hover:text-slate-100 duration-200'>charz</button>
                <button onClick={() => scrollTo('experience')} className='text-left hover:text-slate-100 duration-200'>experience</button>
                <button onClick={() => scrollTo('projects')} className='text-left hover:text-slate-100 duration-200'>projects</button>
                <button onClick={() => scrollTo('music')} className='text-left hover:text-slate-100 duration-200'>music</button>
                <button onClick={() => scrollTo('contact')} className='text-left hover:text-slate-100 duration-200'>contact</button>
            </div>
        </div>
    );
}
