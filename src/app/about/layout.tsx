import React, { Children } from 'react'
// یک لیوت اختصاصی میتونیم به این شکل درست کنیم

function AboutLayout({
     children,
}:Readonly<{
  children:React.ReactNode;
}>) {
  return (
    <div>
      AboutLayout
      {children}
    </div>
  )
}

export default AboutLayout
