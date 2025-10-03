import { Button } from '../ui/button'
// import type { TimeRange } from '../../hooks/useTimeRange'
export type TimeRange = '1d' | '1w' | '1m' | '1y'

interface TimeToggleProps {
  selectedRange?: TimeRange
  onRangeChange?: (range: TimeRange) => void
}

const TimeToggle = ({ selectedRange, onRangeChange }: TimeToggleProps) => {
  const ranges: { value: TimeRange; label: string }[] = [
    { value: '1d', label: 'D' },
    { value: '1w', label: 'W' },
    { value: '1m', label: 'M' },
    { value: '1y', label: 'Y' },
  ]

  return (
    <div className='flex gap-1'>
      {ranges.map(({ value, label }) => (
        <Button
          key={value}
          variant={selectedRange === value ? "secondary" : "ghost"}
          size="sm"
          onClick={() => onRangeChange && onRangeChange(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}

export default TimeToggle
