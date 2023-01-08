import React from 'react'
import { useEffect, useState } from "react";
import { DEFAULT_AVATAR, SEND_ICON } from '../Environment';


const ChatRoom = () => {

  let chats = [
    {
      user : "you",
      msg : "Let's get lunch. How about pizza?"
    },
    {
      user: "not",
      msg : "Let's do it! I'm in a meeting until noon."
    },
    {
      user : "you",
      msg : "That's perfect. There's a new place on Main St I've been wanting to check out. I hear their hawaiian pizza is off the hook!"
    },
    {
      user: "not",
      msg : "I don't know why people are so anti pineapple pizza. I kind of like it."
    },
    {
      user : "you",
      msg : "Wow that's impressive. But what's even more impressive is that this bubble is really high."
    }
  ]

  const status = 2
  const [activeStatus, setActiveStatus] = useState("")

  useEffect(() => {
    switch (status) {
      case 1:
        setActiveStatus("active")
        break;
      case 2:
        setActiveStatus("recent-active")
        break;
      default:
        setActiveStatus("offline")
        break;
    }
  }, [status])
  return (
    <div className="col-12 col-md-8 chatroom-container">
        <div className="user-profile">
            <div className="avatar-container">
            <img src={DEFAULT_AVATAR[0]} alt={DEFAULT_AVATAR[1]} className="avatar"/>
            <span className={`active-status ${activeStatus}`}></span>
            </div>
            <h2>Stephen Yustiono</h2>
        </div>
        <div className="chat-msgs-container">
            <span className="timestamp">Thrusday, 13:57</span>
            {chats.map((i, ndx) => {
            return (
                <p key={ndx} className={i.user + " chat"}>{i.msg}</p>
            )})}
        </div>
        <form className="msg-room">
            <input type="text"/>
            <button>
            <img src={SEND_ICON[0]} alt={SEND_ICON[1]} />
            </button>
        </form>
    </div>
  )
}

export default ChatRoom