import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const sign = () => {
    const {user} = useSelector((state) => state)
    const router = useRouter()
    useEffect(() => {
      if (user?.Token) {
        router.push("/")
      }
    }, [user])
  return (
    <div>sign</div>
  )
}

export default sign