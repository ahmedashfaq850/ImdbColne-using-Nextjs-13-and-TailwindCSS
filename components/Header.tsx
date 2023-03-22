import Link from 'next/link'
import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
    return (
        <div className='flex justify-between items-center px-[30px] md:px-[100px] py-[15px] md:py-[15px]'>
            {/* Left side */}
            <div className='flex gap-[30px] text-[18px] font-[400]'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </div>

            {/* Right side */}
            <div className='flex items-center gap-[20px]'>
                <DarkModeSwitch />
                <p><span className='bg-amber-500 font-bold px-[7px] py-[4px] rounded-md text-[20px] mr-[3px]'>IMDb</span><span className='font - [400] text - [17px] hidden sm:inline'>Clone</span></p>
            </div>
        </div>
    )
}

export default Header