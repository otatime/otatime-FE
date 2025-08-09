import React from 'react'
import { useNavigate } from 'react-router-dom'

type SearchBarProps = {
  keyword: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ keyword, onChange }: SearchBarProps) => {
  const navigate = useNavigate()

  const handleSearch = () => {
    if (!keyword.trim()) return
    navigate(`/search?q=${encodeURIComponent(keyword.trim())}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="flex items-center border border-zinc-700 rounded-full overflow-hidden bg-black">
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="검색"
        className="bg-black text-sm text-white placeholder-zinc-400 px-4 py-2 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 border-l border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition"
        aria-label="검색 버튼"
      >
        <svg
          className="w-4 h-4 text-zinc-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </button>
    </div>
  )
}

export default SearchBar
