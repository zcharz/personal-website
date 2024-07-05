import Position from "./sub-components/Position";
import { SocialLinksIntro } from "./sub-components/ButtonLinks";

// import portrait from '../assets/pfp.jpg'
import portrait from '../assets/portrait.jpg'
import Image from 'next/image'



export default function Intro () {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-row pt-10'> 

                <div>
                    <Image
                        src = {portrait} alt = 'pfp'
                         className='rounded-full border-2 border-slate-700 pointer-events-none w-72'
                    />
                </div>

                <div className='h-72 bg-slate-700 w-2'></div>
                
                <div className='flex flex-col justify-center'>
                    <h1 className='mt-1 text-5xl'>
                        charlie zhao
                    </h1>

                    <h3 className='pt-5 text-2xl'>
                        software engineer | musician
                    </h3>
                    {/* <Position/> */}
                    
                    <SocialLinksIntro/>
                </div>
                
            </div>            
        </div>
    );
}