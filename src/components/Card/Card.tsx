import React from 'react'
import { classNames } from '@/utils/classNames'
import { Box } from '@/components/Box'

type CardProps = {
  className?: string
} & React.ComponentPropsWithRef<'div'>

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <Box
      ref={ref}
      className={classNames(
        'w-full p-4 rounded-lg border shadow-md scrollbar',
        'bg-light-900 dark:bg-dark-500',
        'border-gray-200 dark:border-dark-200',
        className
      )}
      {...rest}
    >
      {children}
    </Box>
  )
})

Card.displayName = 'Card'
