import Image from 'next/image'
import React from 'react'

const vissions = [
    {
        title: "Visi",
        content: "Menjadi gereja yang senantiasa antusias untuk indonesia dan bangsa-bangsa penuh kemuliaan-nya",
    },
    {
        title: "Misi",
        content: `Mengabarkan injil dengan penuh kuasa\n Memuridkan dengan diperlengkapi lima jawatan\n membangun gereja lokal yang dewasa serta melahirkan gereja-gereja baru\n mengembangkan dan mengobarkan karunia-karunia rohani`,
    },
    {
        title: "Nilai-Nilai",
        content: "Menjadi gereja yang senantiasa antusias untuk indonesia dan bangsa-bangsa penuh kemuliaan-nya",
    }
]

const VisionAndMission = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-start gap-2 bg-white p-4 '>
                {vissions.map((vission, index) => (
                    <div key={index} className='w-full md:w-1/3 my-8'>
                        <h3 className='text-center text-xl font-medium mb-4'>{vission.title}</h3>
                        {vission.title !== "Misi" && <p className='text-center'>{vission.content}</p>}
                        {vission.title === "Misi" && <ul className='list-decimal ml-6'>
                            {
                                vission.content.split("\n").map((point, index) => (
                                    <li key={index} >
                                        {point}
                                    </li>
                                ))
                            }
                        </ul>
                        }
                    </div>
                ))}

            </div>
            <Image src={"/images/banner_visi.png"} alt='banner_visi' width={1300} height={448} />
        </ >
    )
}

export default VisionAndMission