import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../types/User'
import { LoginSources } from '../../../types/LoginSources'

export interface AuthState {
  loginSource: LoginSources
  user: User
}
const initialState: AuthState = {
  loginSource: '' as LoginSources,
  user: {} as User,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearUser: (state: AuthState) => {
      state.user = null
    },
    setUser: (
      state: AuthState,
      action: PayloadAction<{ loginSource: LoginSources; user: User }>
    ) => {
      state.loginSource = action.payload.loginSource
      state.user = action.payload.user
    },
  },
})

export const { clearUser, setUser } = authSlice.actions

export default authSlice.reducer
