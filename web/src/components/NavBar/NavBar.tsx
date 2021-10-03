import { AppBar, Box, Typography } from '@mui/material'
import { routes } from '@redwoodjs/router'
import React from 'react'
import Login from '../Login/Login'
import MyLink from '../MyLink/MyLink'

const NavBar = () => {
  return (
    <AppBar position="static">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        py={1}
      >
        <Typography variant="h4">Quiz App</Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <MyLink to={routes.home()}>Home</MyLink>
          <MyLink to={routes.about()}>About</MyLink>
        </Box>
        <Login />
      </Box>
    </AppBar>
  )
}

export default NavBar
