import { useState } from 'react'
import Button from '../../../../../shared/Button/Button'
import Input from '../../../../../shared/Input/Input'
import styles from './../../Filter/Filter.module.css'
import clsx from 'clsx'
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
          className={clsx(
            styles.searchbar,
            styles.searchbarMedium,
            styles.searchbarIndentMedium
          )}
          placeholder={'dd.mm.yyyy'}
          label={'Дата оформления'}
          value={valueDateFrom}
          prefix="c"
          onChange={handleChangeValueDateFrom}
        ></Input>
        {valueDateFrom && (
          <Button
            className={clsx(
              styles.searchbarButton,
              styles.searchbarButtonPositionBig
            )}
            onClick={handleClearValueDateFrom}
            icon={IconXMedium}
          />
        )}
      </div>
      <div className={styles.searchbarIconPosition}>
        <Input
          className={clsx(
            styles.searchbar,
            styles.searchbarMedium,
            styles.searchbarIndentBig
          )}
          placeholder={'dd.mm.yyyy'}
          value={valueDateTo}
          prefix="по"
          onChange={handleChangeValueDateTo}
        ></Input>
        {valueDateTo && (
          <Button
            className={clsx(
              styles.searchbarButton,
              styles.searchbarButtonPositionSmall
            )}
            onClick={handleClearValueDateTo}
            icon={IconXMedium}
          />
        )}
      </div>
    </div>
  )
}
