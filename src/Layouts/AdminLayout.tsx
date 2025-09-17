// src/Layouts/AdminLayout.tsx
import { Outlet } from 'react-router-dom'
import Header from '@/Layouts/Header' // 필요 없으면 지워도 됨
import AdminSidebar from '@/Layouts/AdminSidebar'

export default function AdminLayout() {
  return (
    <div className="relative min-h-screen bg-[#141414] text-white">
      <Header /> {/* 공통 헤더를 쓰지 않으면 제거하세요 */}
      <div className="flex min-h-[calc(100svh-56px)]">
        {' '}
        {/* 헤더 높이 56px 기준 */}
        <AdminSidebar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
      {/* Footer는 관리자에서 사용 안 하면 제거 */}
    </div>
  )
}
