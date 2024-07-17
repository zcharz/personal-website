import Link from 'next/link'

export default function Music () {
    return (
        <div id='music'
        className='flex justify-center py-16 bg-slate-700 space-x-10'>
            <div className='flex flex-col space-y-4 w-3/6 drop-shadow-lg'>

                <div className='flex flex-row justify-start items-center space-x-3 text-slate-100'>
                    <div className='h-10 bg-slate-100 w-2'></div> 
                    <div className='text-3xl font-semibold'>music</div>  
                </div>


                <div className='flex flex-row space-x-5'>
                    <iframe width='560' height='315' 
                    className='bg-slate-800 w-4/6 flex justify-center rounded-md'
                    src='https://www.youtube.com/embed/exlHo5IazSs?si=MzTY5Q7yZwJYNGAP&amp;controls=0'
                    frameborder='0' 
                    allow='clipboard-write; encrypted-media; web-share' 
                    referrerpolicy='strict-origin-when-cross-origin' allowfullscreen/>    


                    <div className='flex flex-col space-y-3 bg-slate-800 text-slate-50 p-5 rounded-md w-2/6'>
                        <div>
                            In my free time, I enjoy producing music under the alias&nbsp;
                            <Link className='text-emerald-400 font-semibold hover:text-rose-400 duration-200'
                            href='https://www.youtube.com/@czmusic_' target='_blank'>czm.</Link>
                        </div>

                        <div>
                            Take a listen to my latest lo-fi inspired song titled&nbsp;
                            <Link className='text-emerald-400 font-semibold hover:text-rose-400 duration-200'
                            href='https://www.youtube.com/watch?v=exlHo5IazSs' target='_blank'>snooze</Link>
                        </div>

                        <div>
                            Check out my&nbsp;
                            <Link className='text-emerald-400 font-semibold hover:text-rose-400 duration-200'
                            href='https://www.youtube.com/@czmusic_' target='_blank'>Youtube</Link>
                            &nbsp;for more of my music!
                        </div>
                    </div>

                    
                        
                </div>
            </div>
        </div>
    );
}