type Props = {
  title: string
  coverUrl?: string
  className?: string // 필요 시 외부에서 width 등 덮어쓰기
  onClick?: () => void // ✅ 추가
}

export default function EventChip({
  title,
  coverUrl,
  className,
  onClick,
}: Props) {
  const clickable = !!onClick

  return (
    <div
      onClick={onClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-label={clickable ? `${title} 상세 보기` : undefined}
      className={[
        // 사이즈 & 형태 (px 고정)
        'relative w-[201px] h-[30px] rounded-[5px]',
        // 보더
        'border border-zinc-800',
        // 배경이미지
        'bg-center bg-cover bg-no-repeat',
        // 넘침 방지
        'overflow-hidden',
        // ✅ 클릭 가능시 포인터 & 키보드 포커스 스타일
        clickable
          ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40'
          : '',
        className ?? '',
      ].join(' ')}
      style={coverUrl ? { backgroundImage: `url(${coverUrl})` } : undefined}
      title={title}
      onKeyDown={(e) => {
        if (!clickable) return
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
    >
      {/* 어둡게: 좌->우 그라디언트 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black to-black/0" />
      {/* 텍스트 */}
      <div className="relative z-10 flex h-full items-center px-[12px]">
        <span className="truncate text-white text-[14px] font-semibold leading-none">
          {title}
        </span>
      </div>
    </div>
  )
}
