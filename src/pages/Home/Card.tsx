import * as React from 'react'
import { DateBadge, TagBadge } from '@/components'

interface CardProps {
  title: string
  date: { start: string; end: string }
  description: string
  tags: string[]
  image: string
  className?: string
}

export default function Card({
  title,
  date,
  description,
  tags,
  image,
  className = '',
}: CardProps) {
  return (
    <div
      className={`min-w-0 overflow-hidden rounded-[10px] border border-zinc-800 bg-neutral-800
                  shadow-sm ${className}
                  lg:h-[278px]`} // 데스크톱 고정 높이
    >
      {/* 레이아웃: 데스크톱에서 정확히 맞추기 위해 column + 고정 이미지 높이 */}
      <div className="flex h-full flex-col">
        {/* 이미지 영역 */}
        <div className="w-full">
          {/* 모바일/태블릿: 16:9 비율, 데스크톱: 112px 고정 */}
          <div className="aspect-[16/9] lg:aspect-auto lg:h-[112px] w-full">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* 본문 */}
        <div className="flex flex-1 flex-col gap-2 p-3">
          <h3 className="min-w-0 text-base font-semibold leading-tight text-white line-clamp-2">
            {title}
          </h3>

          <div className="flex flex-wrap items-center gap-1 text-sm">
            <DateBadge date={date.start} />
            <span className="text-neutral-400">부터</span>
            <DateBadge date={date.end} />
            <span className="text-neutral-400">까지</span>
          </div>

          <p className="text-sm leading-relaxed text-neutral-300 line-clamp-3">
            {description}
          </p>

          {/* TagBadge는 className 미전달 (타입에러 방지) */}
          <div className="pt-1">
            <div className="flex flex-wrap gap-1">
              {tags.map((tag, idx) => (
                <span key={idx} className="shrink-0">
                  <TagBadge>#{tag}</TagBadge>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
