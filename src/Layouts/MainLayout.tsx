import { Outlet } from 'react-router'
import Header from '@/Layouts/Header'
import Sidebar from '@/Layouts/Sidebar'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div className="relative bg-black text-white">
      <Header />
      {/* 헤더 높이만큼 아래로 내려서 시작 */}
      <div className="flex  min-h-screen">
        {/* 왼쪽 사이드바 */}
        <Sidebar />

        {/* 오른쪽 컨텐츠 영역 */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
