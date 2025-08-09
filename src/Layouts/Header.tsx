// src/Layouts/Header.tsx
import LocationSelector from '@/components/LocationSelector'
import * as React from 'react'
import { useState } from 'react'
import Logo from '@/assets/logo/black-logo.png'
import SearchBar from '@/components/Searchbar'
import { useNavigate } from 'react-router-dom'

type HeaderProps = {
  className?: string
}

const Header = ({ className = '' }: HeaderProps) => {
  const [location, setLocation] = useState('서울')
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  return (
    <header
      className={`h-[4.6rem] w-full flex items-center justify-center bg-zinc-900 text-white border-b border-zinc-800 ${className}`}
    >
      <div className="w-full max-w-[111.75rem] px-6 flex items-center justify-between">
        {/* 왼쪽: 로고 + 위치 */}
        <div className="flex items-center gap-6 ml-[0.9375rem] mt-[0.5625rem]">
          <button onClick={() => navigate('/')} className="focus:outline-none">
            <img src={Logo} alt="Logo" className="h-13 w-auto" />
          </button>
          <LocationSelector selected={location} onSelect={setLocation} />
        </div>

        {/* 가운데 비움 (추후 네비게이션) */}
        <div className="hidden lg:flex flex-1 justify-center"></div>

        {/* 오른쪽: 검색 + 로그인 */}
        <div className="flex items-center gap-4">
          <SearchBar keyword={keyword} onChange={handleSearchChange} />

          <button
            onClick={() => navigate('/login')}
            className="inline-flex items-center justify-center px-[1.5625rem] py-[0.625rem] rounded-[6.25rem] bg-[#07F] text-white text-base font-bold leading-none hover:brightness-110 transition"
          >
            로그인
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
