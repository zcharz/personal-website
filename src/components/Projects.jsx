import Link from 'next/link'
import { ProjectItems } from './ProjectItems';

import Image from 'next/image';
import { FaGithub } from "react-icons/fa";

const imgMap = {

}


export default function Projects () {
    return (
        <div id='projects' 
        className='flex justify-center py-16 bg-slate-800 space-x-10'>
            <div className='flex flex-col space-y-4 w-3/6 drop-shadow-lg'>

                <div className='flex flex-row justify-start items-center text-slate-100 space-x-3'>
                    <div className='h-10 bg-slate-100 w-2'></div> 
                    <div className='text-3xl font-semibold'>projects</div>  
                </div>

                <div className='flex flex-wrap justify-start text-slate-100 space-y-5'>
                    {ProjectItems.map((item) => (      
                        <Link key={item.name} href={item.link} target='_blank'    
                        className='flex flex-col justify-start items-start p-5 bg-slate-700 space-y-3 mr-5 rounded-md hover:shadow-sm hover:shadow-emerald-400 duration-100'>
                            {/* <Image src={imgMap[item.img]} width={300} height={200} 
                            className='rounded-lg'/> */}
                            <div className='font-bold text-xl text-rose-400'>{item.name}</div>  
                            <div>{item.desc}</div>

                            <div className='flex flex-row space-x-3'>
                                <div className='text-emerald-400'>○</div>
                                <div>{item.skills}</div>
                            </div>
                        </Link>                                        
                    ))}
                </div>
                
            </div>
        </div>
    );
}