import DayCell from './DayCell'
import type { CalEvent } from './types'
import { getMonthMatrix, toYMD } from './types'

type Props = { viewDate: Date; events?: CalEvent[] }

export default function CalendarGrid({ viewDate, events = [] }: Props) {
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
          // 예시로 19일만 초점 스타일
          isFocus={d.getDate() === 19 && d.getMonth() === currentMonth}
        />
      ))}
    </div>
  )
}
