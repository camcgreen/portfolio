'use client'

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { findProjIndex } from '../../utils/helpers'
import ProjectHeader from '../../components/projectHeader'
import ProjectInfo from '../../components/projectInfo'
import Goal from '../../components/goal'
import Para from '../../components/para'
import { projectDetails } from '../../utils/projects'
import { useParams } from 'next/navigation'
import styles from '../../styles/project.module.scss'

const Project = () => {
  const params = useParams()
  const proj = projectDetails[params.id]
  const index = findProjIndex(projectDetails, params.id)
  const nextIndex = (index + 1) % Object.keys(projectDetails).length
  return (
    proj && (
      <>
        <Head>
          <title>Hello</title>
        </Head>
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
      </>
    )
  )
}

export default Project
