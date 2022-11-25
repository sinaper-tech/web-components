import React from 'react'
import { classNames } from '@/utils/classNames'
import { LoaderButtonIcon } from '@sinaper/icons'
import { Box } from '@/components/Box'

enum ButtonVariant {
  'primary',
  'outline',
  'link'
}

export type ButtonProps = {
  variant?: keyof typeof ButtonVariant
  isLoading?: boolean
  className?: string
} & React.ComponentPropsWithRef<'button'>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    variant = 'primary',
    className,
    ...rest
  } = props

  const disabled = rest.isLoading ?? rest.disabled

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={classNames(
        'w-full flex items-center justify-center p-2 rounded-lg border font-bold',
        'text-light-900 dark:text-dark-900',
        'transitions shadow-sm',
        'disabled:cursor-not-allowed',
        variant === 'primary' && [
          'bg-primary-900 dark:bg-primary-500',
          'border-primary-700 dark:border-primary-700',
          'hover:bg-primary-800 dark:hover:bg-primary-300',
          'active:bg-primary-900 dark:active:bg-primary-200',
          'disabled:bg-gray-400 dark:disabled:bg-gray-500',
          'disabled:border-gray-400 dark:disabled:border-gray-500'
        ],
        variant === 'outline' && [
          'text-primary-900 dark:text-primary-500',
          'border-primary-900 dark:border-primary-500',
          'hover:bg-primary-50 dark:hover:bg-primary-300',
          'dark:hover:text-dark-900',
          'active:bg-primary-100 dark:active:bg-primary-300',
          'disabled:bg-gray-400 dark:disabled:bg-gray-500',
          'disabled:text-light-900 dark:disabled:text-dark-900',
          'disabled:border-gray-400 dark:disabled:border-gray-500'
        ],
        variant === 'link' && [
          'border-0 shadow-none',
          'text-primary-900 dark:text-primary-300',
          'hover:text-primary-700 dark:hover:text-primary-500'
        ],
        className
      )}
      {...rest}
    >
      {rest.isLoading && (
        <Box className="text-light-900 dark:text-dark-900">
          <LoaderButtonIcon className="h-7 animate-spin" />
        </Box>
      )}
      {children}
    </button>
  )
})

Button.displayName = 'Button'
