import React from 'react'
import { classNames } from '@/utils/classNames'
import { Box } from '@/components/Box'

type OverlayProps = {
  className?: string
} & React.ComponentPropsWithRef<'div'>

export const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <Box
      ref={ref}
      id={rest.id}
      className={classNames(
        'fixed w-full h-full left-0 top-0 overflow-hidden bg-blackAlpha-500 cursor-default',
        className
      )}
      {...rest}
    >
      {children}
    </Box>
  )
})

Overlay.displayName = 'Overlay'
