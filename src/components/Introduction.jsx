function TextIntro() {
    return (
      <div className='flex flex-col self-center text-left'>
        <h1 className='mt-1 text-5xl text-rose-400'>
          charlie zhao
        </h1>
  
        <h2 className='pt-5 text-2xl'>
          Software Engineer • Student • Musician
        </h2>
  
        <div className='block pt-5'>
          {/* <SocialLinksIntro/> */}
        </div>
      </div>
    )
  }
  
  
function PortraitIcons() {
    return (
        <div className='flex self-center flex-col space-y-6'>
            {/* <Image alt='portrait' src={portrait} className='self-center rounded-full border-2 border-rose-400 pointer-events-none w-96'/> */}

    <div className='self-center hidden'>
        {/* <SocialLinksIntro/> */}
    </div>
    </div>
    )
}
  
  
  export default function Introduction() {
    return (
      <div className='flex flex-col pt-56 bg-teal-100'>
        <div className='flex self-center flex-row space-x-20 space-y-4'>
          <PortraitIcons/>
          <TextIntro/>
        </div>
      </div>
    )
  }