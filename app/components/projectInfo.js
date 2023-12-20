import React from 'react'
import styles from '../styles/projectInfo.module.scss'

const ProjectInfo = ({
  tools,
  summary,
  linkProject,
  linkProject1,
  linkProject2,
  linkRepo,
  id,
}) => {
  return (
    <div className={styles.container}>
      <div className='wrapper'>
        <h2>THE PROJECT.</h2>
        <div className={styles.details}>
          <p>Tools used</p>
          <p>{tools}</p>
          <p>Summary</p>
          <p>{summary}</p>
        </div>
        <div className={styles.buttons}>
          {id !== 'interactions-library' ? (
            <>
              <a href={linkProject} target='_blank' rel='noopener noreferrer'>
                <button className={styles.buttonsProjLink}>
                  <p>Launch project</p>
                </button>
              </a>
              <a href={linkRepo} target='_blank' rel='noopener noreferrer'>
                <img
                  className={styles.github}
                  src='/images/github.svg'
                  alt=''
                />
              </a>
            </>
          ) : (
            <>
              <a href={linkProject1} target='_blank' rel='noopener noreferrer'>
                <button className={styles.buttonsProjLink}>
                  <p>Launch jelly slider</p>
                </button>
              </a>
              <a href={linkProject2} target='_blank' rel='noopener noreferrer'>
                <button className={styles.buttonsProjLink}>
                  <p>Launch scroll shader</p>
                </button>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo
