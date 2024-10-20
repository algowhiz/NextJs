import Link from "next/link"
export default function() {
    return (
        <div>
            <h1>Dynamic Routing page</h1><br/><br/>
            <Link href='/dynamic_route/products/1' ><h2>Product 1</h2></Link><br/>
            <Link href='/dynamic_route/products/2' ><h2>Product 2</h2></Link><br/>
            <Link href='/dynamic_route/products/3' ><h2>Product 3</h2></Link><br/>
        </div>
    )
}