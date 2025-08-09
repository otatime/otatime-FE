import { useState, useEffect } from 'react'

const ReportPage = () => {
  const [form, setForm] = useState({
    title: '',
    summary: '',
    startDate: '',
    endDate: '',
    details: '',
    upperCategory: '',
    lowerCategory: '',
  })

  const [previewUrl, setPreviewUrl] = useState<string>('')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  return (
    <section className="w-full min-h-screen bg-zinc-900 text-white px-6 py-10">
      <div className="max-w-[111.75rem] mx-auto space-y-6">
        <h2 className="text-lg font-semibold">제보하기</h2>

        {/* 이미지 업로드 영역 */}
        <div className="relative bg-zinc-800 rounded-md h-[10rem] flex items-center justify-center overflow-hidden">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="preview"
              className="h-full object-contain"
            />
          ) : (
            <button className="text-zinc-400 text-3xl">＋</button>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="absolute bottom-2 right-2">
            <img
              src="/icons/image.svg"
              alt="upload"
              className="w-5 h-5 opacity-70"
            />
          </div>
        </div>

        {/* 제목/카테고리 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-zinc-300 mb-1 block">제목</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-2 text-sm placeholder:text-zinc-500"
              placeholder="제목"
            />
          </div>
          <div>
            <label className="text-sm text-zinc-300 mb-1 block">
              상위 분류
            </label>
            <select
              name="upperCategory"
              value={form.upperCategory}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-2 text-sm text-zinc-400"
            >
              <option value="">선택되지 않음</option>
              <option value="cat1">카테고리1</option>
              <option value="cat2">카테고리2</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-zinc-300 mb-1 block">
              간략한 소개
            </label>
            <input
              name="summary"
              value={form.summary}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-2 text-sm placeholder:text-zinc-500"
              placeholder="간략한 소개"
            />
          </div>
          <div>
            <label className="text-sm text-zinc-300 mb-1 block">
              하위 분류
            </label>
            <select
              name="lowerCategory"
              value={form.lowerCategory}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-2 text-sm text-zinc-400"
            >
              <option value="">선택되지 않음</option>
              <option value="sub1">하위1</option>
              <option value="sub2">하위2</option>
            </select>
          </div>
        </div>

        {/* 날짜 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-zinc-300 mb-1 block">
              시작 날짜
            </label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-2 text-sm text-zinc-400"
            />
          </div>
          <div>
            <label className="text-sm text-zinc-300 mb-1 block">
              종료 날짜
            </label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 rounded px-4 py-2 text-sm text-zinc-400"
            />
          </div>
        </div>

        {/* 상세내용 */}
        <div>
          <label className="text-sm text-zinc-300 mb-1 block">
            자세한 정보
          </label>
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            className="w-full h-60 resize-none bg-zinc-800 border border-zinc-700 rounded px-4 py-3 text-sm placeholder:text-zinc-500"
            placeholder="자세한 정보"
          />
        </div>

        <div className="flex justify-end">
          <button
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm font-medium transition"
            onClick={() => alert('제출되었습니다')}
          >
            제보
          </button>
        </div>
      </div>
    </section>
  )
}

export default ReportPage
