// Layout for admin pages
import NavBar from '../ui/navbar'
import Header from '../ui/header'
import { Box } from '@mui/material'

export default function PagesLayout({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Box sx={{ flexDirection: 'row', display: 'flex' }}>
          <div>
            <NavBar />
          </div>
          <div>{children} </div>
        </Box>
      </div>
    </div>
  )
}
