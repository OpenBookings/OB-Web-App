"use client"

import * as React from "react"
import { type DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"

interface Calendar05Props {
  checkIn?: string
  checkOut?: string
  onDateChange?: (dateRange: DateRange | undefined) => void
}

export function Calendar05({ checkIn, checkOut, onDateChange }: Calendar05Props) {
  const dateRange: DateRange | undefined = React.useMemo(() => {
    if (!checkIn && !checkOut) return undefined
    return {
      from: checkIn ? new Date(checkIn) : undefined,
      to: checkOut ? new Date(checkOut) : undefined,
    }
  }, [checkIn, checkOut])

  const handleSelect = (range: DateRange | undefined) => {
    onDateChange?.(range)
  }

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from || new Date()}
      selected={dateRange}
      onSelect={handleSelect}
      numberOfMonths={2}
      className="rounded-lg border shadow-sm"
    />
  )
}
