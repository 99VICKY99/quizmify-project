'use client';
import { SessionProvider } from 'next-auth/react';
import React, { use } from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes"



const Provider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} {...props}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </ThemeProvider>
    
  )
}

export default Provider