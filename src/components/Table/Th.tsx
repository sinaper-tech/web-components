import { classNames } from '@/utils/classNames'

export const Th = (props: HtmlElementProps): JSX.Element => {
  const { children, className } = props
  return (
    <th
      className={classNames(
        'align-middle p-2 text-left',
        className
      )}
    >
      {children}
    </th>
  )
}
