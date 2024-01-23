import Image from 'next/image'
import React from 'react'

const contents = [
    {
        title: "renungan harian - hebat",
        category: "article",
        logo_src: "/logogkkd.png",
        headline: "Seorang kritikus seperti biasanya mengunjungi galeri lukisan...",
        realese_date: new Date(),
        url: "/article/123"
    },
    {
        title: "renungan harian - hebat",
        category: "article",
        logo_src: "/logogkkd.png",
        headline: "Seorang kritikus seperti biasanya mengunjungi galeri lukisan...",
        realese_date: new Date(),
        url: "/article/123"
    },
    {
        title: "renungan harian - hebat",
        category: "article",
        logo_src: "/logogkkd.png",
        headline: "Seorang kritikus seperti biasanya mengunjungi galeri lukisan...",
        realese_date: new Date(),
        url: "/article/123"
    },
    {
        title: "renungan harian - hebat",
        category: "article",
        logo_src: "/logogkkd.png",
        headline: "Seorang kritikus seperti biasanya mengunjungi galeri lukisan...",
        realese_date: new Date(),
        url: "/article/123"
    },
    {
        title: "renungan harian - hebat",
        category: "article",
        logo_src: "/logogkkd.png",
        headline: "Seorang kritikus seperti biasanya mengunjungi galeri lukisan...",
        realese_date: new Date(),
        url: "/article/123"
    },
    {
        title: "renungan harian - hebat",
        category: "article",
        logo_src: "/logogkkd.png",
        headline: "Seorang kritikus seperti biasanya mengunjungi galeri lukisan...",
        realese_date: new Date(),
        url: "/article/123"
    },
    {
        title: "renungan harian - hebat",
        category: "article",
        logo_src: "/logogkkd.png",
        headline: "Seorang kritikus seperti biasanya mengunjungi galeri lukisan...",
        realese_date: new Date(),
        url: "/article/123"
    },
]

const News = () => {
    return (
        <div className='shadow-md bg-white rounded-xl p-4 h-auto md:h-full md:grid'>
            <div className='border-b-2'>
                <h2 className='mb-2 font-semibold text-[#8B47C0]'>News</h2>
            </div>
            <div className='overflow-auto'>
                {
                    contents.map((content, index) => (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <div className='w-full p-2 flex justify-start items-center gap-4'>
                                <Image src={content.logo_src} alt='logo_news' width={50} height={50} />
                                <div>
                                    <a href={content.url}>
                                        <h3 className='font-semibold capitalize'>{content.title}</h3>
                                    </a>
                                    <p className='text-sm opacity-70'>{content.headline}</p>
                                </div>

                            </div>
                            <div className='h-[1px] bg-blue-gray-300/25 w-1/2' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default News