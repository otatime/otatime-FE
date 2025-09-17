// src/pages/User/User.tsx
import { useMemo } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/UI/avatar'
import { Button } from '@/components/UI/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/UI/Card'
import { Switch } from '@/components/UI/switch'
import { RadioGroup, RadioGroupItem } from '@/components/UI/radio-group'
import { Separator } from '@/components/UI/separator'
import { ExternalLink, ChevronRight, LogOut, Pencil, Heart } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Link } from 'react-router-dom'

export default function User() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme()
  const isSystem = theme === 'system'

  const effectiveTheme = useMemo<'light' | 'dark'>(() => {
    const t = isSystem ? systemTheme : resolvedTheme
    return (t as 'light' | 'dark') ?? 'light'
  }, [isSystem, systemTheme, resolvedTheme])

  return (
    <section className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-10 md:py-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-28 w-28 md:h-32 md:w-32 ring-2 border-border/60">
            <AvatarImage src="https://i.pravatar.cc/240?img=12" alt="profile" />
            <AvatarFallback className="text-xl">TT</AvatarFallback>
          </Avatar>

          <h1 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight">
            Ttangkong님 환영합니다!
          </h1>

          <p className="mt-2 text-sm text-foreground/60">
            ttankkeo112@gmail.com
          </p>

          <Button
            variant="outline"
            size="sm"
            className="mt-4 rounded-full px-5"
          >
            <LogOut className="mr-2 h-4 w-4" />
            로그아웃
          </Button>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-8 grid w-full max-w-xl gap-4">
          {/* Profile / Wish */}
          <Card className="bg-card border border-border">
            <CardContent className="p-0">
              {/* 프로필 수정 (버튼 유지) */}
              <button
                type="button"
                className="group flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <Pencil className="h-4 w-4 text-foreground/60" />
                  <span className="text-sm">프로필 수정</span>
                </div>
                <ExternalLink className="h-4 w-4 text-foreground/60 group-hover:text-foreground" />
              </button>

              <Separator className="bg-border" />

              {/* ✅ 전체 행을 Link로 변경 */}
              <Link
                to="/wish"
                className="group flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <Heart className="h-4 w-4 text-foreground/60" />
                  <span className="text-sm">찜 목록</span>
                </div>
                <ChevronRight className="h-4 w-4 text-foreground/60 group-hover:text-foreground" />
              </Link>
            </CardContent>
          </Card>

          {/* Theme */}
          <Card className="bg-card border border-border">
            <CardHeader className="px-5 pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">
                  OS 테마 사용
                </CardTitle>
                <Switch
                  checked={isSystem}
                  onCheckedChange={(checked) => {
                    if (checked) setTheme('system')
                    else setTheme(effectiveTheme)
                  }}
                />
              </div>
            </CardHeader>

            <CardContent className="px-5 pb-5">
              <RadioGroup
                className="grid gap-3"
                value={effectiveTheme}
                onValueChange={(v) => setTheme(v as 'light' | 'dark')}
                disabled={isSystem}
              >
                <label
                  htmlFor="theme-light"
                  className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-3 py-2 cursor-pointer transition hover:bg-muted"
                >
                  <RadioGroupItem id="theme-light" value="light" />
                  <span className="text-sm">라이트</span>
                </label>

                <label
                  htmlFor="theme-dark"
                  className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-3 py-2 cursor-pointer transition hover:bg-muted"
                >
                  <RadioGroupItem id="theme-dark" value="dark" />
                  <span className="text-sm">다크</span>
                </label>
              </RadioGroup>

              {isSystem && (
                <p className="mt-3 text-xs text-foreground/60">
                  현재 OS 설정에 따라 테마가 자동 적용됩니다.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
