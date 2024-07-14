'use client'

import { useState } from "react";
import { ExperienceItems } from "./ExperienceItems";


export default function Experience () {
    const [exp, setExp] = useState(0);
    let curr = ExperienceItems[exp];

    return (
        <div id='experience' 
        className='flex flex-row justify-center py-24 bg-slate-100 space-x-10'>
            <div className='flex flex-col space-y-3 w-3/6'>

                <div className='flex flex-row justify-start items-center text-slate-800 space-x-3'>
                    <div className='h-10 bg-slate-800 w-2'></div> 
                    <div className='text-3xl font-semibold'>experience</div>  
                </div>

                <div className='flex flex-row space-x-10 text-slate-50'>
                    <div className='flex flex-col space-y-5 w-2/6'>
                        {ExperienceItems.map((item, index) => (              
                            <div onClick={() => setExp(index)} key={index}
                            className={`className='flex items-center justify-center p-4 cursor-pointer rounded-md ' 
                            ${index === exp ? 'bg-slate-200 text-slate-800' : 'bg-slate-800'}`}>
                                {item.org}
                            </div>                
                        ))}
                    </div>

                    <div className='bg-slate-800 w-4/6 p-4 rounded-md'>
                        <div>{curr.role}</div>
                        <div>{curr.date}</div>

                        <div>
                            {curr.desc.map((item) => {
                                <li>{item}</li>
                            })}
                        </div>
                    </div>    
                </div>
                
            </div>
        </div>
    );
}

