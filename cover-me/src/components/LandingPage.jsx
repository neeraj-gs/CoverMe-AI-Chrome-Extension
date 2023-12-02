import React from 'react'
import { PiUserCirclePlusFill } from 'react-icons/pi'
import { ROUTES } from '../utils/routes'

const LandingPage = ({setPage}) => {
  return (
    <main className="bg-gradient-to-r min-h-screen grainy from-rose-100 to-slate-100">
        <nav className='flex items-center justify-between shadow-lg shadow-slate-200'>
            <div className='m-4'>
                <img src="/icon.png" alt="logo" height={70} width={70} />
            </div>
            <button onClick={()=> {setPage(ROUTES.PROFILE)}} className='rounded-full border-2 border-b-2 border-r-2 border-black px-2 py-2 text-3xl mr-5 font-bold transition-all hover:translate-y-[2px] hover:bg-slate-200 shadow-sm shadow-black'>
                    <PiUserCirclePlusFill />
                </button>
        </nav>
    </main>
  )
}

export default LandingPage