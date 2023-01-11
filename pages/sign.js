import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

// component
import Signin from '../components/Sign/Signin'
import Signup from '../components/Sign/Signup'

const sign = () => {
  const router = useRouter()
  const {user} = useSelector((state) => state)

  useEffect(() => {
    if (user?.Token) {
      router.push("/")
    }
  }, [user])

  const [currentPage, setCurrentPage] = useState("SIGNIN")

  switch (currentPage) {
    case "SIGNIN":
      return <Signin/>

    case "SIGNUP":
      return <Signup/>
  }
}

export default sign