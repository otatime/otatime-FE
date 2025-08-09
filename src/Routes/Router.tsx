import { BrowserRouter, Routes, Route } from 'react-router'
import { Home, Login } from '@/pages'
import { MainLayout } from '@/Layouts'
import ReportPage from '@/pages/Report/ReportPage'
import WishPage from '@/pages/Wish/WishPage'
import SearchResultPage from '@/pages/Home/SearchResultPage'
import Calendar from '@/pages/Calendar/Calendar'
import Feedback from '@/pages/Feedback/Feedback'
import User from '@/pages/User/user'
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/wish" element={<WishPage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
