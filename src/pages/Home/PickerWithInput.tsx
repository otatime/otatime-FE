'use client'
import * as React from 'react'
import {
  Button,
  Calendar,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Label,
} from '@/components/UI'
import type { DateRange } from 'react-day-picker'

import CalendarBtn from './CalendarBtn'

const formatDate = (date: Date | undefined) => {
  if (!date) {
    return ''
  }
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

const formatRangeDates = (range: { from?: Date; to?: Date }) => {
  if (!range.from) {
    return ''
  }
  if (!range.to) {
    return formatDate(range.from)
  }
  return `${formatDate(range.from)} ~ ${formatDate(range.to)}`
}

export function Calendar28({
  startDate,
  endDate,
}: {
  startDate: Date
  endDate: Date
}) {
  const [open, setOpen] = React.useState(false)
  const [selectedRange, setSelectedRange] = React.useState<
    DateRange | undefined
  >(undefined)
  const [month, setMonth] = React.useState<Date | undefined>(new Date())
  const [value, setValue] = React.useState(
    formatRangeDates({ from: startDate, to: endDate }),
  )

  return (
    <div className="flex flex-col">
      <Label htmlFor="date" className="hidden">
        Subscription Date
      </Label>
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={value}
          placeholder={value}
          className="w-85 bg-neutral-800 text-white border-neutral-500 pr-10"
          onChange={(e) => {
            setValue(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2 hover:bg-gray-700"
            >
              <CalendarBtn />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0 bg-neutral-800 text-white"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="range"
              selected={selectedRange}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(range) => {
                setSelectedRange(range)

                if (range?.from) {
                  const fromFormatted = range.from.toLocaleDateString('en-US', {
                    month: 'long',
                    day: '2-digit',
                    year: 'numeric',
                  })
                  console.log('시작일:', fromFormatted)

                  if (range.to) {
                    const toFormatted = range.to.toLocaleDateString('en-US', {
                      month: 'long',
                      day: '2-digit',
                      year: 'numeric',
                    })
                    console.log('종료일:', toFormatted)
                  }
                  setValue(
                    formatRangeDates(
                      range || { from: undefined, to: undefined },
                    ),
                  )
                }
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
