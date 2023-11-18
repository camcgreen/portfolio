'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '../styles/nav.module.scss'

const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <img src='/images/logo.svg' alt='' />
      </Link>
      {/* <img src='/images/menu.svg' /> */}
    </nav>
  )
}

export default Nav
