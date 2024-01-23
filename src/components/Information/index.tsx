'use client'

import dynamic from 'next/dynamic'
import React from 'react'
// import MapInformation from'@/components/Map' ;

const MapInformation = dynamic(() => import('@/components/Map'), { ssr: false })

const Information = () => {
    return (
        <div className='flex flex-col md:grid grid-cols-6'>
            <div className='col-span-4'>
                <MapInformation />
            </div>
            <div className='col-span-2 bg-[#31C3BB] p-12'>
                <ul className='text-white flex flex-col gap-4'>
                    <li>
                        <h3 className='font-bold uppercase'>Lokasi Ibadah</h3>
                        <p>Jl. Taman Alfa Indah A18 No.11, RT.3/RW.7, Joglo, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11640</p>
                    </li>
                    <li>
                        <h3 className='font-bold uppercase'>Kontak</h3>
                        <p>Telepon: 0878 - 08295838</p>
                        <p>WhatsApp: 0878 - 08295838</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Information