import { DEFAULT_AVATAR, SEARCH_ICON, SEND_ICON } from "../Environment";

export default function Home() {
  let dummyarray = ["active", "non-active", "non-active", "non-active", "non-active", "non-active", "non-active",  "non-active", "non-active", "non-active", "non-active", "non-active"]

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
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 col-md-4 landing-page">
          <div className="search-container">
            <h1>iMessages</h1>
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

        <div className="col-12 col-md-8 chatroom-container">
          <div className="user-profile">
            <img src={DEFAULT_AVATAR[0]} alt={DEFAULT_AVATAR[1]} className="avatar"/>
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
      </div>
    </div>
  )
}
