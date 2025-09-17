// src/components/Admin/UserManageModal.tsx
import React, { useEffect } from 'react'
import type { AdminUserRow } from '@/types/user'

type Props = {
  open: boolean
  user: AdminUserRow | null
  onClose: () => void
  onDelete: () => void
}

const UserManageModal: React.FC<Props> = ({
  open,
  user,
  onClose,
  onDelete,
}) => {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open || !user) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      {/* dialog */}
      <div className="relative z-10 w-[90vw] max-w-md rounded-xl border border-zinc-700 bg-neutral-900 text-zinc-100 shadow-2xl">
        {/* header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-zinc-800">
          <h3 className="text-sm font-semibold">사용자 관리</h3>
          <button
            aria-label="닫기"
            className="rounded-md p-1.5 hover:bg-zinc-800 text-zinc-300"
            onClick={onClose}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* body */}
        <div className="px-5 py-4">
          <p className="text-sm text-zinc-300">
            <span className="font-medium">{user.name}</span>님의 프로필
          </p>
        </div>

        {/* footer: 오른쪽 정렬 (취소 + 삭제 나란히) */}
        <div className="flex items-center justify-end gap-2 px-5 pb-4">
          <button
            onClick={onDelete}
            className="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-red-600 hover:bg-red-500 text-white"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserManageModal
