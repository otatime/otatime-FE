import { useMemo, useState } from 'react'
import Category from '@/pages/Home/Category'
import CalendarHeader from '@/components/calendar/CalendarHeader'
import WeekdayHeader from '@/components/calendar/WeekdayHeader'
import CalendarGrid from '@/components/calendar/CalendarGrid'
import type { CalEvent } from '@/components/calendar/types'
import { Button } from '@/components'
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
  {
    id: '3',
    date: '2025-06-11',
    title: 'NIKKE',
    coverUrl: '/img/nikke.jpg',
  },
]

export default function Calendar() {
  const [viewDate, setViewDate] = useState(() => new Date(2025, 5, 1)) // 6월
  const events = useMemo(() => mockEvents, [])

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
      <CalendarGrid viewDate={viewDate} events={events} />
      {/* 구글폼 바로가기 버튼 */}
      <div className="h-12 flex items-center justify-center ">
        <Button variant="secondary">구글폼 행사 제보 링크 이동</Button>
      </div>
    </div>
  )
}
