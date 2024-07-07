import Position from "./sub-components/Position";
import ButtonLinks from "./sub-components/ButtonLinks";

// import portrait from '../assets/pfp.jpg'
// import portrait from '../assets/portrait.jpg'
import portrait from '../assets/pfp-cropped.jpg'
import Image from 'next/image'



export default function Intro () {
    return (
        <div className='flex justify-center items-center animated_background'>
            <div className='flex flex-row space-x-10 text-slate-800'> 

                <div className=''>
                    <Image
                        src = {portrait} alt = 'pfp'
                         className='rounded-full pointer-events-none w-96'
                    />
                </div>

                <div className='h-96 bg-slate-800 w-2'></div>
                
                
                <div className='flex flex-col justify-center'>
                    <dv className='text-6xl font-semibold'>
                        charlie zhao
                    </dv>

                    <div className='text-2xl py-3'>
                        software engineer | student | musician
                    </div>
                    {/* <Position/> */}
                    
                    <ButtonLinks/>
                </div>
                
            </div>            
        </div>
    );
}