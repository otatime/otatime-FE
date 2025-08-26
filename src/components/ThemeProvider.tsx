// src/components/ThemeProvider.tsx
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class" // ✅ <html class="light|dark">
      defaultTheme="system" // 기본값 (원하면 "dark"로)
      enableSystem
      storageKey="otatime-theme" // 로컬스토리지 키
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
