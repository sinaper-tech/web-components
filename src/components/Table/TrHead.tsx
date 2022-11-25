import { classNames } from '@/utils/classNames'

export const TrHead = (props: HtmlElementProps): JSX.Element => {
  const { children, className } = props
  return (
    <tr
      className={classNames(
        'text-dark-900 dark:text-light-900',
        className
      )}>
      {children}
    </tr>
  )
}
