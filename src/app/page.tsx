
import Image from 'next/image'
import SearchSection from './Component/SearchSection'
import BlogPostTile from './Component/BlogPostTile'
import CTA_socialProof from './Component/CTA_socialProof'
import CTA_freeTrial from './Component/CTA_freeTrial'
import NewsletterSubscribe from './Component/NewsletterSubscribe'
import Footer from './Component/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-violet-50 items-center justify-between p-24">
    <SearchSection/>
    <BlogPostTile/>
    <CTA_socialProof/>
    <CTA_freeTrial/>
    <NewsletterSubscribe/>
    <Footer/>
    </main>
  )
}
