import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'PT Rumah Sakit Pelabuhan',
  description: 'Undangan Launching OHC-RSP',
  icons: {
    icon: '/logo.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
