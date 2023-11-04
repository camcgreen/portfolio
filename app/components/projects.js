'use client'

import React, { useEffect, useState } from 'react'
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
            SOME THINGS
            <br />
            I'VE BUILT
          </h2>
          <div className={styles.project}>
            <div className={styles.hero}>
              <img
                src='/images/hero-jobstasy.jpg'
                alt='Jobstasy hero image'
                data-speed='auto'
              />
            </div>
            <h4>Jobstasy</h4>
            <h3>
              Remote job
              <br />
              search platform.
            </h3>
            <div className={styles.links}>
              <button>
                <p>View project</p>
              </button>
              <img className={styles.github} src='/images/github.svg' alt='' />
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.hero}>
              <img
                src='/images/hero-chatbox.jpg'
                alt='Chatbox hero image'
                data-speed='auto'
              />
            </div>
            <h4>Chatbox</h4>
            <h3>
              Real time
              <br />
              chat application.
            </h3>
            <div className={styles.links}>
              <button>
                <p>View project</p>
              </button>
              <img className={styles.github} src='/images/github.svg' alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
