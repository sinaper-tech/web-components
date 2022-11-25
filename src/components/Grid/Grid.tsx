import { classNames } from '@/utils/classNames'
import { Box } from '@/components/Box'

export const Grid = (props: HtmlElementProps): JSX.Element => {
  const { children, className } = props
  return (
    <Box
      className={classNames(
        'grid gap-4 grid-cols-12',
        className
      )}
    >
      {children}
    </Box>
  )
}
