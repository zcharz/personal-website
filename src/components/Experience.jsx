'use client'

import { useState } from "react";
import { ExperienceItems } from "./ExperienceItems";

import Image from 'next/image'
import amogus from '../assets/amogus.jpg'

import aiclub from '../assets/aiclub.jpg'
import cubesat from '../assets/cubesat.jpg'
import donaldbren from '../assets/donaldbren.jpg'
import itsirvine from '../assets/itsirvine.jpg'


export default function Experience () {
    const [exp, setExp] = useState(0);
    let curr = ExperienceItems[exp];

    return (
        <div id='experience' 
        className='flex flex-row justify-center py-16 bg-slate-700 space-x-10'>
            <div className='flex flex-col space-y-4 w-3/6 drop-shadow-lg'>

                <div className='flex flex-row justify-start items-center text-slate-100 space-x-3'>
                    <div className='h-10 bg-slate-100 w-2'></div>
                    <div className='text-3xl font-semibold'>experience</div>  
                </div>

                <div className='flex flex-row space-x-5 text-slate-100'>
                    <div className='flex flex-col space-y-5 w-2/6'>
                        {ExperienceItems.map((item, index) => (              
                            <div onClick={() => setExp(index)} key={index}
                            className={`className=' flex flex-row space-x-3 items-center justify-start p-5 cursor-pointer rounded-md hover:shadow-sm hover:shadow-emerald-400 duration-100 ' 
                            ${index === exp ? 'bg-slate-100 text-slate-800 shadow-sm shadow-emerald-400' : 'bg-slate-800'}`}>
                                <Image src={aiclub} width={40} height={40} 
                                className='rounded-lg'/>
                                <div>{item.org}</div>
                            </div>                
                        ))}
                    </div>

                    <div className='bg-slate-800 w-4/6 p-5 rounded-md space-y-3'>
                        <div className='font-bold text-xl text-rose-400'>{curr.role}</div>
                        <div className='italic'>{curr.date}</div>

                        <div className='flex flex-col space-y-3'>
                            {curr.desc.map((item) => {
                                return <div className='flex flex-row space-x-3' key={item}>
                                    <div className='text-emerald-400'>○</div>
                                    <div>{item}</div>
                                </div>;
                            })}
                        </div>
                    </div>    
                </div>
                
            </div>
        </div>
    );
}

