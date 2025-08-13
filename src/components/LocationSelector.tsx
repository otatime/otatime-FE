// src/components/LocationSelector.tsx
import { useState, useRef, useEffect } from 'react'

type Props = {
  selected: string
  onSelect: (value: string) => void
}

const LOCATIONS = [
  '서울',
  '경기',
  '인천',
  '강원',
  '대구',
  '대전',
  '충북',
  '충남',
  '세종',
  '경북',
  '경남',
  '울산',
  '부산',
  '전북',
  '전남',
  '광주',
]

const LocationSelector = ({ selected, onSelect }: Props) => {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  // 바깥 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={wrapperRef}>
      {/* 트리거 버튼 */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="text-sm text-zinc-300 flex items-center gap-1 cursor-pointer"
      >
        <span>대한민국, {selected}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* 드롭다운 메뉴 */}
      {open && (
        <div className="absolute left-0 z-50 mt-2 p-4 bg-white rounded-md shadow-lg w-[480px] grid grid-cols-4 gap-2">
          {LOCATIONS.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                onSelect(loc)
                setOpen(false)
              }}
              className="bg-black text-white text-sm px-3 py-2 rounded hover:bg-zinc-800 transition"
            >
              {loc}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LocationSelector
