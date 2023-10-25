import { Component } from 'react'
// import searchSection from'../../../data/Template/searchSection.'
    // import background from '../../../public/BackgroundPattern.svg'
export default function SearchSection() {


    return (

        <section className="w-[100vw] h-[438px] pt-24 bg-violet-50 flex-col justify-start items-center inline-flex bg-cover  ">
             

            <div className="h-[246px] px-8 flex-col justify-start items-center gap-8 flex ">
                <div className="self-stretch h-[246px] flex-col justify-start items-center gap-10 flex">
                    <div className="h-[158px] flex-col justify-start items-center gap-6 flex">
                        <div className="self-stretch h-[104px] flex-col justify-start items-center gap-4 flex">
                            <div className="mix-blend-multiply justify-start items-start inline-flex">
                                <div className="px-3 py-1 bg-violet-50 rounded-2xl justify-center items-center flex">
                                    <div className="text-center text-violet-700 text-sm font-medium font-['Inter'] leading-tight">Our blog</div>
                                </div>
                            </div>
                            <h1 className="self-stretch text-center text-indigo-900 text-5xl font-semibold  leading-[60px]">Resources and insights</h1>
                        </div>
                        <h2 className="self-stretch text-center text-violet-700 text-xl font-normal font-['Inter'] leading-[30px]">The latest industry news, interviews, technologies, and resources.</h2>
                    </div>
                    <form className='w-80 h-12 px-4 py-3 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex  '>
                        <input className='w-[260px] text-gray-500 text-base font-normal leading-normal  border-none   focus:outline-none ' type="text" placeholder='Search' />
                    </form>
                </div>
            </div>
            <div className="w-[1440px] h-24 relative"></div>
        </section>




    )

}
{/* <!-- Search Section --> */ }
{/* <div>
                        <div>
                            <p> Our Blog</p>
                        </div>

                </div>
                <div>
                    <h1>Ressources and Insights</h1>
                </div>
                <div>
                    <h2>The latest industry news, interviews, technologies, and resources.</h2>
                </div>

                <form action="">
                    <input type="text"  />
                </form> */}