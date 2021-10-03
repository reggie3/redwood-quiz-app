import Box from '@mui/material/Box'
import NavBar from 'src/components/NavBar/NavBar'

type PageLayoutProps = {
  children?: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <NavBar />
      <Box px={2} py={1} border="1px dashed red" flex={1}>
        {children}
      </Box>
    </Box>
  )
}

export default PageLayout
