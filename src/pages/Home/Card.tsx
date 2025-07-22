import { DateBadge, TagBadge } from '@/components'

interface CardProps {
  title: string
  date: { start: string; end: string }
  description: string
  tags: string[]
  image: string
}

export default function Card({
  title,
  date,
  description,
  tags,
  image,
}: CardProps) {
  return (
    <div className="w-137 h-72 bg-neutral-800 rounded-[10px] border border-zinc-800">
      <div>
        <img
          className="w-137 h-28 rounded-tl-[10px] rounded-tr-[10px]"
          src={`${image}`}
        />
      </div>
      <div className="flex justify-start flex-col gap-2 p-2">
        <h2 className=" text-white text-base font-bold font-['Inter']">
          {title}
        </h2>
        <div className="flex justify-start items-center gap-1">
          <DateBadge date={date.start} />
          <span className="text-neutral-400 text-sm font-normal font-['Inter']">
            부터
          </span>
          <DateBadge date={date.end} />
          <span className="text-neutral-400 text-sm font-normal font-['Inter']">
            까지
          </span>
        </div>
        <div className="w-122 justify-start text-neutral-400 text-sm font-normal font-['Inter']">
          {description}
        </div>
        <div className="flex justify-start gap-1">
          {tags.map((tag, idx) => (
            <TagBadge key={idx}>#{tag}</TagBadge>
          ))}
        </div>
      </div>
    </div>
  )
}
