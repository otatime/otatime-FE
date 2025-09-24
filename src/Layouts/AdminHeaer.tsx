// src/Layouts/Header.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '@/assets/logo/black-logo.png'

type HeaderProps = {
  className?: string
}

const AdminHeader: React.FC<HeaderProps> = ({ className = '' }) => {
  const navigate = useNavigate()

  return (
    <header
      className={`h-[4.6rem] w-full flex items-center justify-center bg-zinc-900 text-white border-b border-zinc-800 ${className}`}
    >
      {' '}
      {/* 왼쪽: 로고 + ADMIN 뱃지 */}
      <div className="w-full max-w-[111.75rem] px-6 flex items-center justify-between">
        <div className="flex items-center gap-6 ml-[0.9375rem] mt-[0.5625rem]">
          <button onClick={() => navigate('/')} className="focus:outline-none">
            <img src={Logo} alt="Logo" className="h-13 w-auto" />
          </button>
        </div>
        <div className="flex items-center gap-6 ml-[0.9375rem] mt-[0.5625rem]">
          <div className="px-[15px] py-[5px] bg-black rounded-[14.5px] inline-flex items-center">
            <span className="text-neutral-400 text-base font-bold">ADMIN</span>
          </div>
        </div>

        {/* 가운데 비움(추후 네비게이션) */}
        <div className="hidden lg:flex flex-1 justify-center" />

        {/* 오른쪽: 로그인 */}
        <div className="flex items-center gap-4">
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

export default AdminHeader
