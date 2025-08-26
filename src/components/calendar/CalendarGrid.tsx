import DayCell from './DayCell'
import type { CalEvent } from './types'
import { getMonthMatrix, toYMD } from './types'

type Props = {
  viewDate: Date
  events?: CalEvent[]
  onEventClick?: (info: { date: string; event: CalEvent }) => void // ✅ 추가
}

export default function CalendarGrid({
  viewDate,
  events = [],
  onEventClick,
}: Props) {
  // ✅ 받기
  const matrix = getMonthMatrix(viewDate)
  const currentMonth = viewDate.getMonth()
  const today = new Date()

  const eventsByDate = events.reduce<Record<string, CalEvent[]>>((acc, ev) => {
    ;(acc[ev.date] ??= []).push(ev)
    return acc
  }, {})

  return (
    <div className="grid grid-cols-7 gap-3">
      {matrix.map((d) => (
        <DayCell
          key={toYMD(d)}
          date={d}
          inCurrentMonth={d.getMonth() === currentMonth}
          today={today}
          eventsByDate={eventsByDate}
          isFocus={d.getDate() === 19 && d.getMonth() === currentMonth}
          onEventClick={onEventClick} // ✅ 그대로 전달
        />
      ))}
    </div>
  )
}
