// Layout for admin pages
import NavBar from '../ui/navbar'
import Header from '../ui/header'

export default function PagesLayout({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div>
          <NavBar />
        </div>
        <div>{children} </div>
      </div>
    </div>
  )
}
