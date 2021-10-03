import React from 'react'
import GoogleLogin from 'react-google-login'

import '../../../../secrets.json'

const responseGoogle = (response) => {
  console.log(response)
}

const LoginGoogle = () => {
  return (
    <GoogleLogin
      clientId="201241278109-o6g6u6vqv017iv5u0nkmgeq14old6p9o.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default LoginGoogle
