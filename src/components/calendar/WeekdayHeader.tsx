const days = ['일', '월', '화', '수', '목', '금', '토']

export default function WeekdayHeader() {
  return (
    <div className="grid grid-cols-7 px-2 pb-2 text-sm text-neutral-400">
      {days.map((d) => (
        <div key={d} className="py-2 text-center select-none">
          {d}
        </div>
      ))}
    </div>
  )
}
