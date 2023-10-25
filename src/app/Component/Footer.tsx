import { footerList } from "../../../data/Template/footerTemplate"
export default function Footer(){

    return(
        
        <footer className="w-full">
            <div className="grid-cols-6 flex pt-24 justify-between">
                {footerList.map(category => (
                    <div  key={category.id} className="flex-col flex justify-between place-items">
                        <a href={category.link} className="text-gray-400 text-sm font-semibold leading-tight pb-4 gap-4">{category.name}</a>
                        <ul >
                            {Object.values(category)[3].map(item => (
                                <li className="text-gray-500 text-base font-semibold leading-normal pb-2 flex-nowrap" key={item.id}>
                                    <a href={item.link}>{item.name}</a>
                                    {item.new && <span className="px-2 py-0.5 bg-emerald-50 rounded-2xl justify-center items-center inline-flex text-emerald-700 text-xs font-medium leading-2" >New</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="  flex flex-row  justify-between  place-items-stretch pt-16">
                <p className="text-gray-800 font-semibold text-xl" >Untitled Blog</p>
                <p className="text-gray-400 text-base font-normal leading-normal ">© 2077 Untitled UI. All rights reserved. </p>
            </div>
        </footer>
               
        )


}