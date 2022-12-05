import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className=' flex justify-around bg-slate-800 text-black p-2'>
        <Link href="/" className='text-2xl bg-violet-300 inline-block p-5 rounded-xl'>
            home
        </Link>
        <Link href="/about" className='text-2xl bg-violet-300 inline-block p-5 rounded-xl'>
            about
        </Link>
        <Link href="/rickandmorty" className='text-2xl bg-violet-300 inline-block p-5 rounded-xl'>
            rick and morty
        </Link>
    </div>
  )
}

export default Navigation