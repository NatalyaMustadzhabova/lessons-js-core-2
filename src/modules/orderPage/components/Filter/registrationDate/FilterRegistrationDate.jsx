import { useState } from 'react'

import Input from '../../../../../shared/Input/Input'
import { ReactComponent as IconXMedium } from '../../../../../shared/Icon/icons/x-medium.svg'

import styles from './FilterRegistrationDate.module.css'

export default function FilterRegistrationDate() {
  const [valueDateFrom, setValueDateFrom] = useState('')
  const [valueDateTo, setValueDateTo] = useState('')

  const handleChangeValueDateFrom = ({ target: { value } }) => {
    setValueDateFrom(value)
  }

  const handleClearValueDateFrom = () => {
    setValueDateFrom('')
  }

  const handleChangeValueDateTo = ({ target: { value } }) => {
    setValueDateTo(value)
  }

  const handleClearValueDateTo = () => {
    setValueDateTo('')
  }

  return (
    <div className={styles.block}>
      <div className={styles.searchbarIconPosition}>
        <Input
          className={styles.searchbarIndentMedium}
          placeholder="dd.mm.yyyy"
          label="Дата оформления"
          value={valueDateFrom}
          prefix="c"
          onChange={handleChangeValueDateFrom}
          onClick={handleClearValueDateFrom}
          icon={IconXMedium}
          size="medium"
          classNameButton={styles.buttonPositionBig}
        />
      </div>
      <div className={styles.searchbarIconPosition}>
        <Input
          className={styles.searchbarIndentBig}
          placeholder="dd.mm.yyyy"
          value={valueDateTo}
          prefix="по"
          onChange={handleChangeValueDateTo}
          onClick={handleClearValueDateTo}
          icon={IconXMedium}
          size="medium"
          classNameButton={styles.buttonPositionSmall}
        />
      </div>
    </div>
  )
}
