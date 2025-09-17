// src/pages/Admin/AdminUser.tsx
import React, { useMemo, useState } from 'react'
import type { AdminUserRow } from '@/types/user'
import Toast from '@/components/common/Toast'
import UserManageModal from '@/components/Admin/UserManageModal'
import UserListItem from '@/components/Admin/UserListItem'

const initialUsers: AdminUserRow[] = [
  {
    id: '1',
    name: 'Ttangkong',
    email: 'ttankkeo112@gmail.com',
    avatar: 'https://i.pravatar.cc/100?img=68',
  },
  { id: '2', name: 'User 1', email: 'user1@gmail.com' },
  { id: '3', name: 'User 2', email: 'user2@gmail.com' },
]

const AdminUser: React.FC = () => {
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState<AdminUserRow[]>(initialUsers)

  const [selected, setSelected] = useState<AdminUserRow | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const [toastOpen, setToastOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return users
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q),
    )
  }, [users, query])

  const openManage = (u: AdminUserRow) => {
    setSelected(u)
    setModalOpen(true)
  }

  const handleDelete = () => {
    if (!selected) return
    setUsers((prev) => prev.filter((u) => u.id !== selected.id))
    setModalOpen(false)
    setToastMsg(`${selected.name} 사용자를 삭제했습니다.`)
    setToastOpen(true)
    setSelected(null)
  }

  return (
    <div className="w-full min-h-screen bg-neutral-800 flex flex-col">
      <main className="mx-auto w-full max-w-[72rem] px-4 md:px-6 py-8 md:py-10">
        {/* 상단 타이틀 + 검색 */}
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-base md:text-lg font-semibold text-zinc-100">
              사용자 목록
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              전체 {filtered.length}건
            </p>
          </div>

          <div className="relative w-full max-w-xs">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21l-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="검색"
              className="pl-9 h-9 w-full rounded-full bg-black border border-neutral-700 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60"
            />
          </div>
        </div>

        {/* 리스트 */}
        <div className="space-y-3">
          {filtered.map((u) => (
            <UserListItem key={u.id} user={u} onManage={openManage} />
          ))}

          {filtered.length === 0 && (
            <div className="text-center text-zinc-400 py-12 rounded-xl border border-dashed border-zinc-700 bg-neutral-900/40">
              검색 결과가 없습니다.
            </div>
          )}
        </div>
      </main>

      {/* 모달 */}
      <UserManageModal
        open={modalOpen}
        user={selected}
        onClose={() => setModalOpen(false)}
        onDelete={handleDelete}
      />

      {/* 토스트 */}
      <Toast
        open={toastOpen}
        message={toastMsg}
        onClose={() => setToastOpen(false)}
      />
    </div>
  )
}

export default AdminUser
