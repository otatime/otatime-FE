// src/pages/AdminUser.tsx
import React, { useMemo, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/UI/avatar'

// 가벼운 토스트 (외부 라이브러리 X)
function Toast({
  open,
  message,
  onClose,
}: {
  open: boolean
  message: string
  onClose: () => void
}) {
  if (!open) return null
  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      <div className="rounded-xl border border-zinc-700 bg-neutral-900 text-zinc-100 shadow-lg px-4 py-3 text-sm flex items-center gap-3">
        <span className="max-w-[60vw]">{message}</span>
        <button
          className="ml-2 px-2 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
          onClick={onClose}
        >
          확인
        </button>
      </div>
    </div>
  )
}

type UserRow = {
  id: string
  name: string
  email: string
  avatar?: string
}

const initialUsers: UserRow[] = [
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
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [users] = useState<UserRow[]>(initialUsers)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return users
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q),
    )
  }, [users, query])

  const manage = (u: UserRow) => {
    // 실제 페이지가 있으면 navigate(`/admin/users/${u.id}`)
    setToastMsg(`${u.name} 관리 페이지로 이동합니다.`)
    setToastOpen(true)
  }

  return (
    <div className="w-full min-h-screen bg-neutral-800 flex flex-col">
      {/* Main: 좌우 여백 + 위/아래 패딩 (헤더/사이드바는 외부 레이아웃에서 처리) */}
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

          {/* 검색 박스 */}
          <div className="relative w-full max-w-xs">
            {/* search icon */}
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
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

        {/* 리스트 카드 영역 */}
        <div className="space-y-3">
          {filtered.map((u) => (
            <div
              key={u.id}
              className="bg-neutral-900/90 border border-zinc-800 rounded-xl px-4 py-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-[50px] h-[50px]">
                  {u.avatar ? (
                    <AvatarImage src={u.avatar} alt={u.name} />
                  ) : (
                    <AvatarFallback className="bg-neutral-700 text-white">
                      {u.name?.[0] ?? 'U'}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="leading-tight">
                  <div className="text-white text-base">{u.name}</div>
                  <div className="text-neutral-400 text-xs">{u.email}</div>
                </div>
              </div>

              <button
                onClick={() => manage(u)}
                className="px-4 py-2 rounded-full text-blue-500 font-bold hover:text-blue-400"
              >
                관리
              </button>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center text-zinc-400 py-12 rounded-xl border border-dashed border-zinc-700 bg-neutral-900/40">
              검색 결과가 없습니다.
            </div>
          )}
        </div>
      </main>

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
