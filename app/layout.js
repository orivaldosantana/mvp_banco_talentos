import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './ui/forms/navbar'
import Header from './ui/forms/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
        </div>
        <div className="mainpage">
          <div>
            <NavBar />
          </div>
          <div className="cardpage">{children} </div>
        </div>
      </body>
    </html>
  )
}
