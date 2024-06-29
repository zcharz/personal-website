import Position from "./sub-components/Position";
import { SocialLinksIntro } from "./sub-components/ButtonLinks";

export default function About () {
    return (
        <div className='container grid place-items-center'>
            <div className="flex flex-col">
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
    );
}