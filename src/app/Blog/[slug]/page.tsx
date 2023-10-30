import Image from "next/image";
import { blogPosts } from "../../../../data/BlogPost/posts";
import { M_PLUS_1 } from "next/font/google";
import LatestBlog from "@/app/Component/blopostComponent/LatestBlog";
import BlogPostCTA from "@/app/Component/blopostComponent/BlogPostCTA";
import NewsletterSubscribe from "@/app/Component/NewsletterSubscribe";
import BlogPost from "@/app/Component/blopostComponent/BlogPost";
export default function Page({ params }: { params: { slug: string } }) {
    

    return (
        <main className="flex min-h-screen flex-col  bg-violet-50 items-center justify-between sm:pr-24 sm:pl-24 pl-2 pr-2 overflow-clip ">
           
            <BlogPost slug={params.slug} />
            <LatestBlog/>
            <BlogPostCTA/>
            <NewsletterSubscribe/>

        </main>
    );
}
