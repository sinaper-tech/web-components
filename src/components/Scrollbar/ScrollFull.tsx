import { Box } from '@/components/Box'

export const ScrollFull = ({ children }: ChildrenComponentProps): JSX.Element => {
  return <Box className="overflow-y-auto scrollbar w-full h-[31rem] pb-[150px] lg:pb-[100px]">{children}</Box>
}
