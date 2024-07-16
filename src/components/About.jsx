export default function About () {
    return (
        <div id='about'
        className='flex justify-center bg-slate-800 py-20'>
            
            <div className='flex flex-col w-3/6 space-y-5 drop-shadow-lg'>
                <div className='flex flex-row items-center space-x-3 text-slate-100'>
                    <div className='h-10 bg-slate-100 w-2'></div>   
                    <div className='text-3xl font-semibold'>about</div>
                </div>

                <div className='flex flex-col space-y-2 bg-slate-700 text-slate-100 p-4 rounded-md'>
                    <div>
                        Hey! I'm Charlie Zhao, a forth year student studying Computer Science at the University of California, Irvine. 
                    </div>
                </div>
            </div>
        </div>
    );
}