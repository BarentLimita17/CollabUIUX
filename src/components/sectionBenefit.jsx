import Image from "next/image";

export default function SectionBenefit() {
    return (
        <div className="">
            <div>
                <h1 className="text-center mt-[107px] font-[Poppins] lg:text-[28px] font-[700] text-[25px]">Ragam fungsi dalam satu genggaman</h1>
            </div>
            {/* icon and boxes */}
            <div className="lg:flex lg:flex-row justify-center mt-[35px] lg:gap-[89px] items-center lg:text-center mx-[39px]">
                <div className="border lg:w-[304px] lg:h-[243px] rounded-[12px] shadow-lg lg:p-[25px] lg:flex lg:flex-col items-center flex">
                    <Image src="/benefitImages/e-payment.png" alt="epayment" width={103} height={102}></Image>
                    <div>
                        <p className="font-[Poppins] lg:text-[17px] lg:font-[700]">E-Payments</p>
                        <p className="lg:text-[13px] lg:font-[400] text-[14px]">Payment sistem yang terintegrasi dengan LinkAja, OVO, GoPay, Debit dan Credit</p>
                    </div>
                </div>

                <div className="border w-[304px] h-[243px] rounded-[12px] shadow-lg p-[25px] flex flex-col items-center">
                    <Image src="/benefitImages/earn points.png" alt="earn points" width={103} height={102}></Image>
                    <p className="font-[Poppins] text-[17px] font-[700]">Earn points</p>
                    <p className="text-[13px] font-[400]">Setiap pembelian Pertamax, Pertamax Turbo dan Pertamina Dex pada SPBU terdaftar.</p>
                </div>

                <div className="border w-[304px] h-[243px] rounded-[12px] shadow-lg p-[25px] flex flex-col items-center">
                    <Image src="/benefitImages/redeem.png" alt="redeem" width={103} height={102}></Image>
                    <p className="font-[Poppins] text-[17px] font-[700]">Redeem</p>
                    <p className="text-[13px] font-[400]">Redeem (tukarkan) poin untuk menikmati berbagai reward dan promo dari MyPertamina.</p>
                </div>
            </div>
            {/* icon and boxes end */}


            <div className="mt-[107px] w-[1045px] h-[418px] mx-[258px] flex flex-row gap-[200px]">
                <div className="w-[433px] h-[250px]">
                    <div className="font-[Poppins] text-[28px] font-extrabold h-[93px] leading-[36px]">
                        <h1>Semua kebutuhan berkendara dan pengendara dalam satu aplikasi</h1>
                    </div>

                    <div className="pt-[35px]">
                        <p className="text-[13.5px] font-[400] leading-[20px]">
                            Coba MyPertamina dari smartphone-mu sekarang. Mulai dari daftar subsidi tepat, penukaran poin & official merchandise, pembelian voucher bbm, delivery service, akses charging station, kios matic bright gas hingga berlangganan
                            asuransi dan booking hotel dengan mudah dan praktis.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="grid">
                        <div>
                            <Image src="/benefitImages/Layer_1.svg" alt="Layer1" width={170} height={78} className="mb-[-53px] ml-[-45px]"></Image>
                        </div>
                        <div className="">
                            <Image src="/benefitImages/costumer.jpg" alt="costumer" width={377} height={254} className="border border-none rounded-[12px]"></Image>
                        </div>
                        <div className="flex justify-end items-end">
                            <Image src="/benefitImages/Layer_2.svg" alt="Layer2" width={170} height={78} className="z-[-1] mt-[-38px] mr-[-48px]"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}