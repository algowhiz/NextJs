import Link from 'next/link'
import React from 'react'

const f1Page = () => {
  return (
    <div>
        f1Page
        <Link href={'/intercepting_routes/f1/f2'} >F2</Link>
    </div>
  )
}

export default f1Page