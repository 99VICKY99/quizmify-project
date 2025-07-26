'use client';
import { SessionProvider } from 'next-auth/react';
import React, { use } from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes"



const Provider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
      <SessionProvider>
      {children}
    </SessionProvider>

    </ThemeProvider>
    
  )
}

export default Provider







// "use client"

// import * as React from "react"
// import { ThemeProvider as NextThemesProvider } from "next-themes"

// export function ThemeProvider({
//   children,
//   ...props
// }: React.ComponentProps<typeof NextThemesProvider>) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// }