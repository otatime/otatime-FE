import { Button } from '@/components'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components'
import { Input } from '@/components'
import { Label } from '@/components'
import { EveBtn } from './eveBtn'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CardDemo() {
  const [isEve, setIsEve] = useState(false)
  const handleEve = () => {
    setIsEve(!isEve)
  }

  return (
    <div className="w-screen h-screen bg-neutral-800 flex justify-center items-center">
      <Card className="w-96  bg-neutral-900 rounded-2xl border border-zinc-800">
        <CardHeader>
          <CardTitle className="text-white text-3xl font-bold font-['Inter']">
            로그인
          </CardTitle>
          <CardDescription className="text-neutral-400 text-base font-normal font-['Inter']">
            로그인하여 더 많은 기능을 경험하세요!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4 items-center">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="w-80 h-12 bg-blue-600/5 rounded-[10px] border-2 text-white border-neutral-700 focus:!border-blue-600 focus:!ring-0 focus:!outline-none"
                  id="email"
                  type="email"
                  placeholder="이메일"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center hidden">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    className="w-80 h-12 bg-blue-600/5 rounded-[10px] border-2 text-white border-neutral-700 focus:!border-blue-600 focus:!ring-0 focus:!outline-none"
                    id="password"
                    type={isEve ? 'text' : 'password'}
                    placeholder="비밀번호"
                    required
                  />
                  <EveBtn
                    onClick={handleEve}
                    isEve={isEve}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between gap-2 mt-6">
          <Link to="/signup">
            <Button
              className="text-zinc-600 text-base font-normal font-['Inter'] underline"
              variant="link"
            >
              회원가입
            </Button>
          </Link>

          <Button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-400 rounded-[100px] inline-flex justify-center items-center gap-2.5 text-white text-base font-bold font-['Inter']"
          >
            로그인
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
