import Image from "next/image";

export default function BlogPostCTA() {




    return (
    <section className="w-full   ">
        <div className="w-full inline-flex justify-between   ">
        <div  className="sm:flex-row w-full sm:justify-start sm:items-start pb-20 flex flex-col gap-7 ">
        <div  >
            <p className="text-gray-900 text-5xl font font-semibold leading-10 pb-8" >
                No Long-term contracts.
            </p>
            <p className="text-gray-900 text-5xl font font-semibold leading-10 pb-2" >
                No hidden fees. No risk.
            </p>
            <p className="text-gray-500 text-xl font-normal leading-9 pb-10">
                Start your 30-days free trial today.
            </p>
            <div className="sm:flex-row sm:w-80 gap-4 sm:h-12 flex flex-col justify-between">
                <button className="px-5 py-3 bg-white rounded-lg shadow border border-gray-300 justify-center items-center  flex text-slate-700 text-base font-semibold leading-normal">
                    Learn more
                </button>
                <button className="px-5 py-3 bg-violet-500 rounded-lg shadow border border-violet-500  text-white text-base font-semibold leading-normal ">Get Started</button>
            </div>
        </div>

        <div className="flex flex-col gap-3 w-full ">
            <div className="inline-flex justify-center items-end gap-3">
        <Image src={"/imagetrial/Image-4.svg"} alt="image 1" width={200} height={200} />
        <Image src={"/imagetrial/Image.svg"} alt="image 1" width={200} height={200} />
        </div>
        <div className="inline-flex justify-center items-start gap-3">

        
        <Image src={"/imagetrial/Image-2.svg"} alt="image 1" width={200} height={200} />
        <Image src={"/imagetrial/Image-3.svg"} alt="image 1" width={200} height={200} />

        <Image src={"/imagetrial/Image-1.svg"} alt="image 1" width={200} height={200} />
        </div>


         </div>

         </div>
         </div>
    


    </section>


    )
}