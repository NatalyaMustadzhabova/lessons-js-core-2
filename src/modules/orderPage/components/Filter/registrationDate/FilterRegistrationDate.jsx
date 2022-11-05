import { useState } from 'react'
import Input from '../../../../../shared/Input/Input'
import styles from './FilterRegistrationDate.module.css'
import { ReactComponent as IconXMedium } from '../../../../../shared/Icon/icons/x-medium.svg'

export default function FilterRegistrationDate() {
  const [valueDateFrom, setValueDateFrom] = useState('')
  const [valueDateTo, setValueDateTo] = useState('')

  const handleChangeValueDateFrom = (event) => {
    setValueDateFrom(event.target.value)
  }

  const handleClearValueDateFrom = () => {
    setValueDateFrom('')
  }

  const handleChangeValueDateTo = (event) => {
    setValueDateTo(event.target.value)
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
        ></Input>
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
        ></Input>
      </div>
    </div>
  )
}
