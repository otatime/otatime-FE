// src/pages/AdminHome.tsx

import warnIcon from '@/assets/warn.png'

const AdminHome = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-800 flex flex-col">
      {/* Header */}
      {/* <header className="flex items-center px-6 py-4 text-white">
        <div className="text-2xl font-bold">LOGO</div>
        <div className="ml-4 px-4 py-1 bg-black rounded-2xl">
          <span className="text-neutral-400 font-bold">ADMIN</span>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center">
        <div className="bg-neutral-900    w-[100%]  h-[100vh] flex flex-col justify-center items-center text-center px-6">
          <img src={warnIcon} alt="경고" className="w-[150px] h-[151px] mb-6" />

          <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
            로그인 필요!
          </h1>
          <p className="text-neutral-400 text-sm md:text-base mb-8">
            관리자 페이지에 접근하고 기여하기 위해서는 추가적인 로그인 과정이
            필요합니다!
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2.5 bg-blue-600 rounded-full text-white font-bold">
              로그인
            </button>
            <button className="px-6 py-2.5 rounded-full outline-1 outline-zinc-800 text-blue-600 font-bold">
              홈으로
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminHome
