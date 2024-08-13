import { FC, ReactNode } from 'react'
import styles from './layout.module.scss'
import Header from '../header/Header'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
