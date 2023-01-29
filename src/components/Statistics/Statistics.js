import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(e => {
          return (
            <li class="item" key={e.id}>
              <span class="label">{e.label}</span>
              <span class="percentage">{e.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.protoType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
