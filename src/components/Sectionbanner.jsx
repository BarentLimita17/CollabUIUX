import React from 'react'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="bg-[url(/Image_alif/HeroBackground.png)] h-[622px] w-[100pw] bg-cover translate-y-2">
            <div className="flex justify-around px-10 py-10">
                <Image
                    src="/Image_alif/gambarpertamina.png"
                    width={500}
                    height={300}
                    alt="Background Navbar"
                />
                <Image
                    src="/Image_alif/HeadingHero.png"
                    width={900}
                    height={300}
                    alt="Background Navbar"
                />
            </div>
        </div>
    );
}

export default Banner