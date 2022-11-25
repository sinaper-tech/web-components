import React from 'react'
import { classNames } from '@/utils/classNames'
import { Box } from '@/components/Box'
import { Text } from '@/components/Text'

type SwitchProps = {
  label?: string
  initValue?: boolean
  handleChange: (value: boolean) => void
} & React.ComponentPropsWithRef<'input'>

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const { label, initValue = false, handleChange, ...rest } = props
  return (
    <label
      htmlFor={rest.id}
      className="inline-flex relative items-center cursor-pointer"
    >
      <input
        onChange={() => handleChange(!initValue)}
        checked={initValue}
        ref={ref}
        type="checkbox"
        id={rest.id}
        className="sr-only peer"
        {...rest}
      />
      <Box className={classNames(
        'w-11 h-6 rounded-full peer',
        'bg-gray-300 dark:bg-gray-700',
        'dark:border-gray-600 ',
        'peer-checked:bg-primary-900 dark:peer-checked:bg-secondary-300',
        'peer-focus:outline-none',
        'peer-checked:after:translate-x-full peer-checked:after:border-white',
        'after:absolute after:border after:h-5 after:w-5 after:rounded-full after:top-[2px] after:left-[2px]',
        'after:bg-light-900 after:border-gray-300 after:transition-all'
      )}></Box>
      {!!label && (
        <Text className="ml-2 text-sm font-medium">
          {label}
        </Text>
      )}
    </label>
  )
})

Switch.displayName = 'Switch'
