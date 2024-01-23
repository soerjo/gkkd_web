import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Template = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='min-h-screen'>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default Template