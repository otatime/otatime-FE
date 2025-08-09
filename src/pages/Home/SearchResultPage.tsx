// src/pages/SearchResultPage.tsx
import { useSearchParams } from 'react-router-dom'

const SearchResultPage = () => {
  const [params] = useSearchParams()
  const keyword = params.get('q')

  return (
    <div className="text-white p-4">
      <h2 className="text-xl font-bold mx-auto mb-4">검색 결과</h2>
      <p>
        입력한 키워드: <span className="font-mono">{keyword}</span>
      </p>
      {/* 여기에 실제 결과 목록을 렌더링하면 됨 */}
    </div>
  )
}

export default SearchResultPage
