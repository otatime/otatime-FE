import CalendarBtn from './CalendarBtn'
import Card from './Card'
import HomeNav from './HomeNav'
import { Calendar28 } from './PickerWithInput'
import CategoryBtn from './CategoryBtn'

export default function Home() {
  const imageList = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  ]

  const cardList = [
    {
      title: 'SPY×FAMILY - 2025년 8월 9일부터 개최! (가상)',
      date: { start: '2025년 8월 9일', end: '2025년 8월 9일' },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['애니메이션', '게임'],
      image: 'https://placehold.co/548x111',
    },
    {
      title: 'SPY×FAMILY - 2025년 8월 9일부터 개최! (가상)',
      date: { start: '2025년 8월 9일', end: '2025년 8월 9일' },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['애니메이션', '게임'],
      image: 'https://placehold.co/548x111',
    },
    {
      title: 'SPY×FAMILY - 2025년 8월 9일부터 개최! (가상)',
      date: { start: '2025년 8월 9일', end: '2025년 8월 9일' },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['애니메이션', '게임'],
      image: 'https://placehold.co/548x111',
    },
  ]

  const categoryList = [
    { name: '전체', isClick: true },
    { name: `애니메이션`, isClick: false },
    { name: `게임`, isClick: false },
  ]

  return (
    <div className="w-426 h-307 px-7 py-5 bg-neutral-900 ">
      {/* 카테고리 탭 */}
      <div className="h-12 flex justify-between items-center">
        <div className="h-9 flex justify-start gap-1">
          {categoryList.map((category, idx) => (
            <CategoryBtn key={idx} isClick={categoryList[idx].isClick}>
              {categoryList[idx].name}
            </CategoryBtn>
          ))}
        </div>
        <Calendar28 />
        {/* <CalendarBtn /> */}
      </div>

      <HomeNav
        images={imageList}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardList.map((card, idx) => (
            <Card
              key={idx}
              title={card.title}
              date={card.date}
              description={card.description}
              tags={card.tags}
              image={card.image}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
