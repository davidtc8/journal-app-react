import { Box, Toolbar } from "@mui/material"
import { Navbar, Sidebar } from "../components";

// tamaño de mi navbar lateral
const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>
        <Navbar drawerWidth={drawerWidth} />

        <Sidebar drawerWidth={drawerWidth} />

        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {children}
        </Box>
    </Box>
  )
}
