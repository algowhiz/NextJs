import Link from 'next/link'
import React from 'react'

const f4Page = () => {
  return (
    <div>
        f4 Page
        <Link href={'/intercepting_routes/f1/f3'} >F3</Link>
        <Link href={'/login'} >login</Link>
    </div>
  )
}

export default f4Page