import React from 'react'
import { classNames } from '@/utils/classNames'

type FlexColProps = {
  className?: string
} & React.ComponentPropsWithRef<'div'>

export const FlexCol = React.forwardRef<HTMLDivElement, FlexColProps>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div
      ref={ref}
      className={classNames(
        'flex flex-col',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
})

FlexCol.displayName = 'FlexCol'
