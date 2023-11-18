'use client'

import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { SplitText } from 'gsap/dist/SplitText'
import ProjectHeader from '../../components/projectHeader'
import ProjectInfo from '../../components/projectInfo'
import { projectDetails } from '../../utils/projects'
import { useParams, useRouter } from 'next/navigation'
import styles from '../../styles/project.module.scss'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const Project = () => {
  const params = useParams()
  const [proj, setProj] = useState(projectDetails[params.id])
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
        {/* <h1>Hey</h1> */}
        <ProjectInfo
          tools={proj.tools}
          summary={proj.summary}
          linkProject={proj.linkProject}
          linkRepo={proj.linkRepo}
        />
      </main>
    )
  )
}

export default Project
