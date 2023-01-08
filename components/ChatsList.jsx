import React from 'react'
import { DEFAULT_AVATAR, SEARCH_ICON } from "../Environment";


const ChatsList = () => {
    let dummyarray = ["active", "non-active", "non-active", "non-active", "non-active", "non-active", "non-active",  "non-active", "non-active", "non-active", "non-active", "non-active"]

  return (
    <div className="col-12 col-md-4 landing-page">
        <div className="search-container">
        <h1>Snap</h1>
            <form className="search-input">
            <img src={SEARCH_ICON[0]} alt={SEARCH_ICON[1]} />
            <input type="text" />
            </form>
        </div>

        <div className="chats-container">
        {dummyarray.map((i, ndx) => {
            return (
            <div className={`chat-container ${i == "active" && "active"}`} key={ndx}>
                <img src={DEFAULT_AVATAR[0]} alt={DEFAULT_AVATAR[1]} className="avatar"/>
                <div>
                <h2>Stephen Yustiono</h2>
                <p>Nice. I don't know why people get all worked up about hawaiian pizza. I ...</p>
                </div>
            </div>
            )})}
        </div>

        <button className="logout-btn">Sign out</button>
    </div>
  )
}

export default ChatsList