import styles from './Checkbox.module.css'
import Icon from '../Icon/Icon'

export default function Checkbox({ text }) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" className={styles.input} />
      <Icon type="checkmark" className={styles.icon} />
      <span>{text}</span>
    </label>
  )
}
