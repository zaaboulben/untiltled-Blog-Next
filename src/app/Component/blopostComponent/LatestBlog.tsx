import Image from "next/image";
import { blogPosts } from "../../../../data/BlogPost/posts";
import Link from "next/link";

export default function LatestBlog() {

    const count=3;




    return (
        <section className="w-full flex flex-col justify-start items-start gap-10 ">

            <div className="bg-gray-300 w-full h-[1px] mt-20 mb-20"></div>

                <div className="inline-flex  pt-20 w-full " >
                    <div className="flex flex-col gap-6"  >

                        <p className="text-violet-700 text-base font-semibold leading-normal">Our Blog</p>
                        <h2 className="text-gray-900 text-4xl font-semibold leading-10" >Latest blog posts</h2>
                        <p className="text-gray-500 text-xl font-normal leading-9" >Tool and strategies modern teams need to help their companies grow.</p>
                      
                        
                    </div>
                   
                </div>
                <div className="inline-flex justify-center items-center w-full">
                    <div className="grid sm:grid-cols-3  grid-cols-1 justify-items-center  gap-8 flex-wrap justify-center items-center  ">
                    {
            
            blogPosts.map((element) => (
                
                element.id<count && 
                
                <div key={element.id} className='border w-max shadow-lg bg-purple-50 flex-col flex justify-center  ' >
                    <Image src={element.image} alt="Picture of the author" width={350} height={400}  className='p-5 '/>
                    <div className='pl-5 pb-5 pr-5  ' >
                    <h2  className='text-violet-700 leading-tight  font-semibold text-sm pb-8' >{element.categories} </h2>
                    <Link href={`/Blog/${element.slug}`} className='text-gray-900 text-2xl font-semibold ' >{element.title}</Link>
                    <p className='text-gray-500 text-base font-normal leading-normal' >{element.preview}</p>
                    <p className='text-gray-900 text-sm font-semibold leading-tight pt-4'>{element.author}</p>
                    <p className='text-gray-500 text-sm font-normal leading-tight' >{element.date}</p>

                    </div>
                    
                  
                 </div>
                 
                
            ))
                
       }
                    </div>
                  
                </div>
                <div className="w-screen  inline-flex justify-center items-start " >
                        <button className="rounded-lg px-5 py-3  bg-violet-500 shadow border border-violet-500 justify-center text-white ">View all posts</button>
                    </div>
               
               
                    <div className="bg-gray-300 w-full h-[1px] mt-20 mb-20"></div>
        </section>

    
    
    )



}