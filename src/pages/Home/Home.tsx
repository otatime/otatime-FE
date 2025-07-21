import Card from './Card'
import HomeNav from './HomeNav'

const imageList = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
]

export default function Home() {
  return (
    <div className="w-426 h-307 px-7 py-5 bg-neutral-900 ">
      {/* 카테고리 탭 */}
      <nav className="flex gap-2 mb-4">
        <button className="px-4 py-1 rounded bg-blue-500 text-white">
          전체
        </button>
        <button className="px-4 py-1 rounded bg-[#18181B] text-gray-300">
          애니메이션
        </button>
        <button className="px-4 py-1 rounded bg-[#18181B] text-gray-300">
          게임
        </button>
      </nav>
      <HomeNav
        images={imageList}
        className="w-full mx-auto h-72 overflow-hidden rounded-lg bg-black"
      />

      {/* 광고 배너 */}
      <div className="flex justify-center mb-6">
        <div>
          Test Ad
          <br />
        </div>
      </div>

      {/* 행사 정보 */}
      <section>
        <h2 className="text-lg font-bold mb-4">행사 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  )
}
