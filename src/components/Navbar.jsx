// export default function Navbar () {
//     return (
//         <div className='fixed pl-10 pt-10 flex flex-col font-bold space-y-2 text-xl text-slate-800'>
            
//             <button key='charz' className='text-left hover:text-slate-100 duration-200'>charz</button>
//             <button key='experience' className='text-left hover:text-slate-100 duration-200'>experience</button>
//             <button key='projects' className='text-left hover:text-slate-100 duration-200'>projects</button>
//             <button key='music' className='text-left hover:text-slate-100 duration-200'>music</button>
//             <button key='contact' className='text-left hover:text-slate-100 duration-200'>contact</button>
//         </div>
//     );
// }


export default function Navbar () {
    return (
        <div className='fixed pl-8 pt-10 flex flex-row font-bold space-x-4'>
            <div className='bg-slate-800 w-2'></div>

            <div className='flex flex-col text-xl space-y-2 text-slate-800'>
                <button key='charz' className='text-left hover:text-slate-100 duration-200'>charz</button>
                <button key='experience' className='text-left hover:text-slate-100 duration-200'>experience</button>
                <button key='projects' className='text-left hover:text-slate-100 duration-200'>projects</button>
                <button key='music' className='text-left hover:text-slate-100 duration-200'>music</button>
                <button key='contact' className='text-left hover:text-slate-100 duration-200'>contact</button>
            </div>
        </div>
    );
}
