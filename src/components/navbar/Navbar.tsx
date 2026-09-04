// با استفاده از این کلاینت شد یک کامپوننت کلاینت 
// زمانی که استفاده کنیم ازش دیگ اون صفحه برای ما سیو نمیشه
"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {
    const pathName=usePathname();
    const router = useRouter()
    const navs =[
        {
            title:"Home",
            link:"/"
        },
          {
            title:"About",
            link:"/about"
        }
    ]
    const handleClick = ()=>{
        // کلیک میکنیم یکی میره عقب پیج
        // router.back()
        // پوش کلیک شد بره به صفحه دیگه
        // اینجا هیستوری رو در خودش نگه میداره از قبل
        // router.push("/ssss")
        // اینجا هیستوری رو پاک میکنه و میره تو صفحه مورد نظر 
        // router.replace("/about")
        // میره تو صفحه جلویی
        // router.forward()
        // صفحه را رفرش میکنه
        // router.refresh()
    }
  return (
    <div className='p-4 border-b'>
       <nav>
         <ul className='flex'>
       {
  navs.map(item => (
    <li key={item.link} className="mr-4">
      <Link className={item.link === pathName ?"text-blue-500" : "text-red-500"} href={item.link}>{item.title}</Link>
    </li>
  ))
}
         </ul>
         <button onClick={handleClick} className='bg-blue-500 text-white px-6 py-2 rounded'>
            Click
         </button>
       </nav>
    </div>
  )
}

export default Navbar
