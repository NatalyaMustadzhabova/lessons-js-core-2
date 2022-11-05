import FilterRegistrationDate from './registrationDate/FilterRegistrationDate'
import FilterOrderStatus from './orderStatus/FilterOrderStatus'
import FilterOrderAmount from './orderAmount/FilterOrderAmount'
import Button from '../../../../shared/Button/Button'
import styles from './Filter.module.css'

export default function Filter() {
  return (
    <div className={styles.filter}>
      <FilterRegistrationDate />
      <FilterOrderStatus />
      <FilterOrderAmount />
      <Button color="grey" size="mini">
        Применить
      </Button>
    </div>
  )
}
