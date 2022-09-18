import React, { ChangeEvent, FC } from 'react'

interface InputSearchProps {
  value: string
  onChange(e: ChangeEvent<HTMLInputElement>): void
}
export const ObjectSearch: FC<InputSearchProps> = ({ value, onChange }) => {
  return (
    <input
      tabIndex={0}
      value={value}
      onChange={onChange}
      type="input"
      placeholder="Search"
      className="text-black bg-gray-100 w-full focus:outline-none px-4 py-3 sticky top-0"
    />
  )
}
