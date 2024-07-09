import Link from 'next/link'

export default function Music () {
    return (
        <div className='flex flex-row justify-center py-11 bg-slate-100 space-x-10'>

            <div className='flex flex-col space-y-2 text-slate-800 w-96'>
                <div className='text-4xl font-semibold'>music</div>

                <div>
                    In my free time, I like to play the saxophone 
                    and produce electronic music under the alias
                    <span className='font-bold'> czm.</span> 
                </div>

                <div>
                    Check out my latest single titled 
                    <span className='font-bold'> snooze </span>
                    in the embedded player, and more of my music over on my&nbsp;
                    <Link className='text-cyan-600 hover:text-cyan-400 duration-200'
                    href='https://www.youtube.com/@czmusic_' target='_blank'>Youtube</Link>!

                </div>
            </div>

            <div>
                <iframe className='aspect-video'
                src='https://www.youtube.com/embed/exlHo5IazSs?si=jqhHGi6Uxd7a8P26&amp;start=32' 
                title='YouTube video player' 
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share'/>
            </div>
        </div>
    );
}