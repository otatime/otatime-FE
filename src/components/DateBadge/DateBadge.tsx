import dayjs from 'dayjs'
import calendarIconUrl from '@/assets/icons/calendarIcon.svg'

interface DateBadgeProps {
  date: string
}

export default function DateBadge({
  date = dayjs().format('YYYY년 MM월 DD일'),
}: DateBadgeProps) {
  return (
    <div className="w-37 h-7 duration-300 flex justify-start items-center bg-gray-900 rounded-full border-2 border-gray-600">
      <p className="w-7.5 px-2 flex">
        <img src={calendarIconUrl} alt="calendar" className="size-full" />
      </p>
      <p className="text-gray-300 text-sm font-normal font-['Inter']">{date}</p>
    </div>
  )
}
