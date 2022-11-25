type TableProps = {
  borderSpacing?: string
} & HtmlElementProps

export const Table = (props: TableProps): JSX.Element => {
  const { children, borderSpacing = '0 .5rem' } = props
  return (
    <table
      className="w-full border-separate"
      style={{ borderSpacing }}
    >
      {children}
    </table>
  )
}
