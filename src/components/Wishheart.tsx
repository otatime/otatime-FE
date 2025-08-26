import { useState } from 'react'

type HeartButtonProps = {
  initialLiked?: boolean
  onToggle?: (liked: boolean) => void
  className?: string
}

const Wishheart = ({
  initialLiked = false,
  onToggle,
  className = '',
}: HeartButtonProps) => {
  const [liked, setLiked] = useState(initialLiked)

  const handleClick = () => {
    const next = !liked
    setLiked(next)
    onToggle?.(next)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={liked ? '찜 해제' : '찜하기'}
      className={[
        // 바깥 원: 2.5rem (= 40px)
        'size-10 rounded-full flex items-center justify-center',
        // 테두리/배경(비활성은 회색, 호버 시 살짝 밝게)
        liked
          ? 'border border-red-500/40 bg-red-500/15'
          : 'border border-white/10 bg-white/[0.05] hover:bg-white/10',
        'transition-colors',
        className,
      ].join(' ')}
    >
      {/* 안쪽 아이콘: 15x14px */}
      {liked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
        >
          <path
            d="M10.4335 -0.000129277C9.37365 -0.000129277 8.34334 0.466537 7.50006 1.244C6.63287 0.444137 5.54256 -0.00852928 4.45928 -0.000129277C3.31647 0.00920406 2.18115 0.527204 1.3224 1.46707C-0.440566 3.3986 -0.441035 6.47487 1.3224 8.4064L5.71131 13.214C6.66756 14.2617 8.33209 14.2617 9.28881 13.214L13.6777 8.4064C15.4407 6.4744 15.4407 3.3986 13.6777 1.46707C12.7965 0.501071 11.6143 -0.000129277 10.4335 -0.000129277Z"
            fill="#F03737"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
        >
          <path
            d="M10.4335 -0.000129277C9.37365 -0.000129277 8.34334 0.466537 7.50006 1.244C6.63287 0.444137 5.54256 -0.00852928 4.45928 -0.000129277C3.31647 0.00920406 2.18115 0.527204 1.3224 1.46707C-0.440566 3.3986 -0.441035 6.47487 1.3224 8.4064L5.71131 13.214C6.66756 14.2617 8.33209 14.2617 9.28881 13.214L13.6777 8.4064C15.4407 6.4744 15.4407 3.3986 13.6777 1.46707C12.7965 0.501071 11.6143 -0.000129277 10.4335 -0.000129277Z"
            stroke="#F03737"
          />
        </svg>
      )}
    </button>
  )
}

export default Wishheart
