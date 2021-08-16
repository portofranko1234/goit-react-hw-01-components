import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import StatisticsItem from "./StatisticsItem";

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>Upload stats</h2>}

    <ul className={styles.statList}>
      {stats.map((stat) => (
        <li key={stat.id} className={styles.item}>
          <StatisticsItem label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
