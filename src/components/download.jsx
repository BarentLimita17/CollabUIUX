import Image from "next/image"
export default function SectionDownload() {
    return (
        <div className="pb-[100px] mt-[10%]">
            <div className="relative">
                <Image src="/imagegee/downloadcover.png"
                    width={1920}
                    height={100}
                    alt="Download Cover"
                />
                <button>
                    <Image className="absolute top-[350px] left-[160px]" src="/imagegee/appstorebutton.png"
                        width={200}
                        height={500}
                        alt="App store button"
                    />
                </button>
                <button>
                    <Image className="absolute top-[350px] left-[400px]" src="/imagegee/googleplaybutton.png"
                        width={200}
                        height={500}
                        alt="Google play button"
                    />
                </button>
            </div>
        </div>
    )
}    