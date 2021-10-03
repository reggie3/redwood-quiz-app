import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from 'src/redux/authSlice'
import { GoogleCredentials, GoogleLoginResponse } from '../../../../types/User'
import googleOneTap from 'google-one-tap'

const options = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  auto_select: false, // optional
  cancel_on_tap_outside: true, // optional
  context: 'signin', // optional
}

const LoginGoogle = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    googleOneTap(options, (response) => {
      // Send response to server
      saveCredentials(response)
    })

    // only run on mounted
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const parseJwt = (token: unknown): GoogleCredentials => {
    try {
      if (typeof token === 'string') {
        return JSON.parse(atob(token.split('.')[1]))
      }
    } catch (e) {
      return null
    }
  }

  const saveCredentials = (response: GoogleLoginResponse) => {
    if (!response.error) {
      const responsePayload = parseJwt(response.credential)

      console.log(responsePayload)
      dispatch(
        setUser({
          loginSource: 'GOOGLE',
          user: {
            id: responsePayload.sub,
            name: responsePayload.name,
            avatarUrl: responsePayload.picture,
          },
        })
      )
    }
  }

  if (!process.env.GOOGLE_CLIENT_ID) return null

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id={process.env.GOOGLE_CLIENT_ID}
        data-callback="handleCredentialResponse"
      ></div>
      <div
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      ></div>
    </>
  )
}

export default LoginGoogle
