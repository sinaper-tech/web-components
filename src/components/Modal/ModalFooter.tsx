import { classNames } from '@/utils/classNames'
import { Box } from '@/components/Box'

export const ModalFooter = ({ children }: ChildrenComponentProps): JSX.Element => {
  return (
    <Box className={classNames(
      'h-14 w-full flex items-center justify-end bottom-0',
      'bg-gray-200 dark:bg-gray-800 px-6 py-8 space-x-2 rounded-b',
      'border-t border-light-200 dark:border-dark-50'
    )}>
      {children}
    </Box>
  )
}
