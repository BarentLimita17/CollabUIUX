import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="fixed top-0 z-10">
            <div className="relative">
                <Image
                    src="/Navbar/HEADERNavbar.png"
                    width={1920}
                    height={77}
                    alt="Background Navbar"
                />
                <div className="absolute top-[14px] left-[60px]">
                    <Image
                        src="/Navbar/logoMyPertamina.png"
                        width={250}
                        height={46.56}
                        alt="Background Navbar"
                        className="hover:cursor-pointer"
                    />
                </div>
                <div className="absolute top-[30px] right-[60px] flex gap-5">
                    <button className="font-[Poppins] text-white">Benefit</button>
                    <button className="font-[Poppins] text-white">Layanan</button>
                    <button className="font-[Poppins] text-white">Testimoni</button>
                    <button className="font-[Poppins] text-white">Promo</button>
                    <button className="font-[Poppins] text-white">Pertanyaan</button>
                </div>
            </div>
        </div>
    );
}