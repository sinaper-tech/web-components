import { Dialog } from '@headlessui/react'
import { Box } from '@/components/Box'
import { Overlay } from '@/components/Overlay'

export const Modal = ({ children }: ChildrenComponentProps): JSX.Element => {
  return (
    <Dialog open={true} onClose={() => {}}>
      <Dialog.Panel>
        <Overlay className="flex items-center justify-center z-50">
          <Box className="w-full h-full p-2 lg:max-w-screen-lg">
            <Box className="relative w-full h-full rounded-lg shadow bg-light-900 dark:bg-dark-500">
              {children}
            </Box>
          </Box>
        </Overlay>
      </Dialog.Panel>
    </Dialog>
  )
}
