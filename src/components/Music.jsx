import Link from 'next/link'

export default function Music () {
    return (
        <div id='music'
        className='flex justify-center py-16 bg-slate-700 space-x-10'>
            <div className='flex flex-col space-y-4 w-3/6 drop-shadow-lg'>

                <div className='flex flex-row justify-start items-center space-x-3 text-slate-100'>
                    {/* <div className='h-10 bg-slate-100 w-2'></div>  */}
                    <div className='text-3xl font-semibold'>music_</div>  
                </div>


                <div className='flex flex-row space-x-5'>
                    <iframe width='560' height='315' 
                    className='bg-slate-800 w-4/6 flex justify-center rounded-md hover:shadow-sm hover:shadow-emerald-400 duration-100'
                    src='https://www.youtube.com/embed/exlHo5IazSs?si=MzTY5Q7yZwJYNGAP&amp;controls=1'
                    allow='clipboard-write; encrypted-media; web-share' 
                    referrerPolicy='strict-origin-when-cross-origin' allowFullScreen/>    


                    <div className='flex flex-col space-y-3 bg-slate-800 text-slate-50 p-5 rounded-md w-2/6 hover:shadow-sm hover:shadow-emerald-400 duration-100'>
                        <div>
                            In my free time, I enjoy producing music under the alias&nbsp;
                            <Link className='text-emerald-400 font-semibold hover:text-rose-400 duration-200'
                            href='https://www.youtube.com/@just_cz' target='_blank'>cz.</Link>
                        </div>
                        
                        <div>
                            Take a listen to my lo-fi inspired song —&nbsp;
                            <Link className='text-emerald-400 font-semibold hover:text-rose-400 duration-200'
                            href='https://www.youtube.com/watch?v=exlHo5IazSs' target='_blank'>snooze</Link>
                        </div>

                        <div>
                            More music and related content coming soon!
                        </div>
                    </div>

                    
                        
                </div>
            </div>
        </div>
    );
}