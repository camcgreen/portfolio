import './styles/globals.scss'
import localFont from 'next/font/local'
import { SITE_URL } from './utils/macros'
import Nav from './components/nav'
import Footer from './components/footer'
import Smooth from './components/smooth'

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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Cameron Green - Software Developer',
  description:
    'Cameron Green is a software developer based in Manchester, focused on building remarkable digital experiences.',
  openGraph: {
    title: 'Cameron Green',
    description:
      'Cameron Green is a software developer based in Manchester, focused on building remarkable digital experiences.',
    url: SITE_URL,
    siteName: SITE_URL,
    images: [
      {
        url: '/images/og.png',
        width: 1800,
        height: 904,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <body className={HelveticaNeueExtended.className}>
          <Smooth />
          <Nav />
          <div className='smooth-wrapper'>
            <div className='smooth-content'>
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </>
  )
}
