import HomeNav from './HomeNav'
import { Calendar28 } from './PickerWithInput'
import Category from './Category'
import CardList from './CardList'
import { useState } from 'react'

/** 고해상도 Unsplash URL 생성기 (1674px 컨테이너 기준, 2x DPR) */
const hd = (base: string) =>
  `${base}?auto=format&fit=crop&w=1674&dpr=2&q=90&fm=jpg`

export default function Home() {
  // 원본 링크를 hd()로 감싸 고해상도 소스로 교체
  const imageList = [
    hd('https://images.unsplash.com/photo-1506744038136-46273834b3fb'),
    hd('https://images.unsplash.com/photo-1519125323398-675f0ddb6308'),
    hd('https://images.unsplash.com/photo-1465101046530-73398c7f28ca'),
  ]

  const eventList = [
    {
      title: 'SPY×FAMILY - 2025년 8월 9일부터 개최! (가상)',
      date: { start: '2025년 8월 9일', end: '2025년 8월 15일' },
    },
    {
      title: '원피스 - 2025년 9월 20일부터 개최! (가상)',
      date: { start: '2025년 9월 20일', end: '2025년 9월 25일' },
    },
    {
      title: '나루토 - 2025년 10월 5일부터 개최! (가상)',
      date: { start: '2025년 10월 5일', end: '2025년 10월 12일' },
    },
  ]

  const [filterDate] = useState({ start: new Date(), end: new Date() })

  return (
    <div className="min-h-dvh bg-neutral-900">
      {/* 1번 디자인 폭에 맞춰 컨테이너 1674px */}
      <div className="mx-auto max-w-[1674px] px-4 sm:px-6 lg:px-8 py-5">
        {/* 상단 카테고리/달력 */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <Category />
          </div>
          <div className="w-full sm:w-auto">
            <Calendar28 startDate={filterDate.start} endDate={filterDate.end} />
          </div>
        </div>

        {/* 캐러셀: 데스크톱 h=272px, 내부 img는 항상 꽉 채우고 커버 */}
        <div
          className="relative mt-4 w-full overflow-hidden rounded-[15px] bg-black
                     h-[180px] sm:h-[220px] lg:h-[272px]
                     [&_img]:w-full [&_img]:h-full [&_img]:object-cover
                     sm:[&_img]:[image-rendering:-webkit-optimize-contrast]"
        >
          <HomeNav
            images={imageList}
            event={eventList}
            className="w-full h-full"
          />

          {/* 좌→우 그라데이션 오버레이 (시각 강조용, 흐림과 무관) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 to-black/0" />
        </div>

        {/* 광고 배너(표준 사이즈 반응형) */}
        <div className="mt-5 w-full flex justify-center">
          <div
            className="flex items-center justify-center rounded-lg bg-neutral-800/60 text-white
                       w-[320px] h-[50px] sm:w-[468px] sm:h-[60px] lg:w-[728px] lg:h-[90px]"
          >
            <span className="text-sm sm:text-base">Test Ad</span>
          </div>
        </div>

        {/* 카드 섹션 */}
        <section className="mt-6">
          <h2 className="px-1 text-white text-lg font-bold">행사 정보</h2>
          <CardList />
        </section>
      </div>
    </div>
  )
}
