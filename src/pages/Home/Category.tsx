import { useState } from 'react'
import CategoryBtn from './CategoryBtn'

export default function Category() {
  const [categoryList, setCategoryList] = useState([
    { name: '전체', isClick: true },
    { name: `애니메이션`, isClick: false },
    { name: `게임`, isClick: false },
  ])

  const handleCategoryClick = (clickedIndex: number) => {
    setCategoryList((prev) =>
      prev.map((category, index) => ({
        ...category,
        isClick: index === clickedIndex,
      })),
    )
  }
  return (
    <>
      {categoryList.map((category, idx) => (
        <CategoryBtn
          key={idx}
          isClick={category.isClick}
          onClick={() => handleCategoryClick(idx)}
        >
          {category.name}
        </CategoryBtn>
      ))}
    </>
  )
}
