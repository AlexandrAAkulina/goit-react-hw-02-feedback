import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={css.statisticsList}>
      <li className={css.statisticsItem}>
        <p className={css.statisticsText}>
          Good: <span className={css.statisticsVal}>{good}</span>
        </p>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.statisticsText}>
          Neutral: <span className={css.statisticsVal}>{neutral}</span>
        </p>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.statisticsText}>
          Bad: <span className={css.statisticsVal}>{bad}</span>
        </p>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.statisticsText}>
          Total: <span className={css.statisticsVal}>{total}</span>
        </p>
      </li>
      <li className={css.statisticsItem}>
        <p className={css.statisticsText}>
          Positive feedback:{' '}
          <span className={css.statisticsVal}>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
}
