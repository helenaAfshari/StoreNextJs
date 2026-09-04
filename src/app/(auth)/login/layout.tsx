import React from 'react'

function LoginLayout ({
    children,
}: Readonly<{
    children:React.ReactNode
}>) {
  return (
    <div>
        LoginLayout
        {children}
      
    </div>
  )
}

export default LoginLayout
