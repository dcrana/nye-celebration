import { FC } from 'react'
import styles from './eventDescription.module.scss'

const EventDescription: FC = () => {
  return (
    <div className={styles.eventDescription}>
      <h2 className={styles.title}>Event Description</h2>
      <p className={styles.description}>
        Join us for an unforgettable New Year's Eve celebration as we welcome
        2025! Our party features live music, gourmet cuisine, and a spectacular
        midnight countdown. Don't miss this chance to ring in the new year in
        style!
      </p>
    </div>
  )
}

export default EventDescription
