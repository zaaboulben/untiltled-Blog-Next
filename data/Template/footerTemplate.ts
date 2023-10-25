
 export interface LinkItem {
    id: number;
    name: string;
    link: string;
    new?: boolean;
}

export interface FooterCategory {
    id: number;
    name: string;
    link: string;
    productlist?: LinkItem[];
    ressourcesList?: LinkItem[];
    UseCasesList?: LinkItem[];
    SocialList?: LinkItem[];
    LegalList?: LinkItem[];
}

export  const footerList:FooterCategory[] = [
{
        id: 1,
        name: 'Product',
        link: '/product',
        productlist:[
            {
                id: 1,
                name: 'Overview',
                link: '/product/overview',
                new: false
        
            },
            {
                id: 2,
                name: 'Features',
                link: '/product/features',
                new: true
        
            },
            {
                id: 3,
                name: 'Solutions',
                link: '/product/solutions',
                new: true
        
            },
            {
                id: 4,
                name: 'Tutorials',
                link: '/product/tutorials',
                new: false
            },
            {
                id: 5,
                name: 'Pricing',
                link: '/product/pricing',
                new: false
            },
            {
                id: 6,
                name: 'Releases',
                link: '/product/releases',
                new: false
            }
        
        ]


        
        
    },
    {
        id:2,
        name: 'Company',
        link: '/company',
        productlist:[
            {
                id: 1,
                name: 'About us',
                link: '/company/about-us',
                new: false
        
        
            },
            {
                id: 2,
                name: 'Careers',
                link: '/company/careers',
                new: false
        
        
            },
            {
                id: 3,
                name: 'Press',
                link: '/company/press',
                new: false
        
        
            },
            {
                id: 4,
                name: 'News',
                link: '/company/news',
                new: false
            },
            {
                id: 5,
                name: 'Media Kit',
                link: '/company/media-kit',
                new: false
            },
            {
                id: 6,
                name: 'Contact',
                link: '/company/contact',
                new: false
            }
        
        ]
    },
    {
        id:3,
        name: 'Ressources',
        link: '/ressources',
        ressourcesList:[
            {
                id: 1,
                name: 'Blog',
                link: '/ressources/blog',
                new: false
        
        
            },
            {
                id: 2,
                name: 'Newsletters',
                link: '/ressources/newsletters',
        
                new: false
        
            },
            {
                id: 3,
                name: 'Events',
                link: '/ressources/events',
        
                new: false
        
            },
            {
                id: 4,
                name: 'Help Center',
                link: '/ressources/help-center',
                new: false
        
        
            },
            {
                id: 5,
                name: ' Tutorials',
                link: '/ressources/tutorials',
                new: false
        
        
            },
            {
                id: 6,
                name: 'support',
                link: '/ressources/support',
                new: false
        
        
            }
        
        ]
    }
    ,
    {
        id:4,
        name: 'Use Cases',
        link: '/use-cases',
        UseCasesList:[
            {
                id: 1,
                name: 'Startups',
                link: '/use-cases/startups',
                new: false
        
        
        
            },
            {
                id: 2,
                name: 'Entreprises',
                link: '/use-cases/entreprises',
                new: false
        
        
        
            },
            {
                id: 3,
                name: 'government',
                link: '/use-cases/government',
                new: false
        
        
        
            },
            {
                id: 4,
                name: 'SaaS',
                link: '/use-cases/saas',
                new: false
        
        
            },
            {
                id: 5,
                name: 'Marketpaces',
                link: '/use-cases/marketpaces',
                new: false
        
        
            },
            {
                id: 6,
                name: 'ecommerce',
                link: '/use-cases/ecommerce',
                new: false
        
        
            }
        
        ]
    },
    {
        id:5,
        name: 'Social',
        link: '/social',
        SocialList:[
            {
                id: 1,
                name: 'Twitter',
                link: 'https://twitter.com/vercel',
                new: false
        
        
        
            },
            {
                id: 2,
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/company/vercel-inc/',
                new: false
        
        
        
            },
            {
                id: 3,
                name: 'Facebook',
                link: 'https://www.facebook.com/vercel.inc/',
                new: false
        
        
        
            },
            {
                id: 4,
                name: 'Github',
                link: 'https://github.com/',
                new: false
            },
            {
                id: 5,
                name: 'AngeList',
                link: 'https://angel.co/company/vercel/jobs',
                new: false
        
        
            },
            {
                id: 6,
                name: 'Dribble',
                link: 'https://dribbble.com/vercel',
                new: false
        
            }
        ]
    },
    {
            id:6,
            name: 'Legal',
            link: '/legal',
            LegalList:[
                {
                    id: 1,
                    name: 'Terms',
                    link: '/legal/terms',
                    new: false
            
            
            
                },
                {
                    id: 2,
                    name: 'Privacy',
                    link: '/legal/privacy',
                    new: false
            
            
            
                },
                {
                    id: 3,
                    name: 'Cookies',
                    link: '/legal/cookies',
                    new: false
            
            
            
                },
                {
                    id: 4,
                    name: 'Licenses',
                    link: '/legal/licenses',
                    new: false
            
            
                },
                {
                    id: 5,
                    name: 'Settings',
                    link: '/legal/settings',
                    new: false
            
                },
                {
                    id: 6,
                    name: 'Contact',
                    link: '/legal/contact',
                    new: false
            
                }
            ]
    }



]


