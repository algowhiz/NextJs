import React from 'react'
import Link from 'next/link'

const productId = ({params}) => {
  return (
    <div>
        <h1>product Deatils for  {params.productId}</h1>
        <Link href={`/nested_dynamic_route/products/${params.productId}/reviews/${params.productId}`}>go to review</Link>
    </div>
    
  )
}

export default productId