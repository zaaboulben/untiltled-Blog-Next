import { Component } from 'react'
// import searchSection from'../../../data/Template/searchSection.'
    // import background from '../../../public/BackgroundPattern.svg'
export default function SearchSection() {
    return (
        <section className="w-screen  pt-24 bg-violet-50 flex-col justify-start items-center inline-flex bg-cover pb-24 ">
            <div className="px-8 flex-col justify-start items-center gap-8 flex">
                <div className="self-stretch flex-col sm:justify-start  justify-between items-center gap-10 flex ">
                    
                        <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                            <div className="mix-blend-multiply justify-start items-start inline-flex">
                                <div className="px-3 py-1 bg-violet-50 rounded-2xl justify-center items-center flex">
                                    <div className="text-center text-violet-700 text-sm font-medium  leading-tight">
                                        Our blog
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='flex flex-col justify-between items-center gap-5'>
                            <h1 className="self-stretch text-center text-indigo-900 text-5xl font-semibold leading-[60px] sm:text-4xl sm:leading-10">
                                Resources and insights
                            </h1>
                      
                        <h2 className="self-stretch text-center text-violet-700 text-xl font-normal  leading-[30px] sm:text-lg sm:leading-7 ">
                            The latest industry news, interviews, technologies, and resources.
                        </h2>
                        </div>
           
                    <form className="w-full sm:w-80 h-12 px-4 py-3 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                        <input
                            className="w-full sm:w-[260px] text-gray-500 text-base font-normal leading-normal border-none focus:outline-none"
                            type="text"
                            placeholder="Search"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
}
