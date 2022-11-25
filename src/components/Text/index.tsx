import React from 'react'
import { classNames } from '@/utils/classNames'

export const Text = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithRef<'span'>>((props, ref) => {
  const { children, ...rest } = props
  return (
    <span
      ref={ref}
      className={classNames('inline', rest.className)}
      {...rest}
    >
      {children}
    </span>
  )
})

Text.displayName = 'Text'
