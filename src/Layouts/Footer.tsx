// src/components/Footer.tsx
import { Facebook, Instagram, X as Twitter } from 'lucide-react'
import { Button, Separator } from '@/components'

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-white py-10 px-6 border-t border-zinc-800">
      <div className="max-w-[111.75rem] mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-6">
        {/* Left Section */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="text-lg font-bold">OTATIME</div>
          <p className="text-sm text-zinc-400">오타타임 설명, 오타타임 설명</p>
          <div className="flex gap-3 mt-2">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md bg-zinc-800 hover:bg-zinc-700"
            >
              <Facebook className="h-5 w-5 text-white" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md bg-zinc-800 hover:bg-zinc-700"
            >
              <Instagram className="h-5 w-5 text-white" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-md bg-zinc-800 hover:bg-zinc-700"
            >
              <Twitter className="h-5 w-5 text-white" />
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
            src="/assets/appstore-badge.svg"
            alt="Download on the App Store"
            className="w-[10rem]"
          />
          <img
            src="/assets/googleplay-badge.png"
            alt="Get it on Google Play"
            className="w-[10rem]"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
