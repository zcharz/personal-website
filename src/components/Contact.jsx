export default function Contact () {
    return (
        <div id='contact' className='flex justify-center bg-slate-800 space-x-3 py-36'>
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