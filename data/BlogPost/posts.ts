interface content {
  subtitle: string;
  supportingText: string;
  imageCarrousel: string[];
  citationAuthor: string;
  paragraph1: string;
  imageparagraphe: string;
  paragraph2: string;
  image2: string;
  imageAuthor: string;
  citation: string;

  subtitle3: string;
  paragraph3: string;
  subtitle4: string;
  paragraph4: string;
  image3: string;
  imageauthor2: string;
  subtitle5: string;
  paragraph5: string;
  authorImage: string;
  authorName: string;
  authorJob: string;
  authorBio: string;
}

interface BlogPostComplete {
  id: number;
  title: string;
  preview: string;
  content: content;
  date: string;
  categories: categories[];
  author: string;
  image: string;
  public: boolean;
  slug: string;
}

interface BlogPostType {
  id: number;
  title: string;
  preview: string;
  date: string;
  categories: string[];
  author: string;
  image: string;
  public: boolean;
  slug: string;
  blogPostsComplete: BlogPostComplete;
}

interface categories {
  id: Number;
  name: string;
  style?: string;
}

export const categorieList: categories[] = [
  {
    id: 1,
    name: "Economie",
    style: 'p-0.5 bg-green-200 text-green-700 rounded-lg gap-2 ml-2 ml-2 mr-2 '
  },
  {
    id: 2,
    name: "Politique",
    style: "p-0.5 bg-violet-200 text-violet-700 rounded-lg gap-2 ml-2 ml-2 mr-2 "
  },
  {
    id: 3,
    name: "Sport",
    style: "p-0.5 bg-red-200 text-red-700 rounded-lg gap-2 ml-2 ml-2 mr-2 "
  },
  {
    id: 4,
    name: "Culture",
    style: "p-0.5 bg-yellow-200 text-yellow-700 rounded-lg gap-2 ml-2 ml-2 mr-2 "

  },
  {
    id: 5,
    name: "Sante",
    style: "p-0.5 bg-blue-200 text-blue-700 rounded-lg gap-2 ml-2 ml-2 mr-2 "
  },
  {
    id: 6,
    name: "Technologie",
    style: "p-0.5 bg-orange-200 text-orange-700 rounded-lg gap-2 ml-2 ml-2 mr-2 "

  },
  {
    id: 7,
    name: "Environnement",
    style: "p-0.5 bg-pink-200 text-pink-700 rounded-lg gap-2 ml-2 ml-2 mr-2 "
  }
];

