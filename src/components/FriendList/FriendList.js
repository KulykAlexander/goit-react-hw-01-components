import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ul>
  );
};

FriendList.prototype = {
  freinds: PropTypes.arrayOf.isRequired,
};
