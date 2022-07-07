import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Category } from '../types/graphql_queries'
import { getCategories } from '../services/graphcmsclient'


interface CategoriesProps {
  categories: Array<Category>
}

const Categories = ({}: CategoriesProps) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-slate-700 shadow-xl rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categorias
      </h3>
      {categories.map((category: Category) => (
        <Link key={category.slug} href = {`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link>

      ))}
    </div>
  )
}

export default Categories