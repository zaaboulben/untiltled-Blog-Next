import headerTemplate from "../../../data/Template/headerTemplate.json";
export default function Head() {
    return (
        <header className="  pl-8 bg-violet-50 justify-between items-start flex gap-8 max-md:flex-wrap w-full pt-8">
            <nav className=" items-start self-center flex w-[100vw] max-w-full justify-between gap-5 my-auto px-5 max-md:flex-wrap">
                <ul className="items-start self-center  flex w-[80vw] max-w-full grow shrink-0 basis-auto justify-between gap-8 my-auto max-md:justify-center">
                    {headerTemplate.map((element) => (
                        <li className="text-gray-500 self-center" key={element.id}>
                           
                            <a href={element.Link}>{element.name}</a>
                        </li>
                    ))}

                    <div className=" items-start self-stretch flex w-[15rem] max-w-full justify-between gap-3 ml-8 pl-px pr-8">
                        <button className="text-gray-500 text-base font-semibold leading-[150%] self-center my-auto">
                            
                            <p>Log in</p>
                        </button>

                        <button className="text-white text-base font-semibold leading-[150%]  justify-center items-center border border-[color:var(--brand-600,#7F56D9)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-violet-500 w-[110px] max-w-full px-5 py-2.5 rounded-lg border-solid self-center">
                         
                            <p className="self-center ">Sign up</p>
                        </button>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
