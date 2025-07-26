import React from 'react'
import { User } from 'next-auth'

type Props = {
    user: Pick<User,"name" | "email" | "image">
}

const UserAccountNav = ({user}: Props) => {
  return (
    <div>UserAccountNav</div>
  )
}

export default UserAccountNav