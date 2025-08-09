import Wishheart from '@/components/Wishheart'

type WishCardProps = {
  title: string
  startDate: string
  endDate: string
  description: string
  tags: string[]
  imageUrl: string
  liked?: boolean
}

const WishCard = ({
  title,
  startDate,
  endDate,
  description,
  tags,
  imageUrl,
  liked = false,
}: WishCardProps) => {
  return (
    <div className="flex gap-4 p-4 bg-zinc-800 rounded-lg w-full">
      <img
        src={imageUrl}
        alt={title}
        className="w-36 h-28 object-cover rounded-md shrink-0"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-white text-base">{title}</h3>
          <p className="text-xs text-gray-400 mt-1">
            {startDate} ~ {endDate}
          </p>
          <p className="text-sm text-gray-300 mt-2">{description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-zinc-700 text-xs text-gray-300 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="self-start">
        <Wishheart
          initialLiked={liked}
          onToggle={(liked) => console.log(`찜 상태: ${liked}`)}
        />
      </div>
    </div>
  )
}

export default WishCard
