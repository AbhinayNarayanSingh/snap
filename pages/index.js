import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ChatRoom from "../components/Home/ChatRoom";
import ChatsList from "../components/Home/ChatsList";


export default function Home() {
  const {user} = useSelector((state) => state)
  const router = useRouter()
  useEffect(() => {
    if (!user?.Token) {
      router.push("/sign")
    }
  }, [user])
  
  return (
    <div className="container-xxl">
      <div className="row">
        <ChatsList/>
        <ChatRoom/>
      </div>
    </div>
  )
}
