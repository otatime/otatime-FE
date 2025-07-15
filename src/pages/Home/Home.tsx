import Card from './Card'

export default function Home() {
  return (
    <div className="w-[1704px] h-[1228px] bg-neutral-900 rounded-tl-2xl rounded-tr-2xl">
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
