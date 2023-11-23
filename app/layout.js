import './styles/globals.scss'
import localFont from 'next/font/local'
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
  title: 'Cameron Green - Software Developer',
  openGraph: {
    title: 'Cameron Green',
    description:
      'Cameron Green is a software developer based in Manchester, focused on building remarkable digital experiences.',
    url: 'https://camgreen.works',
    siteName: 'https://camgreen.works',
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
        {/* <title>{title}</title> */}
        {/* <meta name='image' content='/images/og.jpg'></meta>
        <meta property='og:title' content='Cameron Green'></meta>
        <meta
          property='og:description'
          content='Cameron Green is a software engineer who focuses on developing remarkable digital experiences.'
        ></meta>
        <meta property='og:image' content='/images/og.jpg'></meta>
        <meta property='og:type' content='website'></meta> */}
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
