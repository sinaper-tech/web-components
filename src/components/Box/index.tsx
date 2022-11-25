import React from 'react'

type BoxProps = {
  className?: string
} & React.ComponentPropsWithRef<'div'>

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div
      ref={ref}
      className={className}
      {...rest}
    >
      {children}
    </div>
  )
})

Box.displayName = 'Box'
