import Head from 'next/head'
import { PostCard, Categories, PostWidget, Header } from '../components'
import { getPosts } from '../services/graphcmsclient'
import { Category, Post } from '../types/graphql_queries'

interface HomeProps {
  posts: Array<Post>,
  categories: Array<Category>
}

export default function Home({posts, categories}: HomeProps) {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'> 
          {posts.length  
            ? (posts.map((post, index) => 
              <PostCard post = {post} key={index} />        
            )) 
            : <h3>Impossível carregar os posts.</h3>
          }
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget categories={''} slug={''} />
            <Categories categories={categories}/>
          </div>
        </div>    
      </div>
    </div>
  )
}

export async function getStaticProps() {

  
// TODO : FAZER A REQUEST DE CATEGORIES, PASSAR COMO +1 PROPS
const categories: Array<Category> = [] 


  const posts = await getPosts() ?? []

  return {
    props: { posts, categories } as HomeProps
  }
}
