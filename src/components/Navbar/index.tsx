'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
    const [path, setpath] = useState("/")

    return (
        <nav className='flex bg-white shadow-md justify-between items-center mx-auto py-2 px-4 xl:px-32 '>
            <a href='/'>
                <div className='flex gap-2 justify-center items-center'>
                    <Image src={"/logogkkd.png"} alt='logo_gkkd' height={45} width={45} />
                    <h1 className='text-[#8B47C0] text-xl font-extrabold'>GKKD</h1>
                </div>
            </a>
            {/* <div>
                <ul className='flex gap-4 uppercase semibo-semibold text-[#8B47C0]/70'>
                    <li onClick={() => setpath("#home")} className={path.split("/").join("") === "#home" || path.split("/").join("") === "" ? "font-semibold !text-[#8B47C0] " : "font-normal hover:text-[#8B47C0]"}><a href="#home">home</a></li>
                    <li onClick={() => setpath("#article")} className={path.split("/").join("") === "#article" ? "font-semibold !text-[#8B47C0] " : "font-normal hover:text-[#8B47C0]"}><a href="#article">article</a></li>
                    <li onClick={() => setpath("#about-us")} className={path.split("/").join("") === "#about-us" ? "font-semibold !text-[#8B47C0] " : "font-normal hover:text-[#8B47C0]"}><a href="#about-us">about</a></li>
                    <li onClick={() => setpath("#contact-us")} className={path.split("/").join("") === "#contact-us" ? "font-semibold !text-[#8B47C0] " : "font-normal hover:text-[#8B47C0]"}><a href="#contact-us">contact</a></li>
                </ul>
            </div> */}
        </nav>
    )
}

export default Navbar