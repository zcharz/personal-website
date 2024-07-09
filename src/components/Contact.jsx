export default function Contact () {
    return (
        <div className='flex justify-center py-11 bg-slate-800 space-x-3'>
            <div className='flex flex-col text-slate-100'>
                <div className='text-4xl font-semibold'>contact</div>
            </div>

            <div className='flex flex-col space-y-2'>
                <div className='flex flex-row space-x-2'>
                    <input/>
                    <input/>
                </div>

                <input/>
            </div>
            
        </div>
    );
}