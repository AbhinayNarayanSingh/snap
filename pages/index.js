import ChatRoom from "../components/ChatRoom";
import ChatsList from "../components/ChatsList";

export default function Home() {
  
  return (
    <div className="container-xxl">
      <div className="row">
        <ChatsList/>
        <ChatRoom/>
      </div>
    </div>
  )
}
