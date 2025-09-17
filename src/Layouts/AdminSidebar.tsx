// src/Layouts/AdminSidebar.tsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@/assets/icons/home.svg?react'
import DocumentIcon from '@/assets/icons/document.svg?react'
import UserIcon from '@/assets/icons/user.svg?react'

type SidebarProps = { className?: string }
type SvgComp = React.FC<React.SVGProps<SVGSVGElement>>
type MenuItem = { label: string; to: string; Icon: SvgComp; end?: boolean }

const menu: ReadonlyArray<MenuItem> = [
  { label: '관리자 홈', to: '/adminHome', Icon: HomeIcon, end: true },
  { label: '사용자', to: '/adminUser', Icon: UserIcon },
  { label: '제보', to: '/adminReport', Icon: DocumentIcon },
]

export default function AdminSidebar({ className = '' }: SidebarProps) {
  return (
    <aside
      className={`w-[4.31rem] bg-zinc-900 text-white border-r border-zinc-800
                  flex flex-col items-center py-6 ${className}`}
    >
      <nav className="flex flex-col items-center gap-6">
        {menu.map(({ label, to, Icon, end }) => (
          <NavLink
            key={label}
            to={to}
            end={!!end} // 홈만 완전 일치
            className={({ isActive }) =>
              `group flex flex-col items-center gap-2 text-[13px] font-normal ${
                isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`p-2.5 rounded-[10px] ${
                    isActive ? 'bg-zinc-800' : ''
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
                </div>
                <span className="leading-none whitespace-nowrap">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
