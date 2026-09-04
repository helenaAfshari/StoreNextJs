// اینو گذاشتیم  که از هوک ها استفاده کنیم
"use client"
import Link from 'next/link'
import React, { useState } from 'react'
// template
// یعنی تغییر اعمال کنه نه این که تو هرصفحه ایی رفتیم ثابت باشه هرچی اینجا اعمال کنیم تغییر پیدا کنه تو هرصفحه ایی
// هر صفحه ایی که داخل پوشه  auth
// هست رو ما اول صفحه میبینیم این صفحرو
// مثلا اینجا میتونیم تو هر صفحه که رفتیم مقدار  اینپوت رو متفاوت بزاریم درونش ذخیره نمیشه
function AuthLayout({
    children,
}: Readonly<{
    children:React.ReactNode
}>) {
    const [input,setInput] =useState("")
  return (
    <div>
      AuthLayout
      <br />
      <Link className='mr-4' href="/register">Register</Link>
      <Link className='mr-4' href="/login">login</Link>
      <Link className='mr-4' href="/forget-password">forgetPassword</Link>
      <br />
      <input className='bg-amber-500' onChange={(e)=>setInput(e.target.value)} type="text" value={input} />
      {children}
    </div>
  )
}

export default AuthLayout
