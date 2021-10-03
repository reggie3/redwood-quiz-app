import { Box } from '@mui/system'
import { context } from '@redwoodjs/api'

import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, ModalNames } from 'src/redux/modalSlice'
import { RootState } from 'src/redux/store'
import LoginForm from '../Forms/LoginForm'
import { MyModal } from './MyModal/MyModal'

export const LoginModal = () => {
  const { isOpen } = useSelector(
    (state: RootState) => state.modals[ModalNames.LOGIN]
  )
  const currentUser = context

  const dispatch = useDispatch()

  const closeLoginModal = useCallback(() => {
    dispatch(closeModal(ModalNames.LOGIN))
  }, [dispatch])

  useEffect(() => {
    if (currentUser) {
      closeLoginModal()
    }
  }, [closeLoginModal, currentUser])

  return(<Box>
    <p>login form here</p>
    </Box>)
  // return (
  //   // <MyModal isOpen={isOpen} onClickClose={closeLoginModal}>
  //     {/* <LoginForm /> */}
  //     <Box>
  //     <p>login form here</p>
  //     </Box>
  //   // </MyModal>
  // )
}
