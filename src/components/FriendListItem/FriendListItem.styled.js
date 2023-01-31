import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 400px;
  padding: 10px 10px;
  border: 1px solid yellowgreen;
`;
export const StatusLine = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
  background-color: ${props => (props.isOnline ? 'green' : 'red')}; ;
`;

export const FriendName = styled.p`
  font-style: italic;
  font-size: 36px;
  text-transform: uppercase;
`;
