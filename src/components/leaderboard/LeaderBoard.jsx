import All from "./All";
import Top from "./Top";
import styles from "./LeaderBoard.module.css";

const contestants = [
  {
    name: "Shyamkathir007",
  },
  {
    name: "Roshunsai1224",
  },
  {
    name: "310620104088_cse",
  },
  {
    name: "jayashreemahara1",
  },
  {
    name: "abuthahirshaikh1",
  },
  {
    name: "dravidkumardk04",
  },
  {
    name: "Akhilan_N",
  },
  {
    name: "Yuvaraj2k3",
  },
  {
    name: "manib211003",
  },
  {
    name: "rahulrajagopala1",
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
