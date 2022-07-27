import "./index.css";
import { DELETE } from "../../utils/api";
const FriendCard = ({ friendData, deleteFriendBtn }) => {
  const { photo, name } = friendData;

  return (
    <div className="FriendCard" onClick={deleteFriendBtn}>
      <img className="FriendCard__photo" src={photo} alt={name} />
      <p className="FriendCard__name">{name}</p>
    </div>
  );
};

export default FriendCard;
