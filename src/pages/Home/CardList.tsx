import Card from './Card'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components'
import { useState } from 'react'

export default function CardList() {
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 9

  const cardList = Array.from({ length: 15 }).map((_, i) => ({
    title: `SPY×FAMILY - 2025년 8월 9일부터 개최! (가상) #${i + 1}`,
    date: { start: '2025년 8월 9일', end: '2025년 8월 9일' },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['애니메이션', '게임'],
    image: 'https://placehold.co/800x450',
  }))

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = cardList.slice(indexOfFirstCard, indexOfLastCard)
  const totalPages = Math.ceil(cardList.length / cardsPerPage)

  const handlePageChange = (page: number) => setCurrentPage(page)

  return (
    <>
      {/* 카드 그리드: 컨테이너(1674px) + gap-4 → 한 줄 3장일 때 카드 폭 ≈ 548px */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentCards.map((card, idx) => (
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

      {/* 페이지네이션 */}
      <div className="mt-6">
        <Pagination>
          <PaginationContent className="flex flex-wrap justify-center gap-2">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage > 1) handlePageChange(currentPage - 1)
                }}
                className="bg-neutral-700 text-white"
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handlePageChange(page)
                  }}
                  isActive={currentPage === page}
                  className="bg-neutral-700 text-white"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (currentPage < totalPages)
                    handlePageChange(currentPage + 1)
                }}
                className="bg-neutral-700 text-white"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}
