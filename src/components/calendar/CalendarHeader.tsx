import { getKoreanMonthTitle } from './types'

type Props = {
  viewDate: Date
  onPrev: () => void
  onNext: () => void
}

export default function CalendarHeader({ viewDate, onPrev, onNext }: Props) {
  return (
    <div className="h-16 flex items-center justify-center">
      <div className="inline-flex items-center gap-5">
        <button
          type="button"
          aria-label="이전 달"
          onClick={onPrev}
          className="size-9 rounded-full hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-neutral-600"
        >
          <span className="inline-block rotate-180 text-2xl leading-none">
            ›
          </span>
        </button>

        <h2 className="text-xl font-semibold tracking-tight">
          {getKoreanMonthTitle(viewDate)}
        </h2>

        <button
          type="button"
          aria-label="다음 달"
          onClick={onNext}
          className="size-9 rounded-full hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-neutral-600"
        >
          <span className="inline-block text-2xl leading-none">›</span>
        </button>
      </div>
    </div>
  )
}
