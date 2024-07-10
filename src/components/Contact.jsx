import Link from 'next/link'

import Image from 'next/image'
import amogus from '../assets/amogus.jpg'

export default function Contact () {
    return (
        <div id='contact' className='flex flex-row justify-center bg-slate-800 space-x-3 py-32'>

            <Image
                src = {amogus} alt = 'pfp'
                className='rounded-full border-2 size-40 border-slate-100 pointer-events-none'
            />

            <div className='flex flex-col space-y-3 text-slate-100 w-2/6'>
                
                <div className='flex flex-row items-center space-x-3'>
                    <div className='h-10 bg-slate-100 w-2'></div>   
                    <div className='text-4xl font-semibold'>contact</div>
                </div>
                
                <div>
                    I'm currently looking for full-time Software Engineering or Machine Learning opportunities! 
                    If you know of any positions available, if you have any questions, 
                    or if you just want to say hi, please feel free to reach out to me on&nbsp;

                    <Link className='text-teal-400 hover:text-rose-200 duration-300'
                    href='https://www.linkedin.com/in/zhao-charlie/' target="_blank">
                        LinkedIn
                    </Link>

                    &nbsp;or email me at&nbsp;

                    <Link className='text-teal-400 hover:text-rose-200 duration-300'
                    href='mailto:hellozhaocharlie@gmail.com' target="_blank" >
                        hellozhaocharlie@gmail.com
                    </Link>
                </div>

            </div>
            
        </div>
    );
}