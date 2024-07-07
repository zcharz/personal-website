import Position from "./sub-components/Position";
import ButtonLinks from "./sub-components/ButtonLinks";

// import portrait from '../assets/pfp.jpg'
// import portrait from '../assets/portrait.jpg'
import portrait from '../assets/pfp-cropped.jpg'
import Image from 'next/image'



export default function Intro () {
    return (
        <div className='flex justify-center items-center animated_background'>
            <div className='flex flex-row space-x-10'> 

                <div className=''>
                    <Image
                        src = {portrait} alt = 'pfp'
                         className='rounded-full border-[1px] border-slate-700 pointer-events-none w-96'
                    />
                </div>

                <div className='h-96 bg-slate-700 w-2'></div>
                
                
                <div className='flex flex-col justify-center'>
                    <h3 className='text-6xl font-semibold'>
                        charlie zhao
                    </h3>

                    <h3 className='text-2xl py-3'>
                        software engineer | student | musician
                    </h3>
                    {/* <Position/> */}
                    
                    <ButtonLinks/>
                </div>
                
            </div>            
        </div>
    );
}


