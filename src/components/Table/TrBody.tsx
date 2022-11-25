import { classNames } from '@/utils/classNames'

type Props = {
  striped?: boolean
} & HtmlElementProps

export const TrBody = (props: Props): JSX.Element => {
  const { children, className, striped = false } = props
  return (
    <tr className={classNames(
      striped && 'odd:bg-light-800 even:bg-light-400 dark:odd:bg-dark-800 dark:even:bg-dark-400',
      className
    )}>
      {children}
    </tr>
  )
}
