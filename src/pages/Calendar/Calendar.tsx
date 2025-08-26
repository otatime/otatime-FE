import { useMemo, useState } from 'react'
import Category from '@/pages/Home/Category'
import CalendarHeader from '@/components/calendar/CalendarHeader'
import WeekdayHeader from '@/components/calendar/WeekdayHeader'
import CalendarGrid from '@/components/calendar/CalendarGrid'
import type { CalEvent } from '@/components/calendar/types'
import { Button } from '@/components'
import EventsModal, { type EventItem } from '@/components/calendar/EventModal'

// 데모 이벤트
const mockEvents: CalEvent[] = [
  {
    id: '1',
    date: '2025-06-01',
    title: 'SPY×FAMILY',
    coverUrl: '/img/spyfamily.jpg',
  },
  {
    id: '2',
    date: '2025-06-01',
    title: '블루아카이브',
    coverUrl: '/img/blue.png',
  },
  { id: '3', date: '2025-06-11', title: 'NIKKE', coverUrl: '/img/nikke.jpg' },
]

export default function Calendar() {
  // 달력 상태
  const [viewDate, setViewDate] = useState(() => new Date(2025, 5, 1)) // 6월
  const events = useMemo(() => mockEvents, [])

  // 모달 상태
  const [modalOpen, setModalOpen] = useState(false)
  const [modalDateLabel, setModalDateLabel] = useState('')
  const [modalEvents, setModalEvents] = useState<EventItem[]>([])
  const [modalTotalLabel, setModalTotalLabel] = useState<string>()

  // CalEvent -> EventItem 변환 (any 사용 X)
  type CalEventWithLiked = CalEvent & { liked?: boolean }
  const toEventItem = (e: CalEventWithLiked): EventItem => ({
    id: e.id,
    title: e.title,
    subtitle: '2025년 8월 9일부터 개최! (가상)', // 필요 없으면 제거
    coverUrl: e.coverUrl ?? '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['Tag_1', 'Tag_2', 'Tag_3'],
    liked: e.liked ?? false,
  })

  const formatKDate = (isoDate: string) => {
    const d = new Date(isoDate)
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`
  }

  const openModalForDate = (isoDate: string) => {
    const list = events.filter((ev) => ev.date === isoDate).map(toEventItem)
    setModalEvents(list)
    setModalDateLabel(formatKDate(isoDate))
    setModalTotalLabel(`전체 ${list.length}건`)
    setModalOpen(true)
  }

  const goPrev = () =>
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))
  const goNext = () =>
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))

  return (
    <div className="w-full h-full px-7 py-5 bg-neutral-900 text-neutral-100">
      {/* 카테고리 탭 */}
      <div className="h-12 flex items-center justify-between">
        <div className="h-9 flex items-center gap-2">
          <Category />
        </div>
      </div>

      {/* 달력 헤더 */}
      <CalendarHeader viewDate={viewDate} onPrev={goPrev} onNext={goNext} />

      {/* 요일 */}
      <WeekdayHeader />

      {/* 그리드 */}
      <CalendarGrid
        viewDate={viewDate}
        events={events}
        onEventClick={({ date }) => openModalForDate(date)}
      />

      {/* 구글폼 버튼  */}
      <div className="h-12 flex items-center justify-center ">
        <Button asChild variant="secondary">
          <a
            href="https://www.naver.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            구글폼 행사 제보 링크 이동
          </a>
        </Button>
      </div>
      <EventsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        dateLabel={modalDateLabel}
        totalCountLabel={modalTotalLabel}
        events={modalEvents}
      />
    </div>
  )
}
