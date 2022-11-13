import { useState } from 'react'
import Button from '../../../../../shared/Button/Button'
import Input from '../../../../../shared/Input/Input'
import styles from './../../Filter/Filter.module.css'
import clsx from 'clsx'
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
          className={clsx(
            styles.searchbar,
            styles.searchbarSmall,
            styles.searchbarIndentBig
          )}
          placeholder={'₽'}
          label={'Сумма заказа'}
          value={valueAmountFrom}
          prefix="от"
          onChange={handleChangeValueAmountFrom}
        ></Input>
        {valueAmountFrom && (
          <Button
            className={clsx(
              styles.searchbarButton,
              styles.searchbarButtonPositionBig
            )}
            onClick={handleClearValueAmountFrom}
            icon={IconXMedium}
          />
        )}
      </div>
      <div className={styles.searchbarIconPosition}>
        <Input
          className={clsx(
            styles.searchbar,
            styles.searchbarSmall,
            styles.searchbarIndentBig
          )}
          placeholder={'₽'}
          value={valueAmountTo}
          prefix="до"
          onChange={handleChangeValueAmountTo}
        ></Input>
        {valueAmountTo && (
          <Button
            className={clsx(
              styles.searchbarButton,
              styles.searchbarButtonPositionSmall
            )}
            onClick={handleClearValueAmountTo}
            icon={IconXMedium}
          />
        )}
      </div>
    </div>
  )
}
