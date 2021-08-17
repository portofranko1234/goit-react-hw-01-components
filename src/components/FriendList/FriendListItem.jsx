import React from "react";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";
const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusClass = isOnline ? styles.statusOnline : styles.statusOffline;

  return (
    <li className={styles.item}>
      <span className={statusClass}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
export default FriendListItem;
