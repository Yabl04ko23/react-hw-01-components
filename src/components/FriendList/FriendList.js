import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
  const liItems = friends.map((friends) =>{
    let classes = [styles.offline];
    if (friends.isOnline) {
      classes = [styles.online];
    };

    return(
      <li key={friends.id} className={styles.item}>
        <span className={classes}></span>
        <img className={styles.avatar} src={friends.avatar} alt={friends.name} />
        <p className={styles.name}>{friends.name}</p>
      </li>
    );
  });

  return(
    <>
    <ul className={styles.friendList}>{liItems}</ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array
};

export default FriendList;