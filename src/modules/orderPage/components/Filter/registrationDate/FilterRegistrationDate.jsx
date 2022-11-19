import { useState } from 'react'

import Input from '../../../../../shared/Input/Input'
import { icon } from '../../../../../shared/Icon/icons/Icon'

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
          onReset={handleClearValueDateFrom}
          icon={icon.xMedium}
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
          onReset={handleClearValueDateTo}
          icon={icon.xMedium}
          size="medium"
          classNameButton={styles.buttonPositionSmall}
        />
      </div>
    </div>
  )
}
