import React from 'react'
import { Category } from '../types/graphql_queries'

interface CategoriesProps {
  categories: Array<Category>
}
const Categories = ({}: CategoriesProps) => {
  return (
    <div>Categories</div>
  )
}

export default Categories