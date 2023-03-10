import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

// component
import Signin from '../components/Sign/Signin'
import Signup from '../components/Sign/Signup'
import RecoverPassword from '../components/Sign/RecoverPassword'

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
      return <Signin setCurrentPage={setCurrentPage}/>

    case "SIGNUP":
      return <Signup setCurrentPage={setCurrentPage}/>
      case "FORGOT_PASSWORD":
      return <RecoverPassword setCurrentPage={setCurrentPage}/>
  }
}

export default sign