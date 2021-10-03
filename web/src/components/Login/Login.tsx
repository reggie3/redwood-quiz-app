import React from 'react'
import { RootState } from 'src/redux/store'
import { useSelector } from 'react-redux'
import LoginGoogle from '../LoginGoogle/LoginGoogle'
import Avatar from '@mui/material/Avatar'

const Login = () => {
  const { avatarUrl, name } = useSelector((state: RootState) => state.auth.user)

  if (avatarUrl) {
    return <Avatar alt={name} src={avatarUrl} />
  }

  return (
    <div>
      <LoginGoogle />
    </div>
  )
}

export default Login
