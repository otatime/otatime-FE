import WishCard from '@/pages/Wish/WishCard'

const WishPage = () => {
  const dummyData = [
    {
      title: 'SPY×FAMILY - 2025년 8월 9일부터 개최! (가상)',
      startDate: '2025년 6월 15일',
      endDate: '2025년 6월 15일',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Tag_1', 'Tag_2', 'Tag_3'],
      imageUrl: '/img/spyfamily.jpg',
      liked: true,
    },
    {
      title: 'NIKKE - 2025년 8월 9일부터 개최! (가상)',
      startDate: '2025년 6월 15일',
      endDate: '2025년 6월 15일',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Tag_1', 'Tag_2', 'Tag_3'],
      imageUrl: '/img/spyfamily.jpg',
      liked: false,
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-900 text-white px-6 py-10">
      <div className="max-w-[1120px] mx-auto">
        {/* 중앙 컨테이너 */}
        <h2 className="text-xl font-bold mb-6">찜 목록</h2>
        <div className="flex flex-col gap-6">
          {dummyData.map((item, i) => (
            <WishCard key={i} {...item} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default WishPage
