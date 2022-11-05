import { useState } from 'react'
import Input from '../../../../../shared/Input/Input'
import styles from './../../Filter/orderAmount/FilterOrderAmount.module.css'
import { ReactComponent as IconXMedium } from '../../../../../shared/Icon/icons/x-medium.svg'

export default function FilterOrderAmount() {
  const [valueAmountFrom, setValueAmountFrom] = useState('')
  const [valueAmountTo, setValueAmountTo] = useState('')

  const handleChangeValueAmountFrom = (event) => {
    setValueAmountFrom(event.target.value)
  }

  const handleClearValueAmountFrom = () => {
    setValueAmountFrom('')
  }

  const handleChangeValueAmountTo = (event) => {
    setValueAmountTo(event.target.value)
  }

  const handleClearValueAmountTo = () => {
    setValueAmountTo('')
  }

  return (
    <div className={styles.block}>
      <div className={styles.searchbarIconPosition}>
        <Input
          className={styles.searchbarIndentBig}
          placeholder="₽"
          label="Сумма заказа"
          value={valueAmountFrom}
          prefix="от"
          onChange={handleChangeValueAmountFrom}
          onClick={handleClearValueAmountFrom}
          icon={IconXMedium}
          size="small"
        />
      </div>
      <div className={styles.searchbarIconPosition}>
        <Input
          className={styles.searchbarIndentBig}
          placeholder="₽"
          value={valueAmountTo}
          prefix="до"
          onChange={handleChangeValueAmountTo}
          onClick={handleClearValueAmountTo}
          icon={IconXMedium}
          size="small"
        />
      </div>
    </div>
  )
}
