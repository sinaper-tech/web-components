import { classNames } from '@/utils/classNames'
import { Text } from '@/components/Text'

export const Td = (props: HtmlElementProps): JSX.Element => {
  const { children, className } = props
  return (
    <td
      className={classNames(
        'align-middle p-3 text-left first:rounded-l-lg last:rounded-r-lg',
        className
      )}
    >
      <Text className="break-words w-[100px]">
        {children}
      </Text>
    </td>
  )
}
