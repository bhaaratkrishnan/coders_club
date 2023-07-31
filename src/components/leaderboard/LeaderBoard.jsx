import All from "./All";
import Top from "./Top";
import styles from "./LeaderBoard.module.css";

const contestants = [
  {
    name: "Bhaarat",
    score: 100,
    photo:
      "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
  },
  {
    name: "Bhaarat",
    score: 90,
    photo:
      "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
  },
  {
    name: "Bhaarat",
    score: 85,
    photo:
      "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
  },
  {
    name: "Bhaarat",
    score: 100,
    photo:
      "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
  },
  {
    name: "Bhaarat",
    score: 90,
    photo:
      "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
  },
  {
    name: "Bhaarat",
    score: 85,
    photo:
      "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
  },
  {
    name: "Bhaarat",
    score: 100,
    photo:
      "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
  },
  {
    name: "Bhaarat",
    score: 90,
    photo:
      "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
  },
  {
    name: "Bhaarat",
    score: 85,
    photo:
      "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
  },
  {
    name: "Bhaarat",
    score: 85,
    photo:
      "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png",
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
