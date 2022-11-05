import { useState } from 'react'
import Input from '../../../../../shared/Input/Input'

import styles from './../../Filter/orderStatus/FilterOrderStatus.module.css'
import { ReactComponent as IconAbort } from '../../../../../shared/Icon/icons/v_arrow.svg'

export default function FilterOrderStatus() {
  const [valueStatus, setValueStatus] = useState('Любой')

  const handleChangeValueStatus = (event) => {
    setValueStatus(event.target.value)
  }

  return (
    <div className={styles.searchbarIconPosition}>
      <Input
        className={styles.searchbarIndentSmall}
        label="Статус заказа"
        value={valueStatus}
        onChange={handleChangeValueStatus}
        icon={IconAbort}
        readOnly
        size="big"
      />
    </div>
  )
}
