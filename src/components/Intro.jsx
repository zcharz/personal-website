import ButtonLinks from './ButtonLinks';

import Image from 'next/image'
import portrait from '../assets/pfp-cropped.jpg'


export default function Intro () {
    return (
        <div id='charz' 
        className='flex justify-center items-center animated_background'>
            <div className='flex flex-row space-x-12 w-3/6 text-slate-100 drop-shadow-lg'> 

                <div className='w-3/6'>
                    <Image
                        src = {portrait} alt = 'pfp'
                        className='rounded-full pointer-events-none'
                    />
                </div>

                {/* <div className='h-96 bg-slate-50 w-2'></div>    */}
                
                <div className='flex flex-col justify-center space-y-3 w-3/6'>
                    <div className='text-6xl font-semibold'>
                        charlie zhao_
                    </div>

                    <div className='text-2xl pb-1'>
                        software engineer | musician
                    </div>

                    <ButtonLinks/>
                </div>
                
            </div>            
        </div>
    );
}