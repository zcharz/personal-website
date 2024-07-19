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
                        <div key={item.name}  
                        className='flex flex-col justify-start items-start p-5 bg-slate-700 space-y-3 rounded-md hover:shadow-sm hover:shadow-rose-400 duration-100'>
                            {/* <Image src={imgMap[item.img]} width={300} height={200} 
                            className='rounded-lg'/> */}
                            <div className='flex flex-row space-x-2 items-center'>
                                <div className='font-bold text-xl text-rose-400'>{item.name}</div>  
                                <Link href={item.link} target='_blank'>
                                    <FaGithub size={23} className='hover:text-emerald-400 duration-200'/>
                                </Link>
                            </div>
                            
                            <div className=''>{item.desc}</div>

                            <div className='flex flex-row space-x-2'>
                                <div className='text-emerald-400'>○</div>
                                <div>{separateElements(item.skills)}</div>
                            </div>
                        </div>                                        
                    ))}
                </div>
                
            </div>
        </div>
    );
}

function separateElements(arr) {
    if (arr.length <= 1) return arr.join();
    const elements = arr.slice(0, -1);
    return elements.join(" | ");
}