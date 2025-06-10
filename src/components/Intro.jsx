import ButtonLinks from './ButtonLinks';

import Image from 'next/image'
import portrait from '../assets/pfp-cropped.jpg'


export default function Intro () {
    return (
        <div id='charz' 
        className='flex justify-center items-center animated_background'>
            <div className='flex flex-row space-x-12 text-slate-100 drop-shadow-lg'> 

                <div className='w-96'>
                    <Image
                        src = {portrait} alt = 'pfp'
                        className='rounded-full pointer-events-none'
                    />
                </div>

                <div className='h-96 bg-slate-50 w-2'></div>   
                
                <div className='flex flex-col justify-center space-y-3'>
                    <dv className='text-6xl font-semibold'>
                        charlie zhao_
                    </dv>

                    <div className='text-2xl pb-1'>
                        software engineer | musician
                    </div>

                    <ButtonLinks/>
                </div>
                
            </div>            
        </div>
    );
}