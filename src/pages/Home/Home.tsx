import HomeNav from './HomeNav'
import { Calendar28 } from './PickerWithInput'
import Category from './Category'
import CardList from './CardList'
// import dayjs from 'dayjs'
import { useState } from 'react'

export default function Home() {
  const imageList = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
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

  const [filterDate] = useState({
    start: new Date(),
    end: new Date(),
  })
  return (
    <div className="w-426 h-full px-7 py-5 bg-neutral-900 ">
      {/* 카테고리 탭 */}
      <div className="h-12 flex justify-between items-center">
        <div className="h-9 flex justify-start gap-1">
          <Category />
        </div>
        <Calendar28 startDate={filterDate.start} endDate={filterDate.end} />
      </div>
      {/* 다가오는 행사 */}
      <HomeNav
        images={imageList}
        event={eventList}
        className="w-full mx-auto h-72 overflow-hidden rounded-lg bg-black"
      />

      {/* 광고 배너 */}
      <div className="w-full h-24 flex justify-center items-center">
        <div className="text-white text-sm font-normal font-['Inter']">
          Test Ad
          <br />
        </div>
      </div>

      {/* 행사 정보 */}
      <section>
        <h2 className="h-10 px-5 justify-start text-white text-lg font-bold font-['Inter']">
          행사 정보
        </h2>

        <CardList />
      </section>
    </div>
  )
}
