import { classNames } from '@/utils/classNames'
import { Box } from '@/components/Box'

interface ColsOptions {
  [key: number]: string
}

const LG_COLS: ColsOptions = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
  8: 'lg:col-span-8',
  9: 'lg:col-span-9',
  10: 'lg:col-span-10',
  11: 'lg:col-span-11',
  12: 'lg:col-span-12'
}

type GridColProps = {
  className?: string
  lgCols?: number
} & ChildrenComponentProps

export const GridCol = (props: GridColProps): JSX.Element => {
  const { children, className, lgCols = 12 } = props
  return (
    <Box
      className={classNames(
        'col-span-12',
        LG_COLS[lgCols],
        className
      )}
    >
      {children}
    </Box>
  )
}
