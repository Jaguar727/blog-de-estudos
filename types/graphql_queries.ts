export interface Postcard {
  node: {
    author: Author,
    createdAt: Date,
    slug: string,
    title: string,
    excerpt: string,
    featuredImage: {
      url: string
    },
    categories: Array<Category>
  }
}

export interface Post {
    author: Author,
    createdAt: Date,
    slug: string,
    title: string,
    excerpt: string,
    featuredImage: {
        url: string
    },
    categories: Array<Category>
}

export interface Author {
  bio: string,
  name: string,
  id: number,
  photo?: {
    url: string
  }
}

export interface Category {
  name: string,
  slug: string
}