import { useEffect, useState } from 'react'
export const useDebounce = <T = string>(value: T, wait: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, wait)
    return () => {
      clearTimeout(handler)
    }
  }, [value, wait])
  return debouncedValue
}
