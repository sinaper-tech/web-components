import React from 'react'

declare global {
  type HtmlElementProps = {
    children?: React.ReactNode
    className?: string
  }

  type ChildrenComponentProps = {
    children: React.ReactNode
  }
}
