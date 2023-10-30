import Image from "next/image";
import { blogPosts } from "../../../../data/BlogPost/posts";

export default function BlogPost(params: { slug: string }) {


    const post = blogPosts.filter((element) => element.slug == params.slug);

    const postcontent = post[0].blogPostsComplete.content;
    const categories = post[0].blogPostsComplete.categories;
    console.log(post[0].blogPostsComplete.categories);


return(
    <>
    <section className="w-full flex flex-col justify-start items-start pt-24 pb-24 ">
        <div className="flex-col flex justify-start items-start gap-6 self-stretch ">
            <p className="text-violet-500 text-base font-semibold leading-normal">
                published {post[0].date}
            </p>
            <h1 className="text-gray-900 sm:text-5xl text-4xl font-semibold leading-10 sm:text-left text-center">{post[0].title}</h1>
            <p className="text-gray-500 text-lg sm:text-xl font-normal leading-8 pb-16">{postcontent.supportingText}</p>
            <div className="inline-flex gap-8 justify-start items-start relative overflow-auto">
                {postcontent.imageCarrousel.map((element, index) => (
                    <Image 
                        key={index}
                        src={element}
                        alt="Picture of the author"
                        width={350}
                        height={400}
                        className="p-5 "
                    />
                ))}
            </div>
        </div>
    </section>
    <section>
    <p className="text-gray-500 text-lg sm:text-xl font-normal leading-8 pb-8">{postcontent.paragraph1}</p>

        <p className="text-gray-900 text-3xl font-semibold leading-9 pb-6" >{postcontent.subtitle}</p>
        <p className="text-gray-500 text-lg font-normal leading-7 pb-10" >{postcontent.paragraph2}</p>
        <Image
            src={postcontent.image2}
            alt="Picture of the author"
            width={350}
            height={400}
        />
        <p className="text-gray-500 text-sm font-normal leading-tight pt-2">{postcontent.imageAuthor}</p>
        <div className="border-l-2 self-stretch  border-violet-700 flex flex-col justify-start items-start mt-12 mb-12 ">
        <p className=" text-gray-900 sm:text-2xl  text-xl font-medium leading-9 pb-8 ">{postcontent.citation}</p>
        <p className="text-gray-500 text-base font-normal leading-normal" >-{postcontent.citationAuthor}</p>
        </div>
        <p className="text-gray-900 text-3xl font-semibold leading-9 pb-6" >{postcontent.subtitle3}</p>
        <p  className="text-gray-500 text-lg sm:text-xl font-normal leading-8 pb-8">{postcontent.paragraph3}</p>
        <p className="text-gray-900 text-3xl font-semibold leading-9 pb-6" >{postcontent.subtitle4}</p>
        <p className="text-gray-500 text-lg sm:text-xl font-normal leading-8 pb-10 " >{postcontent.paragraph4}</p>
        <Image
            src={postcontent.image3}
            alt="Picture of the author"
            width={450}
            height={400}
           
        />
        <p className="text-gray-500 text-sm font-normal leading-tight pt-2" > {postcontent.imageauthor2}</p>
        <p className="text-gray-900 text-3xl font-semibold leading-9 pb-6 pt-8">{postcontent.subtitle5}</p>
        <p className="text-gray-500 text-lg sm:text-xl font-normal leading-8 pb-8">{postcontent.paragraph5}</p>

        <div className="sm:inline-flex  w-full justify-between   ">
        <div className="inline-flex w-full h-full  ">
            <div className="rounded-full w-[70px] ">
            <Image className="rounded-full  "
                src={postcontent.authorImage}
                width={80}
                height={80}
            
                alt={`picture of ${postcontent.authorName}`}
            />
            </div>
             <div className="p-4 " >
            <p className="text-gray-900 text-lg font-semibold leading-7">{postcontent.authorName}</p>
            <p className="text-gray-500 text-base font-normal leading-normal" >{postcontent.authorJob}</p>
            </div>
            </div>
            <div className="inline-flex sm:justify-end sm:items-end">
                {   
                    categories.map((element,index)=>{
                        console.log(element.style)
                        return <p key={index} className={element.style}>{element.name}</p>
                    })
                
                
                }
                {/* <p className="p-2">{postcontent.authorBio}</p> */}
            </div>

        </div>
    </section>
    
    </>
    )
}