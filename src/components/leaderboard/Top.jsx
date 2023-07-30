import styles from "./Top.module.css";

export default function Top(props) {
  const { topThree } = props;
  return (
    <div className={styles.container}>
      <ul className={styles["top-list"]}>
        {topThree.map((entry, index) => (
          <li key={index} className={styles.top}>
            {index == 0 ? (
              <div className={styles.crown}>
                <img src="/imgs/crown.webp" alt="" />
              </div>
            ) : null}
            <div className={styles.photo}>
              <img src={entry.photo} alt="" />
            </div>
            <div className={styles.name}>{entry.name}</div>
            <div className={styles.score}>{entry.score}</div>
            <div className={styles.rank} id={`rank-${index + 1}`}>
              {index + 1}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
