'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { findProjIndex } from '../../utils/helpers'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { SplitText } from 'gsap/dist/SplitText'
import ProjectHeader from '../../components/projectHeader'
import ProjectInfo from '../../components/projectInfo'
import Goal from '../../components/goal'
import Para from '../../components/para'
import How from '../../components/how'
import { projectDetails } from '../../utils/projects'
import { useParams, useRouter } from 'next/navigation'
import styles from '../../styles/project.module.scss'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const Project = () => {
  const params = useParams()
  const proj = projectDetails[params.id]
  const index = findProjIndex(projectDetails, params.id)
  const nextIndex = (index + 1) % Object.keys(projectDetails).length
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 1,
      effects: true,
    })
  }, [])
  return (
    proj && (
      <main>
        <ProjectHeader
          description={proj.description}
          title={proj.title}
          img={proj.hero}
        />
        <ProjectInfo
          tools={proj.tools}
          summary={proj.summary}
          linkProject={proj.linkProject}
          linkRepo={proj.linkRepo}
        />
        <div className={styles.centre}>
          <div className='wrapper'>
            <img src={proj.imageSupp1} alt='' />
          </div>
        </div>
        <Goal copy={proj.goal} img={proj.imageFull1} />
        <Para heading='HOW IT WORKS.' copy={proj.how} />
        <div className={styles.centre}>
          <div className='wrapper'>
            <img src={proj.imageSupp2} alt='' />
          </div>
        </div>
        <Para heading='LESSONS LEARNED.' copy={proj.lessons} />
        <div className={styles.centre}>
          <div className='wrapper'>
            <Link
              href={
                index !== -1 &&
                `/projects/${Object.keys(projectDetails)[nextIndex]}`
              }
            >
              <button>
                <p>Next project</p>
              </button>
            </Link>
          </div>
        </div>
      </main>
    )
  )
}

export default Project
