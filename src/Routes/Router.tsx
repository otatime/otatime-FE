import { BrowserRouter, Routes, Route } from 'react-router'
import { Home, Login } from '@/pages'
import { MainLayout } from '@/Layouts'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
