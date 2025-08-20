// src/components/Footer.tsx

import { Button, Separator } from '@/components'
import xIcon from '@/assets/icons/xicon.svg'
import fIcon from '@/assets/icons/facebook.svg'
import iIcon from '@/assets/icons/instagram.svg'
import appStore from '@/assets/icons/applestore.svg'
import googlePlay from '@/assets/icons/googleplay.svg'

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-white py-10 px-6 border-t border-zinc-800">
      <div className="max-w-[111.75rem] mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-6">
        {/* Left Section */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="text-lg font-bold">OTATIME</div>
          <p className="text-sm text-zinc-400">
            <strong>오타타임</strong>은 서브컬처 행사를 한곳에 모아, 달력으로
            보고 빠르게 검색할 수 있는 플랫폼입니다.
          </p>
          <div className="flex gap-3 mt-2">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md bg-zinc-800 hover:bg-zinc-700"
            >
              <img src={fIcon} alt="X" className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md bg-zinc-800 hover:bg-zinc-700"
            >
              <img src={iIcon} alt="X" className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md bg-zinc-800 hover:bg-zinc-700"
            >
              <img src={xIcon} alt="X" className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-xs text-zinc-500 mt-6 px-2 py-1 bg-zinc-800 rounded">
            Copyright © 2025, 오타타임 All rights reserved.
          </p>
        </div>

        {/* Vertical Separator */}
        <Separator
          orientation="vertical"
          className="hidden md:block bg-zinc-700 w-[1px] mx-2"
        />

        {/* Middle Section */}
        <div className="flex flex-col gap-2 flex-1">
          <h4 className="font-semibold mb-1">빠른 링크</h4>
          <a href="#" className="text-sm text-zinc-400 hover:underline">
            문의하기
          </a>
          <a href="#" className="text-sm text-zinc-400 hover:underline">
            커뮤니티
          </a>
          <a href="#" className="text-sm text-zinc-400 hover:underline">
            개인정보처리방침
          </a>
        </div>

        {/* Vertical Separator */}
        <Separator
          orientation="vertical"
          className="hidden md:block bg-zinc-700 w-[1px] mx-2"
        />

        {/* Right Section - App Buttons */}
        <div className="flex flex-col gap-4 flex-1">
          <img
            src={appStore}
            alt="Download on the App Store"
            className="w-[10rem]"
          />
          <img
            src={googlePlay}
            alt="Get it on Google Play"
            className="w-[10rem]"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