export const blogPosts: BlogPostType[] = [
  {
    id: 0,
    title: "Blog Post 0",
    preview: "This is a preview of Blog Post 0",
    date: "2021-01-01",
    categories: [categorieList[0].name +" "+ categorieList[1].name]  ,
    author: "John Doe",
    image: "/blogImage/Image.svg",
    public: true,
    slug: "blog-post-0",
    blogPostsComplete: {
      id: 0,
      title: "Blog Post 0",
      preview: "This is a preview of Blog Post 0",
    content: {
        subtitle: "A New Perspective on the Ordinary",
      supportingText: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",
        imageCarrousel: ["/blogImage/Image.svg", "/blogImage/Image.svg"],

        paragraph1: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",

        imageparagraphe: "/blogImage/Image.svg",
        paragraph2:
        "Often, we walk past wonders without a second glance. Our routines and daily tasks make us numb to the beauty that's right in front of us. The chirping birds, the patterns on a leaf, or even the way shadows play on the ground during the golden hour. But with a change in perspective, the mundane can become extraordinary.",
        image2: "/blogImage/Image.svg",
        imageAuthor: "jHonn",
        citation:
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          citationAuthor: "John Muir",
        subtitle3: "Unmasking the Unnoticed",
        paragraph3:
          "There's a magic in pausing and observing. By simply stopping and looking around, we unearth stories that have been silently narrating tales of beauty, resilience, and evolution.",
        subtitle4: "Bridges Between Worlds",
        paragraph4:
          "Connecting with the world around us bridges the gap between the ordinary and the phenomenal. Every whisper of the wind, every rustle of the leaves has a story, a history, a lesson.",
        image3: "/blogImage/Image.svg",
        imageauthor2: "jhol",
        subtitle5: "The Power of Pause",
        paragraph5:
          "In this ever-hurrying world, the act of pausing can be revolutionary. It's in these moments of stillness that we often find the most profound insights, leading us to a deeper understanding and appreciation of life's intricacies.",

        authorImage: "/blogImage/Image.svg",
        authorName: "John Doe",
        authorJob: "CEO",
        authorBio: "This is the biography of John Doe"
      },
      date: "2021-01-01",
      categories: [categorieList[6],categorieList[1]] ,
      author: "John Doe",
      image: "/blogImage/Image.svg",
      public: true,
      slug: "blog-post-0"
    }
  },
  {
    id: 1,
    title: "Blog Post 1",
    preview: "This is a preview of Blog Post 1",
    date: "2021-01-01",
    categories: [categorieList[0].name + " " + categorieList[1].name],
    author: "John Doe",
    image: "/blogImage/Image.svg",
    public: true,
    slug: "blog-post-1",
    blogPostsComplete: {
      id: 1,
      title: "Blog Post 1",
      preview: "This is a preview of Blog Post 1",
       content: {
        subtitle: "A New Perspective on the Ordinary",
      supportingText: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",
        imageCarrousel: ["/blogImage/Image.svg", "/blogImage/Image.svg"],

        paragraph1: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",

        imageparagraphe: "/blogImage/Image.svg",
        paragraph2:
        "Often, we walk past wonders without a second glance. Our routines and daily tasks make us numb to the beauty that's right in front of us. The chirping birds, the patterns on a leaf, or even the way shadows play on the ground during the golden hour. But with a change in perspective, the mundane can become extraordinary.",
        image2: "/blogImage/Image.svg",
        imageAuthor: "jHonn",
        citation:
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          citationAuthor: "John Muir",
        subtitle3: "Unmasking the Unnoticed",
        paragraph3:
          "There's a magic in pausing and observing. By simply stopping and looking around, we unearth stories that have been silently narrating tales of beauty, resilience, and evolution.",
        subtitle4: "Bridges Between Worlds",
        paragraph4:
          "Connecting with the world around us bridges the gap between the ordinary and the phenomenal. Every whisper of the wind, every rustle of the leaves has a story, a history, a lesson.",
        image3: "/blogImage/Image.svg",
        imageauthor2: "jhol",
        subtitle5: "The Power of Pause",
        paragraph5:
          "In this ever-hurrying world, the act of pausing can be revolutionary. It's in these moments of stillness that we often find the most profound insights, leading us to a deeper understanding and appreciation of life's intricacies.",

        authorImage: "/blogImage/Image.svg",
        authorName: "John Doe",
        authorJob: "CEO",
        authorBio: "This is the biography of John Doe"
      },
      date: "2021-01-01",
      categories: [categorieList[0],categorieList[1]] ,
      author: "John Doe",
      image: "/blogImage/Image.svg",
      public: true,
      slug: "blog-post-1"
    }
  },
  {
    id: 2,
    title: "Blog Post 2",
    preview: "This is a preview of Blog Post 2",
    date: "2021-01-01",
    categories: [categorieList[0].name + " " + categorieList[1].name],
    author: "John Doe",
    image: "/blogImage/Image.svg",
    public: true,
    slug: "blog-post-2",
    blogPostsComplete: {
      id: 2,
      title: "Blog Post 2",
      preview: "This is a preview of Blog Post 2",
     content: {
        subtitle: "A New Perspective on the Ordinary",
      supportingText: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",
        imageCarrousel: ["/blogImage/Image.svg", "/blogImage/Image.svg"],

        paragraph1: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",

        imageparagraphe: "/blogImage/Image.svg",
        paragraph2:
        "Often, we walk past wonders without a second glance. Our routines and daily tasks make us numb to the beauty that's right in front of us. The chirping birds, the patterns on a leaf, or even the way shadows play on the ground during the golden hour. But with a change in perspective, the mundane can become extraordinary.",
        image2: "/blogImage/Image.svg",
        imageAuthor: "jHonn",
        citation:
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          citationAuthor: "John Muir",
        subtitle3: "Unmasking the Unnoticed",
        paragraph3:
          "There's a magic in pausing and observing. By simply stopping and looking around, we unearth stories that have been silently narrating tales of beauty, resilience, and evolution.",
        subtitle4: "Bridges Between Worlds",
        paragraph4:
          "Connecting with the world around us bridges the gap between the ordinary and the phenomenal. Every whisper of the wind, every rustle of the leaves has a story, a history, a lesson.",
        image3: "/blogImage/Image.svg",
        imageauthor2: "jhol",
        subtitle5: "The Power of Pause",
        paragraph5:
          "In this ever-hurrying world, the act of pausing can be revolutionary. It's in these moments of stillness that we often find the most profound insights, leading us to a deeper understanding and appreciation of life's intricacies.",

        authorImage: "/blogImage/Image.svg",
        authorName: "John Doe",
        authorJob: "CEO",
        authorBio: "This is the biography of John Doe"
      },
      date: "2021-01-01",
      categories: [categorieList[0],categorieList[1]] ,
      author: "John Doe",
      image: "/blogImage/Image.svg",
      public: true,
      slug: "blog-post-2"
    }
  },
  {
    id: 3,
    title: "Blog Post 3",
    preview: "This is a preview of Blog Post 3",
    date: "2021-01-01",
    categories: [categorieList[0].name + " " + categorieList[1].name],
    author: "John Doe",
    image: "/blogImage/Image.svg",
    public: true,
    slug: "blog-post-3",
    blogPostsComplete: {
      id: 3,
      title: "Blog Post 3",
      preview: "This is a preview of Blog Post 3",
     content: {
        subtitle: "A New Perspective on the Ordinary",
      supportingText: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",
        imageCarrousel: ["/blogImage/Image.svg", "/blogImage/Image.svg"],

        paragraph1: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",

        imageparagraphe: "/blogImage/Image.svg",
        paragraph2:
        "Often, we walk past wonders without a second glance. Our routines and daily tasks make us numb to the beauty that's right in front of us. The chirping birds, the patterns on a leaf, or even the way shadows play on the ground during the golden hour. But with a change in perspective, the mundane can become extraordinary.",
        image2: "/blogImage/Image.svg",
        imageAuthor: "jHonn",
        citation:
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          citationAuthor: "John Muir",
        subtitle3: "Unmasking the Unnoticed",
        paragraph3:
          "There's a magic in pausing and observing. By simply stopping and looking around, we unearth stories that have been silently narrating tales of beauty, resilience, and evolution.",
        subtitle4: "Bridges Between Worlds",
        paragraph4:
          "Connecting with the world around us bridges the gap between the ordinary and the phenomenal. Every whisper of the wind, every rustle of the leaves has a story, a history, a lesson.",
        image3: "/blogImage/Image.svg",
        imageauthor2: "jhol",
        subtitle5: "The Power of Pause",
        paragraph5:
          "In this ever-hurrying world, the act of pausing can be revolutionary. It's in these moments of stillness that we often find the most profound insights, leading us to a deeper understanding and appreciation of life's intricacies.",

        authorImage: "/blogImage/Image.svg",
        authorName: "John Doe",
        authorJob: "CEO",
        authorBio: "This is the biography of John Doe"
      },
      date: "2021-01-01",
      categories: [categorieList[0],categorieList[1]] ,
      author: "John Doe",
      image: "/blogImage/Image.svg",
      public: true,
      slug: "blog-post-3"
    }
  },
  {
    id: 4,
    title: "Blog Post 4",
    preview: "This is a preview of Blog Post 4",
    date: "2021-01-01",
    categories: [categorieList[0].name + " " + categorieList[1].name],
    author: "John Doe",
    image: "/blogImage/Image.svg",
    public: true,
    slug: "blog-post-4",
    blogPostsComplete: {
      id: 4,
      title: "Blog Post 4",
      preview: "This is a preview of Blog Post 4",
     content: {
        subtitle: "A New Perspective on the Ordinary",
      supportingText: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",
        imageCarrousel: ["/blogImage/Image.svg", "/blogImage/Image.svg"],

        paragraph1: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",

        imageparagraphe: "/blogImage/Image.svg",
        paragraph2:
        "Often, we walk past wonders without a second glance. Our routines and daily tasks make us numb to the beauty that's right in front of us. The chirping birds, the patterns on a leaf, or even the way shadows play on the ground during the golden hour. But with a change in perspective, the mundane can become extraordinary.",
        image2: "/blogImage/Image.svg",
        imageAuthor: "jHonn",
        citation:
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          citationAuthor: "John Muir",
        subtitle3: "Unmasking the Unnoticed",
        paragraph3:
          "There's a magic in pausing and observing. By simply stopping and looking around, we unearth stories that have been silently narrating tales of beauty, resilience, and evolution.",
        subtitle4: "Bridges Between Worlds",
        paragraph4:
          "Connecting with the world around us bridges the gap between the ordinary and the phenomenal. Every whisper of the wind, every rustle of the leaves has a story, a history, a lesson.",
        image3: "/blogImage/Image.svg",
        imageauthor2: "jhol",
        subtitle5: "The Power of Pause",
        paragraph5:
          "In this ever-hurrying world, the act of pausing can be revolutionary. It's in these moments of stillness that we often find the most profound insights, leading us to a deeper understanding and appreciation of life's intricacies.",

        authorImage: "/blogImage/Image.svg",
        authorName: "John Doe",
        authorJob: "CEO",
        authorBio: "This is the biography of John Doe"
      },
      date: "2021-01-01",
      categories: [categorieList[0],categorieList[1]] ,
      author: "John Doe",
      image: "/blogImage/Image.svg",
      public: true,
      slug: "blog-post-4"
    }
  },
  {
    id: 5,
    title: "Blog Post 5",
    preview: "This is a preview of Blog Post 5",
    date: "2021-01-01",
    categories: [categorieList[0].name + " " + categorieList[1].name],
    author: "John Doe",
    image: "/blogImage/Image.svg",
    public: true,
    slug: "blog-post-5",
    blogPostsComplete: {
      id: 5,
      title: "Blog Post 5",
      preview: "This is a preview of Blog Post 5",
     content: {
        subtitle: "A New Perspective on the Ordinary",
      supportingText: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",
        imageCarrousel: ["/blogImage/Image.svg", "/blogImage/Image.svg"],

        paragraph1: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",

        imageparagraphe: "/blogImage/Image.svg",
        paragraph2:
        "Often, we walk past wonders without a second glance. Our routines and daily tasks make us numb to the beauty that's right in front of us. The chirping birds, the patterns on a leaf, or even the way shadows play on the ground during the golden hour. But with a change in perspective, the mundane can become extraordinary.",
        image2: "/blogImage/Image.svg",
        imageAuthor: "jHonn",
        citation:
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          citationAuthor: "John Muir",
        subtitle3: "Unmasking the Unnoticed",
        paragraph3:
          "There's a magic in pausing and observing. By simply stopping and looking around, we unearth stories that have been silently narrating tales of beauty, resilience, and evolution.",
        subtitle4: "Bridges Between Worlds",
        paragraph4:
          "Connecting with the world around us bridges the gap between the ordinary and the phenomenal. Every whisper of the wind, every rustle of the leaves has a story, a history, a lesson.",
        image3: "/blogImage/Image.svg",
        imageauthor2: "jhol",
        subtitle5: "The Power of Pause",
        paragraph5:
          "In this ever-hurrying world, the act of pausing can be revolutionary. It's in these moments of stillness that we often find the most profound insights, leading us to a deeper understanding and appreciation of life's intricacies.",

        authorImage: "/blogImage/Image.svg",
        authorName: "John Doe",
        authorJob: "CEO",
        authorBio: "This is the biography of John Doe"
      },
      date: "2021-01-01",
      categories: [categorieList[0],categorieList[1]] ,
      author: "John Doe",
      image: "/blogImage/Image.svg",
      public: true,
      slug: "blog-post-5"
    }
  },
  {
    id: 6,
    title: "Blog Post 6",
    preview: "This is a preview of Blog Post 6",
    date: "2021-01-01",
    categories: [categorieList[0].name + " " + categorieList[1].name],
    author: "John Doe",
    image: "/blogImage/Image.svg",
    public: true,
    slug: "blog-post-6",
    blogPostsComplete: {
      id: 6,
      title: "Blog Post 6",
      preview: "This is a preview of Blog Post 6",
     content: {
        subtitle: "A New Perspective on the Ordinary",
      supportingText: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",
        imageCarrousel: ["/blogImage/Image.svg", "/blogImage/Image.svg"],

        paragraph1: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",

        imageparagraphe: "/blogImage/Image.svg",
        paragraph2:
        "Often, we walk past wonders without a second glance. Our routines and daily tasks make us numb to the beauty that's right in front of us. The chirping birds, the patterns on a leaf, or even the way shadows play on the ground during the golden hour. But with a change in perspective, the mundane can become extraordinary.",
        image2: "/blogImage/Image.svg",
        imageAuthor: "jHonn",
        citation:
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          citationAuthor: "John Muir",
        subtitle3: "Unmasking the Unnoticed",
        paragraph3:
          "There's a magic in pausing and observing. By simply stopping and looking around, we unearth stories that have been silently narrating tales of beauty, resilience, and evolution.",
        subtitle4: "Bridges Between Worlds",
        paragraph4:
          "Connecting with the world around us bridges the gap between the ordinary and the phenomenal. Every whisper of the wind, every rustle of the leaves has a story, a history, a lesson.",
        image3: "/blogImage/Image.svg",
        imageauthor2: "jhol",
        subtitle5: "The Power of Pause",
        paragraph5:
          "In this ever-hurrying world, the act of pausing can be revolutionary. It's in these moments of stillness that we often find the most profound insights, leading us to a deeper understanding and appreciation of life's intricacies.",

        authorImage: "/blogImage/Image.svg",
        authorName: "John Doe",
        authorJob: "CEO",
        authorBio: "This is the biography of John Doe"
      },
      date: "2021-01-01",
      categories: [categorieList[0],categorieList[1]] ,
      author: "John Doe",
      image: "/blogImage/Image.svg",
      public: true,
      slug: "blog-post-6"
    }
  },
  {
    id: 7,
    title: "Blog Post 7",
    preview: "This is a preview of Blog Post 7",
    date: "2021-01-01",
    categories: [categorieList[0].name + " " + categorieList[1].name],
    author: "John Doe",
    image: "/blogImage/Image.svg",
    public: true,
    slug: "blog-post-7",
    blogPostsComplete: {
      id: 7,
      title: "Blog Post 7",
      preview: "This is a preview of Blog Post 7",
     content: {
        subtitle: "A New Perspective on the Ordinary",
      supportingText: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",
        imageCarrousel: ["/blogImage/Image.svg", "/blogImage/Image.svg"],

        paragraph1: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",

        imageparagraphe: "/blogImage/Image.svg",
        paragraph2:
        "Often, we walk past wonders without a second glance. Our routines and daily tasks make us numb to the beauty that's right in front of us. The chirping birds, the patterns on a leaf, or even the way shadows play on the ground during the golden hour. But with a change in perspective, the mundane can become extraordinary.",
        image2: "/blogImage/Image.svg",
        imageAuthor: "jHonn",
        citation:
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          citationAuthor: "John Muir",
        subtitle3: "Unmasking the Unnoticed",
        paragraph3:
          "There's a magic in pausing and observing. By simply stopping and looking around, we unearth stories that have been silently narrating tales of beauty, resilience, and evolution.",
        subtitle4: "Bridges Between Worlds",
        paragraph4:
          "Connecting with the world around us bridges the gap between the ordinary and the phenomenal. Every whisper of the wind, every rustle of the leaves has a story, a history, a lesson.",
        image3: "/blogImage/Image.svg",
        imageauthor2: "jhol",
        subtitle5: "The Power of Pause",
        paragraph5:
          "In this ever-hurrying world, the act of pausing can be revolutionary. It's in these moments of stillness that we often find the most profound insights, leading us to a deeper understanding and appreciation of life's intricacies.",

        authorImage: "/blogImage/Image.svg",
        authorName: "John Doe",
        authorJob: "CEO",
        authorBio: "This is the biography of John Doe"
      },
      date: "2021-01-01",
      categories: [categorieList[0],categorieList[1]] ,
      author: "John Doe",
      image: "/blogImage/Image.svg",
      public: true,
      slug: "blog-post-7"
    }
  },
  {
    id: 8,
    title: "Blog Post 8",
    preview: "This is a preview of Blog Post 8",
    date: "2021-01-01",
    categories: [categorieList[0].name + " " + categorieList[1].name],
    author: "John Doe",
    image: "/blogImage/Image.svg",
    public: true,
    slug: "blog-post-8",
    blogPostsComplete: {
      id: 8,
      title: "Blog Post 8",
      preview: "This is a preview of Blog Post 8",
     content: {
        subtitle: "A New Perspective on the Ordinary",
      supportingText: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",
        imageCarrousel: ["/blogImage/Image.svg", "/blogImage/Image.svg"],

        paragraph1: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",

        imageparagraphe: "/blogImage/Image.svg",
        paragraph2:
        "Often, we walk past wonders without a second glance. Our routines and daily tasks make us numb to the beauty that's right in front of us. The chirping birds, the patterns on a leaf, or even the way shadows play on the ground during the golden hour. But with a change in perspective, the mundane can become extraordinary.",
        image2: "/blogImage/Image.svg",
        imageAuthor: "jHonn",
        citation:
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          citationAuthor: "John Muir",
        subtitle3: "Unmasking the Unnoticed",
        paragraph3:
          "There's a magic in pausing and observing. By simply stopping and looking around, we unearth stories that have been silently narrating tales of beauty, resilience, and evolution.",
        subtitle4: "Bridges Between Worlds",
        paragraph4:
          "Connecting with the world around us bridges the gap between the ordinary and the phenomenal. Every whisper of the wind, every rustle of the leaves has a story, a history, a lesson.",
        image3: "/blogImage/Image.svg",
        imageauthor2: "jhol",
        subtitle5: "The Power of Pause",
        paragraph5:
          "In this ever-hurrying world, the act of pausing can be revolutionary. It's in these moments of stillness that we often find the most profound insights, leading us to a deeper understanding and appreciation of life's intricacies.",

        authorImage: "/blogImage/Image.svg",
        authorName: "John Doe",
        authorJob: "CEO",
        authorBio: "This is the biography of John Doe"
      },
      date: "2021-01-01",
      categories: [categorieList[0],categorieList[1]] ,
      author: "John Doe",
      image: "/blogImage/Image.svg",
      public: true,
      slug: "blog-post-8"
    }
  },
  {
    id: 9,
    title: "Blog Post 9",
    preview: "This is a preview of Blog Post 9",
    date: "2021-01-01",
    categories: [categorieList[0].name + " " + categorieList[1].name],
    author: "John Doe",
    image: "/blogImage/Image.svg",
    public: true,
    slug: "blog-post-9",
    blogPostsComplete: {
      id: 9,
      title: "Blog Post 9",
      preview: "This is a preview of Blog Post 9",
     content: {
        subtitle: "A New Perspective on the Ordinary",
      supportingText: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",
        imageCarrousel: ["/blogImage/Image.svg", "/blogImage/Image.svg"],

        paragraph1: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",

        imageparagraphe: "/blogImage/Image.svg",
        paragraph2:
        "Often, we walk past wonders without a second glance. Our routines and daily tasks make us numb to the beauty that's right in front of us. The chirping birds, the patterns on a leaf, or even the way shadows play on the ground during the golden hour. But with a change in perspective, the mundane can become extraordinary.",
        image2: "/blogImage/Image.svg",
        imageAuthor: "jHonn",
        citation:
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          citationAuthor: "John Muir",
        subtitle3: "Unmasking the Unnoticed",
        paragraph3:
          "There's a magic in pausing and observing. By simply stopping and looking around, we unearth stories that have been silently narrating tales of beauty, resilience, and evolution.",
        subtitle4: "Bridges Between Worlds",
        paragraph4:
          "Connecting with the world around us bridges the gap between the ordinary and the phenomenal. Every whisper of the wind, every rustle of the leaves has a story, a history, a lesson.",
        image3: "/blogImage/Image.svg",
        imageauthor2: "jhol",
        subtitle5: "The Power of Pause",
        paragraph5:
          "In this ever-hurrying world, the act of pausing can be revolutionary. It's in these moments of stillness that we often find the most profound insights, leading us to a deeper understanding and appreciation of life's intricacies.",

        authorImage: "/blogImage/Image.svg",
        authorName: "John Doe",
        authorJob: "CEO",
        authorBio: "This is the biography of John Doe"
      },
      date: "2021-01-01",
      categories: [categorieList[0],categorieList[1]] ,
      author: "John Doe",
      image: "/blogImage/Image.svg",
      public: true,
      slug: "blog-post-9"
    }
  },
  {
    id: 10,
    title: "Blog Post 10",
    preview: "This is a preview of Blog Post 10",
    date: "2021-01-01",
    categories: [categorieList[0].name + " " + categorieList[1].name, "Sport"],
    author: "John Doe",
    image: "/blogImage/Image.svg",
    public: true,
    slug: "blog-post-10",
    blogPostsComplete: {
      id: 10,
      title: "Blog Post 10",
      preview: "This is a preview of Blog Post 10",
     content: {
        subtitle: "A New Perspective on the Ordinary",
      supportingText: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",
        imageCarrousel: ["/blogImage/Image.svg", "/blogImage/Image.svg"],

        paragraph1: "The world is full of mysteries waiting to be unraveled. Our surroundings are brimming with secrets, untold stories, and lessons yet to be learned. As we dive into this article, you'll discover unexpected treasures in places you'd never think to look.",

        imageparagraphe: "/blogImage/Image.svg",
        paragraph2:
        "Often, we walk past wonders without a second glance. Our routines and daily tasks make us numb to the beauty that's right in front of us. The chirping birds, the patterns on a leaf, or even the way shadows play on the ground during the golden hour. But with a change in perspective, the mundane can become extraordinary.",
        image2: "/blogImage/Image.svg",
        imageAuthor: "jHonn",
        citation:
          '"In every walk with nature, one receives far more than he seeks." - John Muir',
          citationAuthor: "John Muir",
        subtitle3: "Unmasking the Unnoticed",
        paragraph3:
          "There's a magic in pausing and observing. By simply stopping and looking around, we unearth stories that have been silently narrating tales of beauty, resilience, and evolution.",
        subtitle4: "Bridges Between Worlds",
        paragraph4:
          "Connecting with the world around us bridges the gap between the ordinary and the phenomenal. Every whisper of the wind, every rustle of the leaves has a story, a history, a lesson.",
        image3: "/blogImage/Image.svg",
        imageauthor2: "jhol",
        subtitle5: "The Power of Pause",
        paragraph5:
          "In this ever-hurrying world, the act of pausing can be revolutionary. It's in these moments of stillness that we often find the most profound insights, leading us to a deeper understanding and appreciation of life's intricacies.",

        authorImage: "/blogImage/Image.svg",
        authorName: "John Doe",
        authorJob: "CEO",
        authorBio: "This is the biography of John Doe"
      },
      date: "2021-01-01",
     
        categories: [categorieList[0],categorieList[1]] 
      ,
      author: "John Doe",
      image: "/blogImage/Image.svg",
      public: true,
      slug: "blog-post-10"
    }
  }
];

