import { Avatar } from '@radix-ui/react-avatar'
import { User } from 'next-auth'
import React from 'react'
import { AvatarFallback } from './ui/avatar'
import Image from 'next/image'

type Props = {
    user: Pick<User, 'name' | 'image'>
}

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar className="w-8 h-8">
      {user.image ? (
        <div className="relative w-8 h-8">
          <Image
            src={user.image}
            alt="profile image"
            fill
            referrerPolicy="no-referrer"
            className="object-cover rounded-full"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  )
}

export default UserAvatar