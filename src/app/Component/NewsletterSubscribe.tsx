export default function NewsletterSubscribe(){


return(
<section className="w-screen   flex-col flex justify-between  gap-8 " >
    <div className=" bg-gray-50 w-screen sm:inline-flex sm:justify-between p-16
     rounded-lg shadow border border-gray-50">
    <div className="">
        <h2 className="text-gray-900 text-xl font-medium leading-8 pb-6" >
            Join our newsletter
        </h2>
        <h3 className="text-gray-500 text-base font-normal leading-normal pb-6" >
            Well send you a nice letter once per week .No Spam
        </h3>
    </div>

    <div className="sm:gap-4 flex  flex-col justify-center  gap-8" >
        <form className="sm:w-80 h-12 px-4 py-3 bg-white rounded-lg shadow border border-gray-300 sm:justify-start items-center  sm:inline-flex flex-col " action="">
        <input className="w-2/3 text-gray-500 text-base font-normal leading-normal  border-none   focus:outline-none " type="text" placeholder="Enter your email address"  />
        </form>
        <button className="px-5 py-3 bg-violet-500 rounded-lg shadow border border-violet-500  text-white text-base font-semibold leading-normal" >Subscribe</button>

    </div>
    </div>

</section>

    )
}