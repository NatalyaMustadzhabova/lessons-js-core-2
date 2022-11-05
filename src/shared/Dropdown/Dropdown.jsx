import Checkbox from '../Checkbox/Checkbox'

import styles from '../Dropdown/Dropdown.module.css'

export default function Dropdown({ className }) {
  return (
    <div className={className}>
      <div className={styles.dropdown}>
        <label className={styles.label}>
          <Checkbox text={'Новый'} />
        </label>
        <label className={styles.label}>
          <Checkbox text={'Расчет'} />
        </label>
        <label className={styles.label}>
          <Checkbox text={'Подтвержден'} />
        </label>
        <label className={styles.label}>
          <Checkbox text={'Отложен'} />
        </label>
        <label className={styles.label}>
          <Checkbox text={'Выполнен'} />
        </label>
        <label className={styles.label}>
          <Checkbox text={'Отменен'} />
        </label>
      </div>
    </div>
  )
}
