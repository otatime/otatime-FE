import dayjs from 'dayjs'

interface DateBadgeProps {
  date: string
}

export default function DateBadge({
  date = dayjs().format('YYYY년 MM월 DD일'),
}: DateBadgeProps) {
  return (
    <div className="w-40 h-7 duration-300 flex justify-start bg-gray-900 rounded-full border-2 border-gray-600">
      <p className="w-7.5 px-2 flex items-center">
        <img src="/assets/calendar.svg" alt="calendar" />
      </p>
      <p className="text-gray-300 text-neutral-400 text-sm font-normal font-['Inter']">
        {date}
      </p>
    </div>
  )
}
