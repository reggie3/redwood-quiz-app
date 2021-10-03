import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { setUser } from 'src/redux/authSlice'

import '../../../../secrets.json'

const LoginGoogle = () => {
  console.log(process.env)

  const dispatch = useDispatch()

  const responseGoogle = (response) => {
    if (!response.error) {
      dispatch(
        setUser({
          loginSource: 'GOOGLE',
          user: {
            id: response.googleId,
            name: response.profileObj.name,
            avatarUrl: response.profileObj.imageUrl,
          },
        })
      )
    }
  }

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default LoginGoogle
