export type CalEvent = {
  id: string
  date: string // 'YYYY-MM-DD'
  title: string
  coverUrl?: string
}

export type MonthInfo = { year: number; month: number } // 0-11

export const toYMD = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate(),
  ).padStart(2, '0')}`

export const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

export const getKoreanMonthTitle = (d: Date) =>
  `${d.getFullYear()}년 ${String(d.getMonth() + 1).padStart(2, '0')}월`

export const getMonthMatrix = (base: Date) => {
  const y = base.getFullYear()
  const m = base.getMonth()
  const first = new Date(y, m, 1)
  const startDay = first.getDay() // 0=Sun
  const start = new Date(y, m, 1 - startDay)

  const out: Date[] = []
  for (let i = 0; i < 42; i++) {
    out.push(
      new Date(start.getFullYear(), start.getMonth(), start.getDate() + i),
    )
  }
  return out
}
