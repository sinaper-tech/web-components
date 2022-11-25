import { classNames } from '@/utils/classNames'
import { Text } from '@/components/Text'

enum BadgeVariant {
  'primary',
  'success',
  'warning',
  'info',
  'error'
}

interface BadgeProps {
  text: string
  variant?: keyof typeof BadgeVariant
}

export const Badge = (props: BadgeProps): JSX.Element => {
  const { text, variant = 'primary' } = props
  return (
    <Text
      className={classNames(
        'text-xs font-semibold px-2 py-1 rounded',
        variant === 'primary' && 'bg-gray-800 text-gray-100',
        variant === 'success' && 'bg-green-300 text-green-900',
        variant === 'warning' && 'bg-yellow-100 text-yellow-900',
        variant === 'info' && 'bg-blue-300 text-blue-900',
        variant === 'error' && 'bg-red-200 text-red-900'
      )}
    >{text}
    </Text>
  )
}
