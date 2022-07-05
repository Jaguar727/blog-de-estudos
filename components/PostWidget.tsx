import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services/graphcmsclient'
import Link from 'next/link'

const PostWidget = ({ categories, slug }: {categories: string, slug: string}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug) 
        .then((result) => setRelatedPosts(result))
      } else {
        getRecentPosts()
          .then((result) => setRelatedPosts(result))
      }
  }, [slug])

  return (
    <div className='bg-slate-700 shadow-xl rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug? 'Posts Relacionados' : 'Posts Recentes'}
      </h3>
      {relatedPosts.map((post: any) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className='w-16 flex-none'>
            <img className='align-middle rounded-full shadow-md border-gray-500 border-[1px]'
            src={post.featuredImage.url} 
            alt={post.title} />
          </div>
          <div className='flex-row ml-4'>
            <p className='text-sm text-gray-300'>
              {moment(post.createdAt).format('DD/MM/YY')}
            </p>
            <Link href ={`/post/${post.slug}`}  key ={post.title} className='text-lg'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
      </div>
  )
}

export default PostWidget