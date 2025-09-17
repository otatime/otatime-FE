// src/Routes/Router.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@/Layouts/MainLayout'
import AdminLayout from '@/Layouts/AdminLayout'

import Home from '@/pages/Home/Home'
import ReportPage from '@/pages/Report/ReportPage'
import User from '@/pages/User/User'
import Wish from '@/pages/Wish/WishPage'
import Calendar from '@/pages/Calendar/Calendar'

// Admin pages
import AdminHome from '@/pages/Admin/AdminHome'
import AdminReport from '@/pages/Admin/AdminReport'
import AdminUser from '@/pages/Admin/AdminUser'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 레이아웃 */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="user" element={<User />} />
          <Route path="wish" element={<Wish />} />
        </Route>

        {/* 관리자 레이아웃: 자식들을 '절대 경로'로 선언 */}
        <Route element={<AdminLayout />}>
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/adminReport" element={<AdminReport />} />
          <Route path="/adminUser" element={<AdminUser />} />
        </Route>

        {/* /admin 으로 접근 시 /adminHome 으로 리다이렉트 */}
        <Route path="/admin" element={<Navigate to="/adminHome" replace />} />

        {/* 기타 경로 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
