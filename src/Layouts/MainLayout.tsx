// src/Layouts/MainLayout.tsx
import { Outlet } from 'react-router'
import Header from '@/Layouts/Header'
import Sidebar from '@/Layouts/Sidebar'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex min-h-[calc(100vh-56px)]">
        {' '}
        {/* 필요 시 헤더 높이에 맞춤 */}
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
