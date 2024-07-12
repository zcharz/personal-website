export default function Experience () {
    return (
        <div id='experience' 
        className='flex flex-row justify-center py-24 bg-slate-100 space-x-10'>
            <div className='flex flex-col space-y-3 text-slate-800 w-3/6'>

                <div className='flex flex-row justify-start items-center space-x-3'>
                    <div className='h-10 bg-slate-800 w-2'></div> 
                    <div className='text-3xl font-semibold'>experience</div>  
                </div>


                <div className='flex flex-row space-x-10 text-slate-50'>
                    <div className='flex flex-col space-y-5 w-2/6'>
                        <div className='flex items-center justify-center bg-slate-800 h-20'>
                            Institute of TS
                            <br/>
                            (UCI)
                        </div>
                        <div className='flex items-center justify-center bg-slate-800 h-20'>
                            Donald Bren School of ICS 
                            <br/>
                            (UCI)
                        </div>
                        <div className='flex items-center justify-center bg-slate-800 h-20'>
                            AI @ UCI
                        </div>
                        <div className='flex items-center justify-center bg-slate-800 h-20'></div>
                    </div>

                    <div className='flex items-center justify-center bg-slate-800 h-auto w-4/6'>description</div>
                </div>
                
            </div>
        </div>
    );
}