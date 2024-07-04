import Position from "./sub-components/Position";
import { SocialLinksIntro } from "./sub-components/ButtonLinks";

import portrait from '../assets/pfp.jpg'
import Image from 'next/image'

export default function About () {
    return (
        <div className='flex justify-center'>
            <div className="flex flex-row"> 

                <div>
                    <h1 className='mt-1 text-5xl'>
                        charlie zhao
                    </h1>

                    <h3 className='pt-5 text-2xl'>
                        software engineer | musician
                    </h3>

                    {/* <Position/> */}
                    <SocialLinksIntro/>
                </div>

                <div>


                </div>
                
                <div>
                    <Image
                        src = {portrait}
                        width ={500}
                        height = {500}
                        alt = 'pfp'
                    />
                </div>

            </div>            
        </div>
    );
}