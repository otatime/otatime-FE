import { useEffect, useRef } from 'react'
import Wishheart from '@/components/Wishheart'

/** 리스트 아이템 타입 */
export type EventItem = {
  id: string
  title: string
  subtitle?: string
  coverUrl: string
  description?: string
  tags?: string[]
  liked?: boolean
}

/** 모달 프롭스 타입 */
export type EventsModalProps = {
  open: boolean
  onClose: () => void
  dateLabel: string
  totalCountLabel?: string
  events: EventItem[]
}

export default function EventsModal({
  open,
  onClose,
  dateLabel,
  totalCountLabel,
  events,
}: EventsModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const firstBtnRef = useRef<HTMLButtonElement>(null)

  // 스크롤 잠금
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // ESC/Tab 처리
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && dialogRef.current) {
        const nodes = dialogRef.current.querySelectorAll<HTMLElement>(
          'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',
        )
        if (!nodes.length) return
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (open) firstBtnRef.current?.focus()
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      {/* 모달 컨테이너 */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="events-modal-title"
        className="relative w-[1000px] h-[410px] bg-neutral-800 rounded-[15px] text-white shadow-2xl border border-white/5 p-6 flex flex-col"
      >
        {/* 헤더 */}
        <div className="flex items-start justify-between border-b border-white/10 pb-3">
          <div className="min-w-0">
            <h2
              id="events-modal-title"
              className="text-white font-bold text-base"
            >
              {dateLabel}
            </h2>
            {totalCountLabel && (
              <p className="mt-1 text-[#8D8D8D] text-sm font-normal">
                {totalCountLabel}
              </p>
            )}
          </div>
          <button
            ref={firstBtnRef}
            onClick={onClose}
            aria-label="닫기"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* 리스트 영역 */}
        <div className="flex-1 overflow-y-auto mt-4 space-y-4 scroll-smooth">
          {events.map((ev, i) => (
            <div key={ev.id}>
              <EventRow item={ev} />
              {i !== events.length - 1 && (
                <hr className="border-t border-white/10 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EventRow({ item }: { item: EventItem }) {
  const { coverUrl, title, subtitle, description, tags = [], liked } = item

  return (
    // 하트 절대배치용 relative
    <div className="relative flex items-start gap-6">
      {/* 썸네일 (12.5625rem × 8.125rem) */}
      <img
        src={coverUrl}
        alt=""
        className="w-[12.5625rem] h-[8.125rem] object-cover rounded-[0.625rem] flex-shrink-0"
      />

      {/* 본문: 하트와 안 겹치도록 우측 여백 확보 */}
      <div className="flex-1 min-w-0 pr-14">
        <h3 className="text-white font-bold text-base truncate">
          {title}
          {subtitle && (
            <span className="ml-1 text-white/80 font-medium">
              {' '}
              - {subtitle}
            </span>
          )}
        </h3>

        {description && (
          <p className="mt-2 text-[#8D8D8D] text-sm font-normal">
            {description}
          </p>
        )}

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/80"
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 하트: 우상단 고정 */}
      <div className="absolute top-2 right-2">
        <Wishheart initialLiked={!!liked} />
      </div>
    </div>
  )
}

/* ==== inline icons ==== */
function CloseIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}
