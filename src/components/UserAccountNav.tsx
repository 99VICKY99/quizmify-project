'use client';
import React from 'react'
import { User } from 'next-auth'
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent } from './ui/dropdown-menu'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { Button } from './ui/button';

type Props = {
    user: Pick<User,"name" | "email" | "image">
}

const UserAccountNav = ({user}: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            {/*use avatar */}
            <Button>hi</Button>
            <DropdownMenuContent className='bg-white' align='end'>
                <div className="flex items-center justify-start gap-2 p-2">
                   <div className='flex flex-col space-y-1 leading-none'>
                    {user.name && <p className='text-sm font-medium'>{user.name}</p>}
                    {user.email && (
                        <p className='w-[200px] truncate text-sm text-zinc-700'>
                            {user.email}
                        </p>
                    )}
                   </div>
                </div>

                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/">Meow</Link>
                </DropdownMenuItem> 

                    <DropdownMenuSeparator />
                <DropdownMenuItem  onClick={(e)=>{
                    e.preventDefault();
                    signOut().catch(console.error);
                }}
                className=' text-red-600 cursor-pointer'>
                
                    Sign Out
                </DropdownMenuItem>

                </DropdownMenuContent>
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default UserAccountNav