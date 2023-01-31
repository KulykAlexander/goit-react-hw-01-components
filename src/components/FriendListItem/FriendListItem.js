import PropTypes from 'prop-types';

import { FriendItem, StatusLine, FriendName } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem>
      <StatusLine isOnline={isOnline}></StatusLine>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
