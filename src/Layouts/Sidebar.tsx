import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@/assets/icons/home.svg?react'
import CalendarIcon from '@/assets/icons/calendar.svg?react'
import ChatIcon from '@/assets/icons/chat.svg?react'
import DocumentIcon from '@/assets/icons/document.svg?react'
import HeartIcon from '@/assets/icons/Vectorheart.svg?react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type SidebarProps = {
  className?: string
}

const Sidebar = ({ className = '' }: SidebarProps) => {
  const [active, setActive] = useState('홈')
  const navigate = useNavigate()

  const menuItems = [
    {
      label: '홈',
      icon: <HomeIcon className="w-[18px] h-[18px]" />,
      path: '/',
    },
    {
      label: '달력',
      icon: <CalendarIcon className="w-[18px] h-[18px]" />,
      path: '/calendar',
    },
    {
      label: '행사 제보',
      icon: <DocumentIcon className="w-[18px] h-[18px]" />,
      path: '/report',
    },
    {
      label: '피드백',
      icon: <ChatIcon className="w-[18px] h-[18px]" />,
      path: '/feedback',
    },
  ]

  const lowerMenuItems = [
    { label: '사용자', isAvatar: true, path: '/user' },
    {
      label: '찜 목록',
      icon: <HeartIcon className="w-[18px] h-[18px]" />,
      path: '/wish',
    },
  ]

  return (
    <aside
      className={`w-[4.31rem] min-h-screen bg-zinc-900 text-white border-r border-zinc-800 flex flex-col items-center py-6 ${className}`}
    >
      <nav className="flex flex-col items-center gap-6">
        {/* 상단 메뉴 */}
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActive(item.label)
              navigate(item.path)
            }}
            className={`flex flex-col items-center gap-2 text-[13px] font-normal ${
              active === item.label
                ? 'text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <div
              className={`p-2.5 rounded-[10px]  ${
                active === item.label ? 'bg-zinc-800' : ''
              }`}
            >
              {item.icon}
            </div>
            <span className="text-[13px] leading-none text-center whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}

        {/* 구분선 */}
        <div className="w-6 border-t border-white-800 my-2" />

        {/* 하단 메뉴 */}
        {lowerMenuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActive(item.label)
              navigate(item.path)
            }}
            className={`flex flex-col items-center gap-2 text-[13px] font-normal ${
              active === item.label
                ? 'text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <div
              className={`p-2.5 rounded-[10px] ${
                active === item.label ? 'bg-zinc-800' : ''
              }`}
            >
              {item.isAvatar ? (
                <Avatar className="w-7 h-7">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ) : (
                item.icon
              )}
            </div>
            <span className="text-[13px] leading-none text-center whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
