import React from 'react'
import { Box } from '@/components/Box'

type CardBodyProps = {
  className?: string
} & React.ComponentPropsWithRef<'div'>

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <Box
      ref={ref}
      className={className}
      {...rest}
    >
      {children}
    </Box>
  )
})

CardBody.displayName = 'CardBody'
