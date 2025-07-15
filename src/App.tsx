import './App.css'
import { Calendar } from './components'
import { Router } from './Routes'

function App() {
  return (
    <>
      {/* <h1 className="text-red-600 text-3xl font-bold underline">
        설치완료빔입니다.
      </h1> */}
      <Calendar />
      {/* 컴포넌트 개발 확인용 */}
      <Router />
    </>
  )
}

export default App
