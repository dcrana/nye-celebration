import { Link, useLocation } from 'react-router-dom'
import styles from './header.module.scss'
import { FC } from 'react'

const Header: FC = () => {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.logo}>New Year Celebration</div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? styles.active : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
              className={
                location.pathname === '/registration' ? styles.active : ''
              }
            >
              Registration
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
