import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className=' flex justify-around bg-gray-900'>
        <Link href="/" className='text-7xl bg-violet-300 inline-block p-10 rounded-xl'>
            home
        </Link>
        <Link href="/about" className='text-7xl bg-violet-300 inline-block p-10 rounded-xl'>
            about
        </Link>
    </div>
  )
}

export default Navigation