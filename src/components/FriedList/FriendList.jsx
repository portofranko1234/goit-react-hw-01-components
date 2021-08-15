import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const offlineColor = { backgroundColor: "rgb(245, 4, 4)" };
const onlineColor = { backgroundColor: "rgb(9, 241, 40)" };

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map((friend) => (
      <li key={friend.id} className={s.item}>
        <span
          className={s.status}
          style={friend.isOnline ? onlineColor : offlineColor}
        >
          {friend.isOnline}
        </span>
        <img className={s.avatar} src={friend.avatar} alt="" width="48" />
        <p className={s.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
