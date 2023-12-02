import React from 'react'

const LandingPage = () => {
  return (
    <main className="bg-gradient-to-r min-h-screen grainy from-rose-100 to-slate-100">
        <nav className='flex items-center justify-between'>
            <div className='m-4'>
                <img src="/icon.png" alt="logo" height={70} width={70} />
            </div>
            <button className='rounded-full border-2 border-b-2 border-r-2 border-black px-4 py-3 text-lg font-bold transition-all hover:translate-y-[2px] hover:bg-slate-200 shadow-md shadow-black'>Get Started</button>
        </nav>
    </main>
  )
}

export default LandingPage