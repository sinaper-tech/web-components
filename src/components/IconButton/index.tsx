import React from 'react'
import { classNames } from '@/utils/classNames'

type IconButtonProps = {
  className?: string
  icon: React.ElementType
  handleClick?: () => void
}

export const IconButton = (props: IconButtonProps): JSX.Element => {
  const { icon: Icon, className, handleClick } = props
  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(
        'flex items-center justify-center rounded-lg p-1 shadow transitions',
        'border border-light-200 dark:border-gray-600',
        'hover:bg-light-800 dark:hover:bg-dark-50',
        'active:bg-light-500 dark:active:bg-dark-400',
        className
      )}
    >
      <Icon className="h-7" />
    </button>
  )
}
