import Link from 'next/link'
import Image from 'next/image';

import aura from '../assets/aura.jpg'

export default function About () {
    return (
        <div id='about'
        className='flex justify-center bg-slate-800 py-16'>
            
            <div className='flex flex-col w-3/6 space-y-4 drop-shadow-lg'>
                <div className='flex flex-row items-center space-x-3 text-slate-100'>
                    {/* <div className='h-10 bg-slate-100 w-2'></div>    */}
                    <div className='text-3xl font-semibold'>about_</div>
                </div>

                <div className='flex flex-row space-x-5'>
                    <Image src={aura} alt='aura'
                    className='bg-slate-800 w-3/6 flex justify-center rounded-md hover:shadow-sm hover:shadow-emerald-400 duration-100'
                    />    

                    <div className='flex flex-col space-y-3 bg-slate-700 text-slate-100 p-5 rounded-md w-3/6 hover:shadow-sm hover:shadow-emerald-400 duration-100'>
                        <div>
                            Welcome to my website portfolio!
                        </div>

                        <div>
                            I'm Charlie, a recent Computer Science graduate from the University of California, Irvine
                        </div>

                        <div>
                            Experienced with Full-Stack Development and Machine Learning, I'm currently looking for full-time opportunities!
                        </div>

                        <div>
                            Check out my&nbsp;
                            <Link className='text-emerald-400 font-semibold hover:text-rose-400 duration-200'
                            href='https://github.com/zcharz' target="_blank">
                                Github</Link>
                            &nbsp;and&nbsp;
                            <Link className='text-emerald-400 font-semibold hover:text-rose-400 duration-300'
                            href='https://drive.google.com/file/d/1KroZl-79kF2Hltba0qhrsHdcOWxnzYmO/view' target="_blank">
                                Resume</Link>
                            &nbsp;for more information on my skills, experiences, and projects
                        </div>

                        <div>
                            I also make music – you can find my music on my&nbsp;
                            <Link className='text-emerald-400 font-semibold hover:text-rose-400 duration-200'
                            href='https://www.youtube.com/@just_cz' target="_blank">
                                YouTube</Link>
                            , take a listen!
                        </div>
                    </div>

                    
                        
                </div>




                {/* <div className='flex flex-col space-y-3 bg-slate-700 text-slate-100 p-5 rounded-md hover:shadow-sm hover:shadow-rose-400 duration-100'>
                    <div>
                        Hey! I'm Charlie Zhao, recent Computer Science graduate from the University of California, Irvine
                    </div>

                    <div>
                        Experienced with Full-Stack Development and Machine Learning, I'm currently looking for full-time opportunities!
                    </div>

                    <div>
                        Check out my&nbsp;
                        <Link className='text-emerald-400 font-semibold hover:text-rose-400 duration-200'
                        href='https://github.com/zcharz' target="_blank">
                            Github</Link>
                        &nbsp;and&nbsp;
                        <Link className='text-emerald-400 font-semibold hover:text-rose-400 duration-300'
                        href='https://drive.google.com/file/d/1KroZl-79kF2Hltba0qhrsHdcOWxnzYmO/view' target="_blank">
                            Resume</Link>
                        &nbsp;for more information on my skills, experiences, and projects
                    </div>

                    <div>
                        I also make music – you can find my music on my&nbsp;
                        <Link className='text-emerald-400 font-semibold hover:text-rose-400 duration-200'
                        href='https://www.youtube.com/@just_cz' target="_blank">
                            YouTube</Link>
                        , take a listen!
                    </div>
                </div> */}
            </div>
        </div>
    );
}