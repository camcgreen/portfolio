'use client'

import React from 'react'
import styles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className='wrapper'>
        <div className={styles.content}>
          <p>Let's talk!</p>
          <a
            href='mailto:hello@camgreen.works'
            target='_blank'
            rel='noopener noreferrer'
          >
            hello@camgreen.works
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
