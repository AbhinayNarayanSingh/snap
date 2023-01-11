import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { open_dialog } from '../store/saga/Dialog'
import { open_loader } from '../store/saga/Loader'

const sign = () => {
    const {user} = useSelector((state) => state)
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
      if (user?.Token) {
        router.push("/")
      }
    }, [user])
  return (
    <div>sign

      <button onClick={() => dispatch(open_loader())}>open loader</button>
      <p>______</p>
      <button onClick={() => dispatch(open_dialog("SUCCESS_DIALOG", "abhinay"))}>open dialog</button>
    </div>
  )
}

export default sign