import Image from 'next/image'
import mockup from '../../../public/mockup.svg'

export default function CTA_socialProof(){


    return(
        <section className="w-screen " >
            <div className="h-[1px] w-full bg-gray-300 " ></div>
            <div className="flex flex-col justify-around items-center pt-24 ">
            
                <div className="gap-4 flex flex-col items-center justify-center justify-items-center p-2  ">
                    <h2 className="text-gray-900 text-3xl font-semibold leading-10 whitespace-nowrap text-center ">Start your 30-day free trial</h2>
                    <h3 className="text-gray-500 text-lg font-normal leading-9 whitespace-pre-line text-center" >Join over 4,000+ startups already growing with Untitled.</h3>
                </div>
                <div className="w-72 h-12 rounded-lg justify-start inline-flex gap-4 m-16">
                    <button className="px-5 py-3 bg-white rounded-lg shadow border border-gray-300 justify-center items-center  flex text-slate-700 text-base font-semibold leading-normal" >Learn More</button>
                    <button className="px-5 py-3 bg-violet-500 rounded-lg shadow border border-violet-500  text-white text-base font-semibold leading-normal " >Get Started</button>
    
                </div>
    
                </div>
    <div className='flex flex-initial justify-center items-center w-screen'>
        <Image src={mockup} alt="social Proof" width={1440} height={24} className='  rounded-xl border border-gray-100 shadow'/>
    </div>
        </section>
    
        
        )
    }