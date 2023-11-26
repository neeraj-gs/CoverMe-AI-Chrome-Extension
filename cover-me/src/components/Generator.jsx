import React from 'react'

const Generator = () => {
  return (
    <header>
        <div className='flex flex-col'>
            
            
            {/* First ROw for the Header  */}
            <div className='flex flex-row justify-between mx-5 my-5 items-center'>
                <button className='rounded-xl border-4 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:translate-y-[2px] '>Generate</button>
                <h2 className='text-xl font-extraboldbold'>CoverMe: Linkedin</h2>
                <button className='rounded-xl border-4 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:translate-y-[2px] '>Profile</button>
            </div>

            {/* Second row where we get the generated cover letter */}
            <div className='flex mx-5'>
                <textarea
                    rows={12}
                    className='w-3/4 items-center flex justify-center'
                    placeholder='Generated Customized Cover Letter'
                />
            </div>




        </div>
    </header>
  )
}

export default Generator