import { Button } from '@/components'
import { useState } from 'react'

export default function CategoryBtn({
  children,
  isClick = false,
}: {
  children: React.ReactNode
  isClick: boolean
}) {
  const [click, setClick] = useState(isClick)
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <Button
      className={`
        font-normal font-['Inter']
    ${
      click
        ? 'bg-white text-neutral-900 hover:bg-white'
        : 'bg-neutral-900 text-white hover:bg-neutral-300 '
    }
  `}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}
