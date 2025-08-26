const config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class'], // ✅ 추가: html에 class="dark" 붙으면 다크모드 적용

  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
} as const

export default config
