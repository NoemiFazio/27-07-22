import "./index.css";
import { useState } from "react";
import { POST } from "../../utils/api.js";
import Button from "../Button";

const AddFriend = ({ isRenderedFriendList, onAddFriendButton }) => {
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImg] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (friendName && friendImg) {
      POST("friends", {
        name: friendName,
        photo: friendImg,
      }).then(() => {
        setFriendName("");
        setFriendImg("");
        onAddFriendButton(!isRenderedFriendList);
      });
    }
  };

  return (
    <form className="AddFriend" onSubmit={onFormSubmit}>
      <input
        className="AddFriendName__text"
        type="text"
        placeholder="Scrivi il nome"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        required
      />
      <input
        className="AddFriend__img"
        type="text"
        placeholder="Aggiungi l'url dell'immagine di profilo"
        value={friendImg}
        onChange={(e) => setFriendImg(e.target.value)}
        required
      />
      <Button type="submit" btnTextContent="Invia" color="lightseagreen" />
    </form>
  );
};

export default AddFriend;
