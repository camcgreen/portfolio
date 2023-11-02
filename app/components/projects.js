'use client'

import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
import styles from '../styles/about.module.scss'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Projects = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.content} wrapper`}>
        <div className={styles.skills}>
          <h2>
            SOME THINGS
            <br />
            I'VE BUILT
          </h2>
        </div>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut et massa mi.
          </p>
          <p>
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
            non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
            maximus ante fermentum sit amet. Pellentesque commodo lacus at
            sodales sodales. Quisque sagittis orci ut diam condimentum, vel
            euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
