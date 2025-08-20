import type { CalEvent } from './types'
import { isSameDay, toYMD } from './types'
import EventChip from './EventChip'

type Props = {
  date: Date
  inCurrentMonth: boolean
  today: Date
  eventsByDate?: Record<string, CalEvent[]>
  isFocus?: boolean
}

export default function DayCell({
  date,
  inCurrentMonth,
  today,
  eventsByDate,
  isFocus,
}: Props) {
  const ymd = toYMD(date)
  const events = eventsByDate?.[ymd] ?? []

  const day = date.getDate()
  const dow = date.getDay()
  const todayFlag = isSameDay(date, today)

  const badge =
    dow === 0
      ? 'bg-red-500 text-white'
      : dow === 6
      ? 'bg-blue-500 text-white'
      : 'bg-neutral-800 text-neutral-300'

  return (
    <div
      className={[
        'relative rounded-2xl border border-neutral-800/70 bg-neutral-900',
        'min-h-[132px] p-2',
        inCurrentMonth ? '' : 'opacity-40',
        isFocus ? 'bg-neutral-800/50' : 'hover:bg-neutral-850/50',
        'transition-colors',
      ].join(' ')}
    >
      {/* 날짜 뱃지: 우상단 */}
      <div className="absolute top-2 right-2">
        <div
          className={[
            'h-7 min-w-7 px-1 rounded-full text-[11px] font-semibold',
            'flex items-center justify-center',
            badge,
            todayFlag ? 'ring-2 ring-neutral-300/80' : '',
          ].join(' ')}
          title={todayFlag ? '오늘' : undefined}
        >
          {day}
        </div>
      </div>

      {/* 이벤트 배너칩 - 배경이미지 버전 */}
      <div className="mt-8 flex flex-col gap-[15px]">
        {events.map((ev) => (
          <EventChip key={ev.id} title={ev.title} coverUrl={ev.coverUrl} />
        ))}
      </div>
    </div>
  )
}
