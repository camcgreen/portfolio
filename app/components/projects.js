'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import styles from '../styles/projects.module.scss'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Projects = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} wrapper`}>
        <div className={styles.projects}>
          <h2>
            SOME OF
            <br />
            MY WORK.
          </h2>
          <div className={styles.project}>
            <Link href='/projects/spotlight'>
              <div className={styles.hero}>
                <img
                  src='/images/hero-jobstasy.jpg'
                  alt='Spotlight hero image'
                  data-speed='auto'
                />
              </div>
            </Link>
            <h4>Spotlight</h4>
            <h3>
              3D product
              <br />
              mockup creator.
            </h3>
            <div className={styles.links}>
              <Link href='/projects/spotlight'>
                <button>
                  <p>View project</p>
                </button>
              </Link>
              <a
                href='https://github.com/camcgreen/spotlight'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className={styles.github}
                  src='/images/github.svg'
                  alt=''
                />
              </a>
            </div>
          </div>
          <div className={styles.project}>
            <Link href='/projects/chatbox'>
              <div className={styles.hero}>
                <img
                  src='/images/hero-chatbox.jpg'
                  alt='Chatbox hero image'
                  data-speed='auto'
                />
              </div>
            </Link>
            <h4>Interactions Library</h4>
            <h3>
              User interface
              <br />
              microexperiments.
            </h3>
            <div className={styles.links}>
              <Link href='/projects/interactions-library'>
                <button>
                  <p>View project</p>
                </button>
              </Link>
              <a
                href='https://github.com/camcgreen/jelly-slider'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className={styles.github}
                  src='/images/github.svg'
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
