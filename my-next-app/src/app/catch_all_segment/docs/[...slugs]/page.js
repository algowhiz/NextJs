import React from 'react'
import Link from 'next/link'

const productId = ({ params }) => {
    console.log(params);
    console.log("h");


    return (
        <div>
            {params?.slugs?.length==2 &&
                    <h1>viewing docs for feature {params?.slugs[0]} and concept for  {params?.slugs[1]}</h1>
                }
            {params?.slugs?.length==1 &&
                    <h1>viewing docs for feature {params?.slugs[0]} </h1>
                }

        </div>

    )
}

export default productId