import { footerList,LinkItem,FooterCategory } from "../../../data/Template/footerTemplate"

export default function Footer(){
    function getLinksFromCategory(category: FooterCategory): LinkItem[] {
        return category.productlist || category.ressourcesList || category.UseCasesList || category.SocialList || category.LegalList || [];
    }
    
    return(
        
       
         
            <footer className=" bg-violet-50 flex flex-col justify-center items-center">
                <div className=" grid  sm:items-center s sm:grid-cols-6 grid-cols-2 gap-3 pt-20 pb-20 sm:justify-between  justify-center justify-items-center pl-2 ">
                    {footerList.map(category => {
                        const links = getLinksFromCategory(category);
                        return (
                            <div key={category.id} className="flex-col flex justify-between  text-left  ">
                                <a href={category.link} className="text-gray-400 text-sm font-semibold leading-tight pb-4 gap-4">{category.name}</a>
                                <ul className=" " >
                                    {links.map(element => (
                                        <li className="text-gray-500 text-base font-semibold leading-normal pb-2 flex-nowrap text-left w-40" key={element.id}>
                                            <a href={element.link}>{element.name}</a>
                                            {element.new && <span className="px-2 py-0.5 bg-emerald-50 rounded-2xl justify-center elements-center inline-flex text-emerald-700 text-xs font-medium leading-2 text-left" >New</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                    
                </div>
                <div className="bg-gray-300 w-screen h-[1px] " ></div>
                <div className="flex flex-row sm:justify-between sm:flex-nowrap flex-wrap  items-center p-2 ">
                    <p className="text-gray-800 font-semibold sm:text-xl text-lg ">Untitled Blog</p>
                    <p className="text-gray-400 text-base font-normal leading-normal  ">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </footer>
               
        )


}