import { classNames } from '@/utils/classNames'
import { Box } from '@/components/Box'

enum AlertVariant {
  'primary',
  'success',
  'warning',
  'info',
  'error'
}

type AlertProps = {
  variant?: keyof typeof AlertVariant
} & ChildrenComponentProps

export const Alert = (props: AlertProps): JSX.Element => {
  const { children, variant = 'primary' } = props
  return (
    <Box
      role="alert"
      className={classNames(
        'p-4 mb-4 text-sm',
        variant === 'primary' && 'bg-gray-800 text-gray-100',
        variant === 'success' && 'bg-green-300 text-green-900',
        variant === 'warning' && 'bg-yellow-100 text-yellow-900',
        variant === 'info' && 'bg-blue-300 text-blue-900',
        variant === 'error' && 'bg-red-200 text-red-900'
      )}>
      {children}
    </Box>
  )
}
