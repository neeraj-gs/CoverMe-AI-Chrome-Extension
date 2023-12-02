import React from 'react'
import { PiUserCirclePlusFill } from 'react-icons/pi'
import { ROUTES } from '../utils/routes'
import TypeWriterTitle from './TypeWriter'

const LandingPage = ({setPage}) => {
  return (
    <main className="bg-gradient-to-r min-h-[60vh] grainy from-rose-100 to-slate-100">
        <nav className='flex items-center justify-between shadow-lg shadow-slate-200'>
            <div className='m-4'>
                <img src="/icon.png" alt="logo" height={70} width={70} />
            </div>
            <button onClick={()=> {setPage(ROUTES.PROFILE)}} className='rounded-full border-2 border-b-2 border-r-2 border-black px-2 py-2 text-3xl mr-5 font-bold transition-all hover:translate-y-[2px] hover:bg-slate-200 shadow-sm shadow-black'>
                    <PiUserCirclePlusFill />
                </button>
        </nav>
        <div className='ml-14 flex flex-col items-center w-3/4 mt-24'>
        <h1 className='text-2xl text-center'>
          Generate Customized Cover Letter From Our  
          <span className='text-green-600 font-bold'> Personal AI</span> and Increased chances of getting shortlisted
        </h1>
        <div className="mt-6"></div>

        {/* //typewriter */}
        <h3 className='font-semibold text-lg text-center text-slate-700'>
          <TypeWriterTitle />
        </h3>
        <div className="mt-6"></div>
        <button onClick={()=> {setPage(ROUTES.PROFILE)}} className='rounded-full border-2 border-b-4 border-r-4 border-black p-3 text-lg bg-green-300 mr-5 font-bold transition-all hover:translate-y-[2px] hover:bg-green-400 shadow-sm shadow-black mb-14'>
                    Get Started
                </button>


      </div>
    </main>
  )
}

export default LandingPage