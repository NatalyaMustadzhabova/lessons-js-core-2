import { useState } from 'react'

import Input from '../../../../../shared/Input/Input'
import { ReactComponent as IconXMedium } from '../../../../../shared/Icon/icons/x-medium.svg'

import styles from './../../Filter/orderAmount/FilterOrderAmount.module.css'

export default function FilterOrderAmount() {
  const [valueAmountFrom, setValueAmountFrom] = useState('')
  const [valueAmountTo, setValueAmountTo] = useState('')

  const handleChangeValueAmountFrom = ({ target: { value } }) => {
    setValueAmountFrom(value)
  }

  const handleClearValueAmountFrom = () => {
    setValueAmountFrom('')
  }

  const handleChangeValueAmountTo = ({ target: { value } }) => {
    setValueAmountTo(value)
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
          classNameButton={styles.buttonPositionBig}
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
          classNameButton={styles.buttonPositionSmall}
        />
      </div>
    </div>
  )
}
