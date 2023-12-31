"use client"
import Image from 'next/image';
import {blogPosts} from '../../../data/BlogPost/posts';
import { categorieList } from '../../../data/BlogPost/posts';
import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function BlogPostTile() {
    const [count, setCount] = useState(6);
    const root =useRouter(); 


    

    const click=()=>{
    
    setCount(count+3);
    
    
    }
    return (
        <section className="flex flex-col justify-center   w-screen bg-background-pattern bg-no-repeat  bg-contain items-center pb-28   ">

            <div className=" grid lg:grid-cols-3  grid-cols-1 justify-items-center  gap-8 flex-wrap ">

            {
            
                blogPosts.map((element) => (
                    
                    element.id<count && 
                    
                    <div key={element.id} className='border w-max shadow-lg bg-purple-50 flex-col flex justify-center  ' >
                        <Image src={element.image} alt="Picture of the author" width={350} height={400}  className='p-5 '/>
                        <div className='pl-5 pb-5 pr-5' >
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
            <div className='flex justify-center items-center gap-2 w-screen pt-12'>
           <button onClick={click} className='h-12 w-36 px-5 py-3 bg-purple-50 shadow border rounded-lg border-violet-50 justify-center items-center gap-2 inline-flex text-violet-700 text-base font-semibold leading-normal ' > Load More </button>
            </div>
        </section>
    )


}