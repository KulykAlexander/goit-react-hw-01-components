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
export const StatusOnLine = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
`;
export const StatusOffLine = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;

export const FriendName = styled.p`
  font-style: italic;
  font-size: 36px;
  text-transform: uppercase;
`;
