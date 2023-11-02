'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '../styles/nav.module.scss'

const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className={styles.nav}>
      <img src='/images/logo.svg' alt='' />
      <img src='/images/menu.svg' />
      {/* <ul>
        <Link
          href='/'
          style={{
            textDecoration: pathname === '/' ? 'underline' : 'none',
          }}
        >
          about
        </Link>
        <Link href='/projects'>projects</Link>
      </ul> */}
    </nav>
  )
}

export default Nav
