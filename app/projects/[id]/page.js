'use client'
import React, { useState } from 'react'
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const params = useParams()
  console.log(params)
  const proj = projectDetails[params.id]
  console.log(projectDetails)
  return (
    proj && (
      <>
        <Head>
          <title>Yo</title>
        </Head>
        <main>
          <ProjectHeader
            description={proj.description}
            title={proj.title}
            img={proj.hero}
          />
          <ProjectInfo
            id={proj.id}
            tools={proj.tools}
            summary={proj.summary}
            linkProject={proj.linkProject}
            linkProject1={proj.linkProject1}
            linkProject2={proj.linkProject2}
            linkRepo={proj.linkRepo}
          />
          <div className={styles.centre}>
            <div className='wrapper'>
              {/* <img src={proj.imageSupp1} alt='' /> */}
              <video
                src={proj.vid1}
                className={styles.vid}
                autoPlay={!isMobile}
                controls={isMobile}
                loop
                muted
              />
            </div>
          </div>
          <Goal
            copy={proj.goal}
            img={proj.imageFull1}
            alt={proj.id === 'interactions-library'}
          />
          <Para
            heading={
              proj.id === 'interactions-library'
                ? 'SCROLL SHADER'
                : 'HOW IT WORKS.'
            }
            copy={proj.how}
          />
          <div className={styles.centre}>
            <div className='wrapper'>
              {/* <img src={proj.imageSupp2} alt='' /> */}
              <video
                src={proj.vid2}
                className={styles.vid}
                autoPlay={!isMobile}
                controls={isMobile}
                loop
                muted
                playsInline
              />
            </div>
          </div>
          {proj.id !== 'interactions-library' && (
            <Para heading='LESSONS LEARNED.' copy={proj.lessons} />
          )}
          <div className={styles.centre}>
            <div className='wrapper'>
              <Link href={proj.nextProject}>
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
