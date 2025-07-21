import DateBadge from '@/components/DateBadge'
import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'

interface HomeNavProps {
  images: string[]
  className: string
}

export default function HomeNav({ images, className }: HomeNavProps) {
  const [current, setCurrent] = useState(1)
  const [transition, setTransition] = useState(true)
  const timeoutRef = useRef<number | null>(null)
  const total = images.length

  const slides = [images[total - 1], ...images, images[0]]

  // 자동 슬라이드
  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => prev + 1)
      setTransition(true)
    }, 3000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  // 무한 루프 처리
  useEffect(() => {
    if (current === total + 1) {
      setTimeout(() => {
        setTransition(false)
        setCurrent(1)
      }, 700)
    }
    if (current === 0) {
      setTimeout(() => {
        setTransition(false)
        setCurrent(total)
      }, 700)
    }
  }, [current, total])

  // 트랜지션 복구
  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 20)
    }
  }, [transition])

  const goTo = (idx: number) => {
    setCurrent(idx + 1)
    setTransition(true)
  }

  const prevSlide = () => {
    setCurrent((prev) => prev - 1)
    setTransition(true)
  }
  const nextSlide = () => {
    setCurrent((prev) => prev + 1)
    setTransition(true)
  }

  return (
    <div className={`relative ${className}`}>
      {/* 슬라이드 트랙 */}
      <div
        className={`flex w-full h-full ${
          transition ? 'transition-transform duration-700' : ''
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`slide-${idx}`}
            className="w-full h-full object-cover flex-shrink-0"
            style={{ minWidth: '100%' }}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-10 hover:bg-black/70"
        aria-label="이전 슬라이드"
      >
        {'<'}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-10 hover:bg-black/70"
        aria-label="다음 슬라이드"
      >
        {'>'}
      </button>
      <div className="absolute bottom-17 left-13 flex flex-col gap-2">
        <h2 className="text-white text-2xl font-bold font-['Inter']">
          SPYxFAMLY - 2025년 8월 9일부터 개최!
        </h2>
        <div className="flex justify-start items-center gap-1">
          <DateBadge date={dayjs().format('YYYY년 MM월 DD일')} />
          <span className="text-gray-300 text-neutral-400 text-sm font-normal font-['Inter']">
            부터
          </span>
          <DateBadge date={dayjs().format('YYYY년 MM월 DD일')} />
          <span className="text-gray-300 text-neutral-400 text-sm font-normal font-['Inter']">
            까지
          </span>
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`transition-all duration-300
        ${
          current === idx + 1
            ? 'w-8 h-2 bg-white rounded-full'
            : 'w-2 h-2 bg-gray-500 rounded-full'
        }
      `}
          />
        ))}
      </div>
    </div>
  )
}
