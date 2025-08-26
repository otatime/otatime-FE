import { useState, useEffect, useRef } from 'react'

const ReportPage = () => {
  const [form, setForm] = useState({
    title: '',
    summary: '',
    startDate: '',
    endDate: '',
    details: '',
    upperCategory: '',
    lowerCategory: '',
    location: '', // 주소/위치
  })
  const [previewUrl, setPreviewUrl] = useState<string>('')

  const [upperTouched, setUpperTouched] = useState(false)
  const locRef = useRef<HTMLDivElement>(null)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleUpperBlur = () => setUpperTouched(true)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setPreviewUrl(URL.createObjectURL(file))
  }

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  // 공통 스타일
  const baseCx =
    'rounded-[0.625rem] border-2 border-[#404043] px-4 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60'
  const inputCx = `h-[3.125rem] bg-black text-neutral-200 ${baseCx}`
  const selectCx = `h-[3.125rem] bg-black text-neutral-200 ${baseCx} w-full`
  const dateCx = `h-[3.125rem] bg-[#202021] text-neutral-200 ${baseCx} w-full`

  const upperInvalid = upperTouched && !form.upperCategory
  const upperSelectCx = [
    selectCx,
    upperInvalid
      ? 'border-red-500 focus:ring-red-500/40 focus:border-red-500'
      : '',
  ].join(' ')

  return (
    <section className="w-full min-h-screen bg-[#141414] text-white px-4 md:px-6 py-8 md:py-10">
      <div className="mx-auto w-full max-w-[72rem]">
        <h2 className="text-base md:text-lg font-semibold mb-4">제보하기</h2>

        {/* 상단 업로드 */}
        <div className="mb-6">
          <div className="relative w-full h-40 md:h-[8.125rem] rounded-[0.625rem] bg-[#303033] overflow-hidden flex items-center justify-center">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="preview"
                className="h-full w-full object-contain"
              />
            ) : (
              <button className="text-zinc-300/80 text-3xl leading-none">
                ＋
              </button>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* 본문: 왼쪽 넓게 / 오른쪽 고정폭 */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem] gap-4 lg:gap-6">
          {/* 제목 */}
          <div>
            <label className="block mb-1 text-[13px] text-neutral-300/90">
              제목
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="제목"
              className={`w-full ${inputCx}`}
            />
          </div>

          {/* 상위 분류 */}
          <div>
            <label className="block mb-1 text-[13px] text-neutral-300/90">
              상위 분류
            </label>
            <select
              name="upperCategory"
              value={form.upperCategory}
              onChange={handleChange}
              onBlur={handleUpperBlur}
              className={upperSelectCx}
            >
              <option value="">선택되지 않음</option>
              <option value="cat1">게임</option>
              <option value="cat2">애니메이션</option>
              <option value="cat2">행사</option>
              <option value="cat2">공연</option>
              <option value="cat2">캐릭터</option>
              <option value="cat2">성우 행사</option>
            </select>
            {upperInvalid && (
              <p className="mt-1 text-[13px] text-red-400">
                ⚠ 유효한 값을 선택하세요.
              </p>
            )}
          </div>

          {/* 간단한 소개 */}
          <div>
            <label className="block mb-1 text-[13px] text-neutral-300/90">
              간단한 소개
            </label>
            <textarea
              name="summary"
              value={form.summary}
              onChange={handleChange}
              placeholder="간단한 소개"
              className="w-full h-[7.5rem] resize-none bg-black text-neutral-200 p-3 text-sm rounded-[0.625rem] border-2 border-[#404043] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60"
            />
          </div>

          {/* 하위 분류 */}
          <div>
            <label className="block mb-1 text-[13px] text-neutral-300/90">
              하위 분류
            </label>
            <select
              name="lowerCategory"
              value={form.lowerCategory}
              onChange={handleChange}
              className={selectCx}
            >
              <option value="">선택되지 않음</option>
              <option value="sub1">콜라보 카페</option>
              <option value="sub2">팝업스토어</option>
              <option value="sub2">전시회</option>
              <option value="sub2">코스프레</option>
              <option value="sub2">극장판</option>
              <option value="sub2">밴드</option>
              <option value="sub2">DJ</option>
              <option value="sub2">오케스트라</option>
            </select>
          </div>

          {/* 시작 / 종료 / 주소 */}
          <div
            className="
              lg:col-span-2 grid grid-cols-1
              md:grid-cols-[16rem_16rem_auto_20rem]
              md:gap-x-6 gap-y-4
            "
          >
            {/* 시작 날짜 */}
            <div>
              <label className="block mb-1 text-[13px] text-neutral-300/90">
                시작 날짜
              </label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className={dateCx}
              />
            </div>

            {/* 종료 날짜 */}
            <div>
              <label className="block mb-1 text-[13px] text-neutral-300/90">
                종료 날짜
              </label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className={dateCx}
              />
            </div>

            {/* 스페이서: PC 이상에서만 보이도록 */}
            <div className="hidden md:block w-[15.5rem]" />

            {/* 주소 / 위치 */}
            <div ref={locRef} className="md:col-start-4">
              <label className="block mb-1 text-[13px] text-neutral-300/90">
                주소 / 위치
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-80">
                  {/* map-pin 아이콘 */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 22s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="주소를 검색하거나 입력"
                  className={`${selectCx} pl-10`}
                />
              </div>
            </div>
          </div>

          {/* 자세한 정보 */}
          <div className="lg:col-span-2">
            <label className="block mb-1 text-[13px] text-neutral-300/90">
              자세한 정보
            </label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="자세한 정보"
              className="w-full h-60 md:h-[30.4375rem] resize-none bg-black text-neutral-200 p-4 text-sm rounded-[0.625rem] border-2 border-[#404043] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60"
            />
          </div>

          {/* 제출 버튼 */}
          <div className="lg:col-span-2 flex justify-end pt-2">
            <button
              className="px-6 h-9 rounded-full bg-[#1E66FF] hover:bg-[#2B72FF] text-white text-sm font-semibold transition active:scale-[0.98]"
              onClick={() => alert('제출되었습니다')}
            >
              제보
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportPage
