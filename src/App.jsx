import { useState } from "react";
import AddMessage from "./components/AddMessage";
import AddFriend from "./components/AddFriend";
import FriendCardList from "./components/FriendCardList";
import MessageCardList from "./components/MessageCardList";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [isRenderedFriendList, setRenderedFriendList] = useState(false);
  const [filteredList, setFilteredList] = useState("");

  return (
    <div className="App">
      <Navbar />
      <div className="mainContent">
        <div className="App__friends">
          <h3>Lista degli amici</h3>
          <FriendCardList />
          <AddFriend
            isRenderedFriendList={isRenderedFriendList}
            onAddFriendButton={setRenderedFriendList}
          />
        </div>
        <div className="App_messages">
          <AddMessage
            isRenderedList={isRenderedList}
            onAddButton={setRenderedList}
          />
          <input
            type="text"
            onChange={(event) => setFilteredList(event.target.value)}
            className="Search"
            placeholder="Cerca messaggio per utente..."
          />
          <MessageCardList
            isRenderedList={isRenderedList}
            setRenderedList={setRenderedList}
            filteredList={filteredList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
