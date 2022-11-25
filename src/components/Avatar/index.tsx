import React from 'react'
import { classNames } from '@/utils/classNames'
import { FlexRow } from '@/components/Flex/FlexRow'

import { ImageAvatar } from './Image'
import { NameAvatar } from './Name'

export type AvatarProps = {
  name: string
} & React.ComponentPropsWithRef<'img'>

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>((props, ref) => {
  const { name, src, ...rest } = props
  return (
    <FlexRow
      ref={ref}
      className={classNames(
        'items-center justify-center h-10 w-10 rounded-full',
        'bg-primary-900 dark:bg-primary-100',
        'text-light-900 dark:text-dark-800',
        rest.className
      )}
      {...rest}
    >

      {src
        ? <ImageAvatar src={src} />
        : <NameAvatar name={name} />
      }
    </FlexRow>
  )
})

Avatar.displayName = 'Avatar'
