import { footerList,LinkItem,FooterCategory } from "../../../data/Template/footerTemplate"

export default function Footer(){
    function getLinksFromCategory(category: FooterCategory): LinkItem[] {
        return category.productlist || category.ressourcesList || category.UseCasesList || category.SocialList || category.LegalList || [];
    }
    
    return(
        
       
         
            <footer className="w-full">
                <div className="grid-cols-6 flex pt-24 justify-between">
                    {footerList.map(category => {
                        const links = getLinksFromCategory(category);
                        return (
                            <div key={category.id} className="flex-col flex justify-between place-elements">
                                <a href={category.link} className="text-gray-400 text-sm font-semibold leading-tight pb-4 gap-4">{category.name}</a>
                                <ul>
                                    {links.map(element => (
                                        <li className="text-gray-500 text-base font-semibold leading-normal pb-2 flex-nowrap" key={element.id}>
                                            <a href={element.link}>{element.name}</a>
                                            {element.new && <span className="px-2 py-0.5 bg-emerald-50 rounded-2xl justify-center elements-center inline-flex text-emerald-700 text-xs font-medium leading-2" >New</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-row justify-between place-elements-stretch pt-16">
                    <p className="text-gray-800 font-semibold text-xl">Untitled Blog</p>
                    <p className="text-gray-400 text-base font-normal leading-normal">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </footer>
               
        )


}