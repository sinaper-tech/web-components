import { Box } from '@/components/Box'

export const ScrollHorizontal = ({ children }: ChildrenComponentProps): JSX.Element => {
  return <Box className="overflow-x-auto scrollbar w-full">{children}</Box>
}
