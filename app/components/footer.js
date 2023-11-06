'use client'

import React from 'react'
import styles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className='wrapper'>
        <div className={styles.content}>
          <a
            href='mailto:hello@camgreen.works'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'white' }}
          >
            ✉️ -{' '}
            <span style={{ textDecoration: 'underline' }}>
              hello@camgreen.works
            </span>{' '}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
