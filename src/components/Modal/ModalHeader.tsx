import { Dialog } from '@headlessui/react'
import { CloseIcon } from '@sinaper/icons'
import { classNames } from '@/utils/classNames'
import { Box } from '@/components/Box'
import { Text } from '@/components/Text'

interface HeaderProps {
  title?: React.ReactNode
  close: () => void
}

export const ModalHeader = ({ title, close }: HeaderProps): JSX.Element => {
  return (
    <Dialog.Title>
      <Box className="h-14 w-full top-0 flex items-center justify-between p-4 rounded-t border-b border-light-200 dark:border-dark-50">
        <Dialog.Title>
          <Text className="text-xl font-semibold">{title}</Text>
        </Dialog.Title>
        <button
          type="button"
          onClick={close}
          className={classNames(
            'flex items-center rounded-lg text-sm p-1 transitions',
            'bg-blackAlpha-400 dark:bg-whiteAlpha-400 hover:bg-blackAlpha-200 dark:hover:bg-whiteAlpha-600'
          )}
        >
          <CloseIcon className="w-6" />
          <Text className="sr-only">
            Fechar modal
          </Text>
        </button>
      </Box>
    </Dialog.Title>
  )
}