// export const blogPostscomplete=[
//     {
//         id: 0,
//         title: 'Blog Post 0',
//         preview: 'This is a preview of Blog Post 0',
//         date: "2021-01-01",
//     categories: [categorieList[0].name+" "+ categorieList[1].name],
//     author: 'John Doe',
//     image: '/blogImage/Image.svg',
//     public:true,
//     slug:'blog-post-0',
//     blogPostsComplete:{

//         id: 0,
//         title: 'Blog Post 0',
//         preview: 'This is a preview of Blog Post 0',
//         content: 'This is the content of Blog Post 0',
//         date: "2021-01-01",
//         categories: [categorieList[0].name+" "+ categorieList[1].name],
//         author: 'John Doe',
//         image: '/blogImage/Image.svg',
//         public:true,
//         slug:'blog-post-0'

//     }
//     },
//     {
//         id: 1,
//         title: 'Blog Post 1',
//         preview: 'This is a preview of Blog Post 1',
//         date: "2021-01-01",
//     categories: [categorieList[0].name+" "+ categorieList[1].name],
//     author: 'John Doe',
//     image: '/blogImage/Image.svg',
//     public:true,
//     slug:'blog-post-1',
//     blogPostsComplete:{

//         id: 1,
//         title: 'Blog Post 1',
//         preview: 'This is a preview of Blog Post 1',
//         content: 'This is the content of Blog Post 1',
//         date: "2021-01-01",
//         categories: [categorieList[0].name+" "+ categorieList[1].name],
//         author: 'John Doe',
//         image: '/blogImage/Image.svg',
//         public:true,
//         slug:'blog-post-1'
//     }
// },
// {
//     id: 2,
//     title: 'Blog Post 2',
//     preview: 'This is a preview of Blog Post 2',
//     date: "2021-01-01",
//     categories: [categorieList[0].name+" "+ categorieList[1].name],
//     author: 'John Doe',
//     image: '/blogImage/Image.svg',
//     public:true,
//     slug:'blog-post-2',
//     blogPostsComplete:{
//         id: 2,
//         title: 'Blog Post 2',
//         preview: 'This is a preview of Blog Post 2',
//         content: 'This is the content of Blog Post 2',
//         date: "2021-01-01",
//         categories: [categorieList[0].name+" "+ categorieList[1].name],
//         author: 'John Doe',
//         image: '/blogImage/Image.svg',
//         public:true,
//         slug:'blog-post-2'
//     }

// }
// ,
// {
//     id: 3,
//     title: 'Blog Post 3',
//     preview: 'This is a preview of Blog Post 3',
//     date: "2021-01-01",
//     categories: [categorieList[0].name+" "+ categorieList[1].name],
//     author: 'John Doe',
//     image: '/blogImage/Image.svg',
//     public:true,
//     slug:'blog-post-3',
//     blogPostsComplete:{
//         id: 3,
//         title: 'Blog Post 3',
//         preview: 'This is a preview of Blog Post 3',
//         content: 'This is the content of Blog Post 3',
//         date: "2021-01-01",
//         categories: [categorieList[0].name+" "+ categorieList[1].name],

//     }

// }
// ,

// ]
