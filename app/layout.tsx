import './styles/globals.scss'
import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import Nav from './components/nav'

const lexendDeca = Lexend_Deca({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cam Green - Interactive Developer',
  description: 'Interactive Developer based in Manchester, UK',
  keywords:
    'Developer, creative, professional, development, web, design, nextjs, react, figma, gsap, typescript, javascript, html, css, interactive, interaction, freelance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={lexendDeca.className}>
        <Nav />
        <div className='smooth-wrapper'>
          <div className='smooth-content'>{children}</div>
        </div>
      </body>
    </html>
  )
}
