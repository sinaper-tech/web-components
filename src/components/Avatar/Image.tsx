type ImageAvatarProps = {
  src: string
}

export const ImageAvatar = ({ src }: ImageAvatarProps): JSX.Element => {
  return <img className="h-10 w-10 rounded-full" src={src} alt="avatar" />
}
