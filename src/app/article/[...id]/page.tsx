'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
// import parse from 'html-react-parser';

const category = "renungan"
const content = {
    title: "hebat",
    body: `

    <h2>Ayat Bacaan</h2>

    <p>
    Bacaan Setahun: Yosua 7-8
Nas: "Mengapakah engkau melihat serpihan kayu di mata saudaramu, sedangkan balok di dalam matamu tidak engkau ketahui?" (Matius 7:3)
</p>

<p>
    Seorang kritikus seperti biasanya mengunjungi galeri lukisan. Dia mencoba melihat-lihat lukisan yang ada, namun kali ini dia lupa membawa kacamatanya. Semua lukisan yang dilihatnya dikritiknya sampai ia tiba di sebuah cermin besar, dengan semangatnya ia berkata, "Aduh, lukisan ini jelek sekali, mana ada lukisan orang seburuk ini di dunia?" Semua orang yang mendengarnya tertawa karena dia tak sadar bahwa ia sedang mengkritik dirinya sendiri.

Firman Tuhan menasihatkan kepada kita agar kita lebih dulu mengoreksi diri sendiri (ay. 5) sebelum kita membantu orang lain untuk mengerti kelemahannya. Terlalu mudah memang untuk mengkritik dan melihat kelemahan orang lain. Yesus ingin murid-murid-Nya selalu membereskan diri terlebih dulu untuk dapat melayani orang lain. Balok yang ada di mata kita dapat membuat kita tidak jelas memandang orang lain, bukan? Kita bisa salah menilai orang lain juga dan hasilnya akan fatal sekali. Kita sibuk untuk memikirkan orang lain tanpa memandang kita punya kelemahan yang besar.

Mari sadar terlebih dulu bahwa pemberesan itu mulai dari kehidupan kita dulu. Cek diri kita apakah kita sudah hidup sesuai dengan firman Tuhan atau belum. Tanyakan kepada sahabat-sahabat rohani yang menolong kita bertumbuh agar mereka dapat memberikan umpan balik untuk kita dapat menjadi pribadi yang lebih baik. Fokus pada serpihan kayu dulu sebelum melihat balok besar milik sesamamu. --YDS/www.renunganharian.net

* * *
BERESKAN DULU DIRI KITA DAN BANTULAH ORANG LAIN UNTUK BERTUMBUH.

* * *
</p>`
}

const ArticlePage = () => {
    const params = useParams<{ id: string }>()
    return (
        <div className='container mx-auto'>
            <div className='mx-auto'>
                <Image src="/images/BannerRenungan.png" alt="banner" width={1240} height={438} />
            </div>
            {/* {parse(content.body)} */}
        </div>
    )
}

export default ArticlePage