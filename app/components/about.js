'use client'

import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import styles from '../styles/about.module.scss'

gsap.registerPlugin(ScrollTrigger, SplitText)

const About = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} wrapper`}>
        <div className={styles.about}>
          <h2>
            I GET EXCITED ABOUT
            <br />
            DIGITAL THINGS
          </h2>
          <div className={styles.description}>
            <p>
              My name&apos;s Cam and I&apos;m a software engineer based in
              Manchester, UK. I specialise in building and designing exceptional
              digital experiences.
            </p>
            <p>
              I&apos;m currently focused on breathing life and interactivity
              into live and digital events at{' '}
              <a
                href='https://voxelstudio.co.uk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Voxel
              </a>
              , where I&apos;ve built software for events from London to New
              York.
            </p>
            <p>
              For high profile clients, I&apos;ve built full-stack web apps with
              Next.js and Firebase, native desktop apps with Electron, and iOS
              apps with React Native.
            </p>
            {/* <p>
              You find my GitHub{' '}
              <a
                href='https://github.com/camcgreen'
                target='_blank'
                rel='noopener noreferrer'
              >
                here
              </a>
              .
            </p> */}
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>CSS & SASS</li>
              <li>React</li>
              <li>Electron</li>
              <li>Node.js</li>
              <li>React Native</li>
            </ul>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.bgCircle} />
          <img className={styles.profileImg} src='/images/pp.jpg' alt='' />
        </div>
      </div>
    </section>
  )
}

export default About
