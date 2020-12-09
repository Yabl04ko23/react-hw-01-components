import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
  const liItems = stats.map((stats) =>
  <li key={stats.id} className={styles.item}>
    <span className={styles.label}>{stats.label}</span>
    <span className={styles.percentage}>{stats.percentage}%</span>
  </li>
  );
  return(
    <>
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statsList}>{liItems}</ul>
    </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
};

export default Statistics;