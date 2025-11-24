import React, { createContext, useContext, useState } from 'react'

import { Select, SelectProps } from './Select'

type StatefulSelectContextValue = {
  value: string
  onValueChange: (value: string) => void
}

const StatefulSelectContext = createContext<StatefulSelectContextValue | undefined>(undefined)

export const useStatefulSelectContext = () => {
  const context = useContext(StatefulSelectContext)
  if (!context) {
    throw new Error('useStatefulSelectContext must be used within a StatefulSelectProvider')
  }
  return context
}

export const StatefulSelect: React.FC<SelectProps> = ({ children, ...props }) => {
  const [value, setValue] = useState(props.defaultValue || '')

  const handleValueChange = (newValue: string) => {
    setValue(newValue)
    if (props.onValueChange) {
      props.onValueChange(newValue)
    }
  }

  return (
    <StatefulSelectContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <Select {...props} value={value} onValueChange={handleValueChange}>
        {children}
      </Select>
    </StatefulSelectContext.Provider>
  )
}

StatefulSelect.displayName = 'StatefulSelect'
