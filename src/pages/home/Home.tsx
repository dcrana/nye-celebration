import { FC } from "react";
import styles from "./home.module.scss";
import Countdown from "../../components/countdown/Countdown";
import EventDescription from "../../components/event-description/EventDescription";

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.partyDate}>
        <span className={styles.label}>Party Date:</span>
        <span className={styles.date}>31 December 2024 8 PM IST</span>
      </div>
      <Countdown targetDate={new Date("2024-12-31T20:00:00+05:30")} />
      <EventDescription />
    </div>
  );
};

export default Home;
