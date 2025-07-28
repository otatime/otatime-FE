import Card from './Card'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/UI/pagination'
import { useState } from 'react'

export default function CardList() {
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 9 // 한 페이지당 보여줄 카드 수

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

  // 현재 페이지에 해당하는 카드들 계산
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = cardList.slice(indexOfFirstCard, indexOfLastCard)

  // 총 페이지 수 계산
  const totalPages = Math.ceil(cardList.length / cardsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      {/* 콘텐츠 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {currentCards.map((card, idx) => (
          <Card
            key={idx}
            title={card.title}
            date={card.date}
            description={card.description}
            tags={card.tags}
            image={card.image}
            className="p-2"
          />
        ))}
      </div>
      <br />

      {/* 페이지네이션 */}
      <Pagination>
        <PaginationContent>
          {/* 이전 버튼 */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1)
                }
              }}
              className="bg-neutral-700 text-white"
            />
          </PaginationItem>

          {/* 페이지 번호들 */}
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

          {/* 다음 버튼 */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1)
                }
              }}
              className="bg-neutral-700 text-white"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}
