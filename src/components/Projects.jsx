import Link from 'next/link'

export default function Projects () {
    return (
        <div id='projects' 
        className='flex justify-center py-24 bg-slate-50 space-x-10'>
            <div className='flex flex-col space-y-3 text-slate-800 w-3/6'>

                <div className='flex flex-row justify-start items-center space-x-3'>
                    <div className='h-10 bg-slate-800 w-2'></div> 
                    <div className='text-4xl font-semibold'>projects</div>  
                </div>


                <div className='flex flex-row space-x-10'>
                    <div className='flex flex-col space-y-5'>
                        <div className='bg-slate-800 h-10 w-80'></div>
                        <div className='bg-slate-800 h-10 w-80'></div>
                        <div className='bg-slate-800 h-10 w-80'></div>
                        <div className='bg-slate-800 h-10 w-80'></div>
                    </div>

                    <div className='flex flex-col space-y-5'>
                        <div className='bg-slate-800 h-10 w-80'></div>
                        <div className='bg-slate-800 h-10 w-80'></div>
                        <div className='bg-slate-800 h-10 w-80'></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}