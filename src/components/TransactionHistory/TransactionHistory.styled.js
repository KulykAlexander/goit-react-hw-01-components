import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 900px;
  border: 2px solid blueviolet;
`;
export const HeadColumn = styled.th`
  width: 300px;
  padding: 10px 10px;
  font-size: 36px;
  text-align: center;
`;
export const TransactionRow = styled.tr`
  text-align: center;
  font-size: 30px;
  color: red;
  background-color: yellowgreen;
  :nth-child(even) {
    color: yellow;
    background-color: blue;
  }
`;
