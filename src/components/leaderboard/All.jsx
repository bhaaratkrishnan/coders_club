import React from "react";
import styles from "./All.module.css";

export default function All(props) {
  const { leaderboard } = props;
  return (
    <div className={styles.container}>
      <ul className={styles.contestants}>
        {leaderboard.map((entry, index) => {
          return (
            <li key={index} className={styles.contestant}>
              <div className={styles.rank}>{index + 4}</div>
              <div className={styles.details}>
                <div className={styles.photo}>
                </div>
                <div className={styles.name}>{entry.name}</div>
              </div>
              <div className={styles.score}>
                {entry.score}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
