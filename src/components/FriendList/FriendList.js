import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li className={styles.friendItem} key={friend.id}>
          {friend.isOnline ? (
            <span className={styles.onLine}>{friend.isOnline}</span>
          ) : (
            <span className={styles.offLine}>{friend.isOnline}</span>
          )}

          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
