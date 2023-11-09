import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../../components'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy-Form',
  description: 'Creating & Filling forms efficiently.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <body className="">
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
