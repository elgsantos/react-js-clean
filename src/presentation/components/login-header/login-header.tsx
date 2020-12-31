import React, { memo } from 'react'
import Styles from './login-header-styles.scss'
import { Logo } from '@/presentation/components'

type Props = React.HTMLAttributes<HTMLElement>

const LoginHeader: React.FC<Props> = (props: Props) => {
  return (
    <header {...props} className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
