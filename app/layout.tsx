import './styles/globals.scss'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Nav from './components/nav'
import Footer from './components/footer'

const HelveticaNeueExtended = localFont({
  src: [
    {
      path: './fonts/HelveticaNeueExtended-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueExtended-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueExtended-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Cam Green - Software Engineer',
  description: 'Software Engineer based in Manchester, UK',
  keywords:
    'Developer, creative, professional, development, engineer, software, web, design, nextjs, react, figma, gsap, typescript, javascript, html, css, interactive, interaction, freelance, jobstasy, chatbox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={HelveticaNeueExtended.className}>
        <Nav />
        <div className='smooth-wrapper'>
          <div className='smooth-content'>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
