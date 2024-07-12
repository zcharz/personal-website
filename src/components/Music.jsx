import Link from 'next/link'

export default function Music () {
    return (
        <div id='music' 
        className='flex flex-row justify-center py-24 bg-slate-100 space-x-10'>                
            <div className='flex flex-row w-3/6 space-x-5'>
                <div className='flex flex-col space-y-3 text-slate-800 text-right w-3/6'>

                    <div className='flex flex-row justify-end items-center space-x-3'>
                        <div className='text-3xl font-semibold'>music</div>
                        <div className='h-10 bg-slate-800 w-2'></div>   
                    </div>


                    <div>
                        In my free time, I play the saxophone 
                        and produce music under the alias
                        <span className='font-bold'> czm.</span> 
                    </div>

                    <div>
                        Check out my latest lo-fi inspired song titled 
                        <span className='font-bold'> snooze </span>
                         and more of my music over on my&nbsp;
                        <Link className='text-teal-600 hover:text-rose-400 duration-200'
                        href='https://www.youtube.com/@czmusic_' target='_blank'>Youtube</Link>!
                    </div>

                </div>

                <iframe className='aspect-video '
                    src='https://www.youtube.com/embed/exlHo5IazSs?si=jqhHGi6Uxd7a8P26&amp;start=32' 
                    title='YouTube video player' 
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share'/>
            </div>
        </div>
    );
}