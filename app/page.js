'use client'
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import styles from './styles/page.module.scss'

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Projects />
    </main>
  )
}
