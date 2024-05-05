import { Inter } from 'next/font/google'

import NavBar from '../ui/navbar'
import Header from '../ui/header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="mainpage">
        <div>
          <NavBar />
        </div>
        <div className="cardpage">{children} </div>
      </div>
    </div>
  )
}
