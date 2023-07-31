import All from "./All";
import Top from "./Top";
import styles from "./LeaderBoard.module.css";

const contestants = [
  {
    name: "Bhaarat",
    score: 100,
  },
  {
    name: "Bhaarat",
    score: 90,
  },
  {
    name: "Bhaarat",
    score: 85,
  },
  {
    name: "Bhaarat",
    score: 100,
  },
  {
    name: "Bhaarat",
    score: 90,
  },
  {
    name: "Bhaarat",
    score: 85,
  },
  {
    name: "Bhaarat",
    score: 100,
  },
  {
    name: "Bhaarat",
    score: 90,
  },
  {
    name: "Bhaarat",
    score: 85,
  },
  {
    name: "Bhaarat",
    score: 85,
  },
];

const topThree = contestants.slice(0, 3);
const others = contestants.slice(3);

export default function LeaderBoard() {
  return (
    <div className={styles.leaderboard}>
      <div className={styles.heading}>LeaderBoard</div>
      <Top topThree={topThree} />
      <All leaderboard={others} />
    </div>
  );
}
