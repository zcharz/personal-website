import Link from 'next/link'
import { ProjectItems } from './ProjectItems';

export default function Projects () {
    return (
        <div id='projects' 
        className='flex justify-center py-16 bg-slate-800 space-x-10'>
            <div className='flex flex-col space-y-4 w-3/6 drop-shadow-lg'>

                <div className='flex flex-row justify-start items-center text-slate-100 space-x-3'>
                    <div className='h-10 bg-slate-100 w-2'></div> 
                    <div className='text-3xl font-semibold'>projects</div>  
                </div>


                <div className='flex flex-row space-x-5 text-slate-100'>
                    <div className='flex flex-col space-y-5 w-1/2'>
                        <Link className='flex justify-center items-center bg-slate-700 h-32 rounded-md hover:shadow-sm hover:shadow-emerald-400 duration-100'
                        href='' target='_blank'>project</Link>
                        <div className='bg-slate-700 h-32 rounded-md hover:shadow-sm hover:shadow-emerald-400 duration-100'></div>
                        <div className='bg-slate-700 h-32 rounded-md hover:shadow-sm hover:shadow-emerald-400 duration-100'></div>
                    </div>

                    <div className='flex flex-col space-y-5 w-1/2'>
                        <div className='bg-slate-700 h-32 rounded-md hover:shadow-sm hover:shadow-emerald-400 duration-100'></div>
                        <div className='bg-slate-700 h-32 rounded-md hover:shadow-sm hover:shadow-emerald-400 duration-100'></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}