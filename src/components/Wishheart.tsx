import { useMemo, useState } from 'react'

type HeartButtonProps = {
  /** 상위에서 제어하려면 liked를 넘겨주세요(Controlled). */
  liked?: boolean
  /** Uncontrolled로 쓸 때 초기값 */
  initialLiked?: boolean
  /** 토글 시 콜백 */
  onToggle?: (liked: boolean) => void
  /** 바깥 버튼 클래스 덮어쓰기 */
  className?: string
}

/**
 * 공통 하트 버튼
 * - 바깥 버튼: 2.5rem 정사각형
 * - 내부 아이콘: 15×14(px)
 * - 비활성: 회색(스트로크), 활성: 빨간 채움
 */
export default function Wishheart({
  liked,
  initialLiked = false,
  onToggle,
  className = '',
}: HeartButtonProps) {
  const controlled = useMemo(() => liked !== undefined, [liked])
  const [inner, setInner] = useState(initialLiked)
  const active = controlled ? (liked as boolean) : inner

  const handleClick = () => {
    const next = !active
    if (!controlled) setInner(next)
    onToggle?.(next)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={active ? '좋아요 취소' : '좋아요'}
      aria-pressed={active}
      className={[
        'w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-full',
        'border border-white/10 bg-white/5 hover:bg-white/10 transition',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30',
        'flex-shrink-0',
        className,
      ].join(' ')}
    >
      {/* 아이콘 15×14 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        className="w-[0.9375rem] h-[0.875rem]"
        aria-hidden
      >
        <path
          d="M10.4335 -0.000129277C9.37365 -0.000129277 8.34334 0.466537 7.50006 1.244C6.63287 0.444137 5.54256 -0.00852928 4.45928 -0.000129277C3.31647 0.00920406 2.18115 0.527204 1.3224 1.46707C-0.440566 3.3986 -0.441035 6.47487 1.3224 8.4064L5.71131 13.214C6.66756 14.2617 8.33209 14.2617 9.28881 13.214L13.6777 8.4064C15.4407 6.4744 15.4407 3.3986 13.6777 1.46707C12.7965 0.501071 11.6143 -0.000129277 10.4335 -0.000129277Z"
          className={
            active ? 'fill-[#F03737]' : 'fill-transparent stroke-[#9CA3AF]'
          }
        />
      </svg>
    </button>
  )
}
