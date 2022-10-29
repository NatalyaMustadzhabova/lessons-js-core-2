import FilterRegistrationDate from './registrationDate/FilterRegistrationDate'
import FilterOrderStatus from './orderStatus/FilterOrderStatus'
import FilterOrderAmount from './orderAmount/FilterOrderAmount'
import Button from '../../../../shared/Button/Button'
import styles from './Filter.module.css'
import clsx from 'clsx'

export default function Filter() {
  return (
    <div className={styles.filter}>
      <FilterRegistrationDate />
      <FilterOrderStatus />
      <FilterOrderAmount />
      <Button className={clsx(styles.button)}>Применить</Button>
    </div>
  )
}
