import { useEffect, useState } from 'react'
import { classNames } from '@/utils/classNames'
import { Box } from '@/components/Box'

export const ScrollVertical = ({ children, className }: HtmlElementProps): JSX.Element => {
  const [height, setHeight] = useState('0')

  useEffect(() => {
    setHeight(`${window.innerHeight / 16}rem`)
  }, [])

  return (
    <Box style={{ height }} className={classNames(
      'overflow-y-auto scrollbar pb-[14rem]',
      className
    )}
    >
      {children}
    </Box>
  )
}
