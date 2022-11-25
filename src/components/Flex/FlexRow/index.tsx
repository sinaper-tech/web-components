import React from 'react'
import { classNames } from '@/utils/classNames'

type FlexRowProps = {
  className?: string
} & React.ComponentPropsWithRef<'div'>

export const FlexRow = React.forwardRef<HTMLDivElement, FlexRowProps>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div
      ref={ref}
      className={classNames(
        'flex flex-row',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
})

FlexRow.displayName = 'FlexRow'
