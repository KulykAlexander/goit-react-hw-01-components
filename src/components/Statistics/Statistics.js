import PropTypes from 'prop-types';
import { Statistic, Title, Stat, Item } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}

      <Stat>
        {stats.map(e => {
          return (
            <Item key={e.id}>
              <span>{e.label}</span>
              <span>{e.percentage}</span>
            </Item>
          );
        })}
      </Stat>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
