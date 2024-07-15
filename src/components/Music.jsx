import Link from 'next/link'

export default function Music () {
    return (
        <div id='music'
        className='flex justify-center py-24 bg-slate-100 space-x-10'>
            <div className='flex flex-row space-x-5 w-3/6'>

                <div className='flex flex-col space-y-5 w-3/6'>

                    <div className='flex flex-row justify-end items-center space-x-3 text-slate-800'>
                        <div className='text-3xl font-semibold'>music</div>  
                        <div className='h-10 bg-slate-800 w-2'></div> 
                    </div>

                    <div className='flex flex-col space-y-2 text-right bg-slate-800 text-slate-50 p-4 rounded-md'>
                        <div>
                            In my free time, I enjoy playing the saxophone 
                            and producing music under the alias
                            <span className='font-bold'> czm.</span> 
                        </div>

                        <div>
                            Check out my latest lo-fi inspired song titled 
                            <span className='font-bold'> snooze</span>
                            , and more of my music over on my&nbsp;
                            <Link className='text-teal-400 hover:text-rose-400 hover:drop-shadow-lg duration-200'
                            href='https://www.youtube.com/@czmusic_' target='_blank'>Youtube</Link>!
                        </div>
                    </div>

                        
                </div>

                <div className='bg-slate-800 w-3/6 flex justify-center'>
                        <iframe className=''
                        src='https://www.youtube.com/embed/exlHo5IazSs?si=jqhHGi6Uxd7a8P26&amp;start=32' 
                        title='YouTube video player' 
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture; web-share'/>
                    </div>
                
            </div>
        </div>
    );
}