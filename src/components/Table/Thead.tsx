import { classNames } from '@/utils/classNames'

export const Thead = (props: HtmlElementProps): JSX.Element => {
  const { children, className } = props
  return (
    <thead className={classNames(className)}>
      {children}
    </thead>
  )
}
