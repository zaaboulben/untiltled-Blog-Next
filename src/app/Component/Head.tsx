"use client"
import Image from "next/image";
import headerTemplate from "../../../data/Template/headerTemplate.json";
import { useState } from "react";
export default function Head() {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <header className="  pl-8 bg-violet-50 justify-start  items-start   md:flex-nonwrap w-full pt-8 pr-8">
            <nav className=" items-start self-center  justify-between lg:inline-flex gap-8 my-auto px-5 max-md:flex-wrap w-full  lg:block  hidden  ">
                <ul className="items-start self-center  flex w-[50vw]   basis-auto  gap-8 my-auto ">
                    {headerTemplate.map((element) => (
                        <li className="text-gray-500 self-center" key={element.id}>
                           
                            <a href={element.Link}>{element.name}</a>
                        </li>
                    ))}

                    
                </ul>
                <div className=" items-end justify-end flex   gap-8  pr-10">
                        <button className="text-gray-500 text-base font-semibold leading-[150%] self-center my-auto">
                            
                            <p>Log in</p>
                        </button>

                        <button className="text-white text-base font-semibold leading-[150%]  justify-center items-center border border-[color:var(--brand-600,#7F56D9)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-violet-500 w-[110px] max-w-full px-5 py-2.5 rounded-lg border-solid self-center">
                         
                            <p className="self-center ">Sign up</p>
                        </button>
                    </div>
            </nav>
            {/* Mobile style  */}
            <nav className=" w-full  lg:hidden    inline-flex justify-between ">
            <p className="text-gray-500 whitespace-nowrap " > Untitled-Blog</p>
                <div className="w-full inline-flex justify-between items-center ">
                

                <div className=" w-full flex flex-col justify-end items-end">
                        <button onClick={()=>setIsOpened(!isOpened)} className=""  >
                            {isOpened&&
                            <Image width={20} height={20} alt="buttonhome"  src={"/X.png"} />
                            }
                            {!isOpened&&
                                 <Image width={30} height={30} alt="buttonhome"  src={"/navButoon.png"} /> 
                            }
                        </button>
                        {isOpened &&
                            
                                  <ul className=" p-2  gap-4 self-center  flex flex-col    ">
                    {headerTemplate.map((element) => (
                        <li className="text-gray-500 self-center" key={element.id}>
                           
                            <a href={element.Link}>{element.name}</a>
                        </li>
                    ))}

                    
                </ul>
                           
                        
                        
                        }
                </div>

                </div>
            </nav>

        </header>

    );
}
