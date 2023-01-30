import styled from 'styled-components';
import { getRandomHexColor } from 'utils/colorpicker';

export const Statistic = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 280px;
  padding: 8px 8px;
  border: 2px double green;
  border-radius: 6px;
  text-align: center;
`;
export const Title = styled.h2`
  font-size: 36px;
  color: red;
  margin-bottom: 10px;
`;
export const Stat = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 20px;
  background-color: ${getRandomHexColor()};
`;
