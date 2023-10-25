

interface blogPostType{
        id: number,
        title: string,
        preview: string,
        content: string,
        date: string,
        categories: string[],
        author: string,
        image: string,
        public:boolean 
}

interface categories{
id:Number,
name:string,

}


export const categorieList:categories[]=[
    {
        id:1,
        name:'Economie'
    
    },
    {
        id:2,
        name:'Politique'
    
    },
    {
        id:3,
        name:'Sport'
    
    },
    {
        id:4,
        name:'Culture'
    },
    {
        id:5,
        name:'Sante'
    },
    {
        id:6,
        name:'Technologie'
    },
    {
        id:7,
        name:'Environnement'
    }
    
    
    ]


 export const blogPosts: blogPostType[] = [
    {
        id: 0,
        title: 'Blog Post 0',
        preview: 'This is a preview of Blog Post 0',
        content: 'This is the content of Blog Post 0',
        date: "2021-01-01",
        categories: [categorieList[0].name+" "+ categorieList[1].name],
        author: 'John Doe',
        image: 'blogImage/Image.svg',
        public:true
    },
    {
        id: 1,
        title: 'Blog Post 1',
        preview: 'This is a preview of Blog Post 1',
        content: 'This is the content of Blog Post 1',
        date: "2021-01-01",
        categories: [categorieList[0].name+" "+ categorieList[1].name],
        author: 'John Doe',
        image: 'blogImage/Image.svg',
        public:true
    },
    {
        id: 2,
        title: 'Blog Post 2',
        preview: 'This is a preview of Blog Post 2',
        content: 'This is the content of Blog Post 2',
        date: "2021-01-01",
        categories: [categorieList[0].name+" "+ categorieList[1].name],
        author: 'John Doe',
        image: 'blogImage/Image.svg',
        public:true

    },
    {
        id: 3,
        title: 'Blog Post 3',
        preview: 'This is a preview of Blog Post 3',
        content: 'This is the content of Blog Post 3',
        date: "2021-01-01",
        categories: [categorieList[0].name+" "+ categorieList[1].name],
        author: 'John Doe',
        image: 'blogImage/Image.svg',
        public:true

    },
    {
        id: 4,
        title: 'Blog Post 4',
        preview: 'This is a preview of Blog Post 4',
        content: 'This is the content of Blog Post 4',
        date: "2021-01-01",
        categories: [categorieList[0].name+" "+ categorieList[1].name],
        author: 'John Doe',
        image: 'blogImage/Image.svg',
        public:true

    },
    {
        id: 5,
        title: 'Blog Post 5',
        preview: 'This is a preview of Blog Post 5',
        content: 'This is the content of Blog Post 5',
        date: "2021-01-01",
        categories: [categorieList[0].name+" "+ categorieList[1].name],
        author: 'John Doe',
        image: 'blogImage/Image.svg',
        public:true

    },
    {
        id: 6,
        title: 'Blog Post 6',
        preview: 'This is a preview of Blog Post 6',
        content: 'This is the content of Blog Post 6',
        date: "2021-01-01",
        categories: [categorieList[0].name+" "+ categorieList[1].name],
        author: 'John Doe',
        image: 'blogImage/Image.svg',
        public:true

    },
    {
        id: 7,
        title: 'Blog Post 7',
        preview: 'This is a preview of Blog Post 7',
        content: 'This is the content of Blog Post 7',
        date: "2021-01-01",
        categories: [categorieList[0].name+" "+ categorieList[1].name],
        author: 'John Doe',
        image: 'blogImage/Image.svg',
        public:true

    },
    {
        id: 8,
        title: 'Blog Post 8',
        preview: 'This is a preview of Blog Post 8',
        content: 'This is the content of Blog Post 8',
        date: "2021-01-01",
        categories: [categorieList[0].name+" "+ categorieList[1].name],
        author: 'John Doe',
        image: 'blogImage/Image.svg',
        public:true

    },
    {
        id: 9,
        title: 'Blog Post 9',
        preview: 'This is a preview of Blog Post 9',
        content: 'This is the content of Blog Post 9',
        date: "2021-01-01",
        categories: [categorieList[0].name+" "+ categorieList[1].name],
        author: 'John Doe',
        image: 'blogImage/Image.svg',
        public:true

    }
];