import { useState } from 'react'

import Input from '../../../../../shared/Input/Input'
import Dropdown from '../../../../../shared/Dropdown/Dropdown'
import { icon } from '../../../../../shared/Icon/icons/Icon'

import styles from './../../Filter/orderStatus/FilterOrderStatus.module.css'
import Checkbox from '../../../../../shared/Checkbox/Checkbox'

export default function FilterOrderStatus() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [selectedStatuses, setSelectedStatuses] = useState([])

  const handleClickFiltersOpen = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const STATUS_TRANSLATION = {
    new: 'Новый',
    calculation: 'Расчет',
    completed: 'Выполнен',
    cancelled: 'Отменен',
    delayed: 'Отложен',
    confirmed: 'Подтверджен',
  }

  function getStatusDescription() {
    const statusDescription = selectedStatuses
      .map((status) => STATUS_TRANSLATION[status])
      .join(', ')

    console.log('statusDescription', statusDescription)

    const totalStatuses = Object.keys(STATUS_TRANSLATION).length

    if (
      selectedStatuses.length === 0 ||
      selectedStatuses.length === totalStatuses
    ) {
      return 'Любой'
    }

    return statusDescription
  }

  function handleChangeStatus(status) {
    const hasStatus = selectedStatuses.includes(status)
    if (hasStatus) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== status))
    } else {
      setSelectedStatuses([...selectedStatuses, status])
    }
  }
  return (
    <div className={styles.searchbarIconPosition}>
      <Input
        className={styles.searchbarIndentSmall}
        label="Статус заказа"
        value={getStatusDescription()}
        onReset={handleClickFiltersOpen}
        icon={icon.vArrow}
        readOnly
        classNameButton={styles.buttonPosition}
      />
      {isDropdownOpen && (
        <Dropdown
          overlay={
            <>
              {Object.keys(STATUS_TRANSLATION).map((item) => (
                <Checkbox
                  key={item}
                  className={styles.blockEnd}
                  text={STATUS_TRANSLATION[item]}
                  checked={selectedStatuses.includes(item)}
                  onChange={() => handleChangeStatus(item)}
                />
              ))}
            </>
          }
        />
      )}
    </div>
  )
}
