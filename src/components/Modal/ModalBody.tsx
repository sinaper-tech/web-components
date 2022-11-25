import { classNames } from '@/utils/classNames'
import { Box } from '@/components/Box'

export const ModalBody = ({ children, className }: HtmlElementProps): JSX.Element => {
  return (
    <Box className={classNames(
      'w-full py-2 px-2 space-y-4 overflow-y-auto scrollbar',
      className
    )}>
      {children}
    </Box>
  )
}
