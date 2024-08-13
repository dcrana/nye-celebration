import { useState, useEffect, FC } from 'react'
import styles from './countdown.module.scss'

interface CountdownProps {
  targetDate: Date
}

const Countdown: FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date()
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <div className={styles.countdown}>
      <h2 className={styles.title}>Countdown to NYE Celebration</h2>
      <div className={styles.timerContainer}>
        {Object.entries(timeLeft).map(([interval, value]) => (
          <div className={styles.timerItem} key={interval}>
            <span className={styles.timerValue}>{value}</span>
            <span className={styles.timerLabel}>{interval}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
