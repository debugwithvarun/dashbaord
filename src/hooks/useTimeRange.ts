import { useState } from 'react'

export type TimeRange = '1d' | '1w' | '1m' | '1y'

export const useTimeRange = (defaultRange: TimeRange = '1d') => {
  const [selectedRange, setSelectedRange] = useState<TimeRange>(defaultRange)
  
  return {
    selectedRange,
    setSelectedRange
  }
}
