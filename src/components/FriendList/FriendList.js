import PropTypes from 'prop-types';

import { ListFriend } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ListFriend>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </ListFriend>
  );
};

FriendList.propTypes = {
  freinds: PropTypes.arrayOf.isRequired,
};
