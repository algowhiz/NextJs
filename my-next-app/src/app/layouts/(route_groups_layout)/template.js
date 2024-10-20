"use client"
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({ children }) {

  const [val,setVal] = useState("");
  // by using layout if we go to signup to login or login to signup then the state var data does'nt change so we can use templates only name of file hasto chnge
    return (
        <div >
          <h1>This is inner layout   </h1>
          <input value={val} onChange={ e => setVal(e.target.value)}  type="text"/>
          <Link href="http://localhost:3000/layouts/signup">Signup</Link>
          {children}
        </div>
    );
  }