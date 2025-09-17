// src/pages/AdminReport.tsx
import React, { useMemo, useState } from 'react'

type ReportRow = {
  id: string
  title: string
  location: string
  category: string
  posted: boolean
}

const initialData: ReportRow[] = [
  {
    id: '1',
    title: 'SPY×FAMILY - 2025년 8월 9일부터 개관! (가상)',
    location: '대한민국, 서울',
    category: '애니메이션, 콜라보카페',
    posted: false,
  },
  {
    id: '2',
    title: 'NIKE - 2025년 8월 9일부터 개점! (가상)',
    location: '대한민국, 서울',
    category: '애니메이션, 콜라보카페',
    posted: false,
  },
  {
    id: '3',
    title: '블루 아카이브 - 2025년 8월 9일부터 개최! (가상)',
    location: '대한민국, 서울',
    category: '애니메이션, 콜라보카페',
    posted: false,
  },
]

// 가벼운 토스트 컴포넌트 (외부 라이브러리 X)
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

const AdminReport: React.FC = () => {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [rows, setRows] = useState<ReportRow[]>(initialData)

  const [toastOpen, setToastOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')

  const showToast = (msg: string) => {
    setToastMsg(msg)
    setToastOpen(true)
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return rows
    return rows.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q),
    )
  }, [rows, query])

  const onRefresh = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600)) // API 자리
    setLoading(false)
    showToast('최신 제보 목록으로 업데이트했습니다.')
  }

  const onPost = (id: string) => {
    const item = rows.find((r) => r.id === id)
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, posted: true } : r)),
    )
    showToast(`${item?.title ?? '항목'} 이(가) 게시되었습니다.`)
  }

  return (
    <div className="w-full min-h-screen bg-neutral-800">
      {/* 콘텐츠 래퍼 */}
      <main className="mx-auto w-full max-w-[72rem] px-4 md:px-6 py-8 md:py-10">
        {/* 타이틀 + 검색 */}
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-base md:text-lg font-semibold text-zinc-100">
              제보된 행사
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              전체 {filtered.length}건
            </p>
          </div>

          {/* 검색 */}
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
              className="pl-9 h-9 w-full rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60"
            />
          </div>
        </div>

        {/* 테이블 카드 */}
        <div className="rounded-2xl border border-zinc-800 bg-neutral-900/90 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="text-left text-zinc-300">
              <tr className="border-b border-zinc-800">
                <th className="py-3 px-4">제목</th>
                <th className="py-3 px-4 w-[180px]">위치</th>
                <th className="py-3 px-4 w-[220px]">분류</th>
                <th className="py-3 px-4 w-[120px] text-right">상태</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="py-12 px-4 text-center text-zinc-400"
                  >
                    검색 결과가 없습니다.
                  </td>
                </tr>
              ) : (
                filtered.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-zinc-800/60 hover:bg-zinc-800/40"
                  >
                    <td className="py-3 px-4 text-zinc-200">{row.title}</td>
                    <td className="py-3 px-4 text-zinc-300">{row.location}</td>
                    <td className="py-3 px-4 text-zinc-300">{row.category}</td>
                    <td className="py-3 px-4">
                      <div className="flex justify-end">
                        {row.posted ? (
                          <span className="inline-flex items-center rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700 px-2.5 py-1">
                            게시됨
                          </span>
                        ) : (
                          <button
                            onClick={() => onPost(row.id)}
                            className="text-blue-400 hover:text-blue-300 font-medium"
                          >
                            게시
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* 하단 우측: 새로고침 */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onRefresh}
            disabled={loading}
            className="h-9 inline-flex items-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 px-4 disabled:opacity-60"
          >
            {/* rotate icon */}
            <svg
              className={`mr-2 w-4 h-4 ${
                loading ? 'animate-spin text-blue-400' : 'text-zinc-400'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 12a9 9 0 0 1 15.53-6.36M21 12a9 9 0 0 1-15.53 6.36M18 5v4h-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            새로고침
          </button>
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

export default AdminReport
