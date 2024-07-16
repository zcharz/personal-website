import Link from 'next/link'

export default function Music () {
    return (
        <div id='music'
        className='flex justify-center py-20 bg-slate-700 space-x-10'>
            <div className='flex flex-col space-y-5 w-3/6 drop-shadow-lg'>

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
                    referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>       


                    <div className='flex flex-col space-y-2 bg-slate-800 text-slate-50 p-4 rounded-md w-2/6'>
                        <div>
                            In my free time, I enjoy playing the saxophone 
                            and producing music under the alias0
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
            </div>
        </div>
    );
}