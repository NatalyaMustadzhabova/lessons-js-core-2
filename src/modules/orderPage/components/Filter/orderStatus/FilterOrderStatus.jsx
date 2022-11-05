import { useState } from 'react'

import Input from '../../../../../shared/Input/Input'
import Dropdown from '../../../../../shared/Dropdown/Dropdown'
import { ReactComponent as IconAbort } from '../../../../../shared/Icon/icons/v_arrow.svg'

import styles from './../../Filter/orderStatus/FilterOrderStatus.module.css'

export default function FilterOrderStatus() {
  const [valueStatus, setValueStatus] = useState('Любой')
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const handleClickFiltersOpen = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const handleChangeValueStatus = ({ target: { value } }) => {
    setValueStatus(value)
  }

  return (
    <div className={styles.searchbarIconPosition}>
      <Input
        className={styles.searchbarIndentSmall}
        label="Статус заказа"
        value={valueStatus}
        onChange={handleChangeValueStatus}
        onClick={handleClickFiltersOpen}
        icon={IconAbort}
        readOnly
        size="big"
        classNameButton={styles.buttonPosition}
      />
      {isDropdownOpen && <Dropdown className={styles.position} />}
    </div>
  )
}
