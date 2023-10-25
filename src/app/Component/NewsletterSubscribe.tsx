export default function NewsletterSubscribe(){


return(
<section className="w-full inline-flex items-center justify-between pt-12 " >
    <div>
        <h2 className="text-gray-900 text-xl font-medium leading-8 pb-6" >
            Join our newsletter
        </h2>
        <h3 className="text-gray-500 text-base font-normal leading-normal" >
            Well send you a nice letter once per week .No Spam
        </h3>
    </div>

    <div className="gap-4 flex " >
        <form className="w-80 h-12 px-4 py-3 bg-white rounded-lg shadow border border-gray-300 justify-start items-center  inline-flex " action="">
        <input className="w-[260px] text-gray-500 text-base font-normal leading-normal  border-none   focus:outline-none " type="text" placeholder="Enter your email address"  />
        </form>
        <button className="px-5 py-3 bg-violet-500 rounded-lg shadow border border-violet-500  text-white text-base font-semibold leading-normal" >Subscribe</button>

    </div>
    

</section>

    )
}