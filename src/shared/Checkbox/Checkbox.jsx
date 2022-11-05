import styles from './Checkbox.modules.css'
import clsx from 'clsx'

export default function Checkbox({ text }) {
  return (
    <div className={clsx(styles.checkbox)}>
      <input type="checkbox" />
      <span>{text}</span>
    </div>
  )
}
