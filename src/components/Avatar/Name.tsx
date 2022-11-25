import { Text } from '@/components/Text'

type NameAvatarProps = {
  name: string
}

export const NameAvatar = ({ name }: NameAvatarProps): JSX.Element => {
  const partsName = name.split(' ')

  if (partsName.length >= 2) {
    return (
      <>
        <Text>
          {partsName[0].charAt(0)}
        </Text>
        <Text>
          {partsName[1].charAt(0)}
        </Text>
      </>
    )
  }

  return (
    <Text>
      {partsName[0].charAt(0)}
    </Text>
  )
}
