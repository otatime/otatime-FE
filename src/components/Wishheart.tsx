// src/components/Wishheart.tsx
import { useState } from 'react'
import HeartIcon from '@/assets/icons/heart.svg?react'

type HeartButtonProps = {
  initialLiked?: boolean
  onToggle?: (liked: boolean) => void
}

const Wishheart = ({ initialLiked = false, onToggle }: HeartButtonProps) => {
  const [liked, setLiked] = useState(initialLiked)

  const handleClick = () => {
    const newLiked = !liked
    setLiked(newLiked)
    onToggle?.(newLiked)
  }

  return (
    <button onClick={handleClick} aria-label="찜 하트 버튼">
      <HeartIcon
        className={`w-6 h-6 transition-colors duration-200 ${
          liked ? 'fill-red-500' : 'fill-gray-400'
        }`}
      />
    </button>
  )
}

export default Wishheart
