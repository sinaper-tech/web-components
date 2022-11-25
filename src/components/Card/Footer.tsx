import { classNames } from '@/utils/classNames'
import { FlexRow } from '@/components/Flex/FlexRow'

export const CardFooter = ({ children, className }: HtmlElementProps): JSX.Element => {
  return (
    <FlexRow className={classNames(
      'flex items-center space-x-2',
      className
    )}>
      {children}
    </FlexRow>
  )
}
