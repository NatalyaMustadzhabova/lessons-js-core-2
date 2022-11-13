import { useState } from 'react'
import Button from '../../../../../shared/Button/Button'
import Input from '../../../../../shared/Input/Input'
import styles from './../../Filter/Filter.module.css'
import clsx from 'clsx'
import { ReactComponent as IconVArrow } from '../../../../../shared/Icon/icons/v_arrow.svg'

export default function FilterOrderStatus() {
  const [valueStatus, setValueStatus] = useState('Любой')

  const handleChangeValueStatus = (event) => {
    setValueStatus(event.target.value)
  }

  return (
    <div className={styles.searchbarIconPosition}>
      <Input
        className={clsx(
          styles.searchbar,
          styles.searchbarBig,
          styles.searchbarIndentSmall
        )}
        label={'Статус заказа'}
        value={valueStatus}
        onChange={handleChangeValueStatus}
        readOnly
      ></Input>
      {valueStatus && (
        <Button
          className={clsx(
            styles.searchbarButton,
            styles.searchbarButtonPositionBig,
            styles.buttonBlue
          )}
          icon={IconVArrow}
        />
      )}
    </div>
  )
}
