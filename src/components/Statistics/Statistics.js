import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {{ title } && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <li className={styles.statItem} key={stat.id}>
            <span className={styles.statLabel}>{stat.label}</span>
            <span className={styles.statPercentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
