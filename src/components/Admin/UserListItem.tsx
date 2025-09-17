// src/components/Admin/UserListItem.tsx
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/UI/avatar'
import type { AdminUserRow } from '@/types/user'

type Props = {
  user: AdminUserRow
  onManage: (u: AdminUserRow) => void
}

const UserListItem: React.FC<Props> = ({ user, onManage }) => {
  return (
    <div className="bg-neutral-900/90 border border-zinc-800 rounded-xl px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar className="w-[50px] h-[50px]">
          {user.avatar ? (
            <AvatarImage src={user.avatar} alt={user.name} />
          ) : (
            <AvatarFallback className="bg-neutral-700 text-white">
              {user.name?.[0] ?? 'U'}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="leading-tight">
          <div className="text-white text-base">{user.name}</div>
          <div className="text-neutral-400 text-xs">{user.email}</div>
        </div>
      </div>

      <button
        onClick={() => onManage(user)}
        className="px-4 py-2 rounded-full text-blue-500 font-bold hover:text-blue-400"
      >
        관리
      </button>
    </div>
  )
}

export default UserListItem
