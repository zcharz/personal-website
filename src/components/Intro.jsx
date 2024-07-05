import Position from "./sub-components/Position";
import ButtonLinks from "./sub-components/ButtonLinks";

// import portrait from '../assets/pfp.jpg'
import portrait from '../assets/portrait.jpg'
import Image from 'next/image'



export default function Intro () {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-row py-10'> 

                <div className='pr-10'>
                    <Image
                        src = {portrait} alt = 'pfp'
                         className='rounded-full border-2 border-slate-700 pointer-events-none w-72'
                    />
                </div>



                <div className='h-72 bg-slate-700 w-2'></div>
                
                <div className='flex flex-col justify-center pl-10'>
                    <h3 className=''>
                        charlie zhao
                    </h3>

                    <h3 className=''>
                        software engineer | student | musician
                    </h3>
                    {/* <Position/> */}
                    
                    <ButtonLinks/>
                </div>
                
            </div>            
        </div>
    );
}