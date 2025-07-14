import { BrowserRouter, Routes, Route } from 'react-router'
import { Home, Login } from '@/pages'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
