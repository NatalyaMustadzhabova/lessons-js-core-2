import { useState } from 'react'

import Button from '../../../../shared/Button/Button'
import Input from '../../../../shared/Input/Input'
import Filter from '../Filter/Filter'
import { icon } from '../../../../shared/Icon/icons/Icon'

import styles from './Header.module.css'

export default function Header() {
  const [valueNumber, setValueNumber] = useState('')
  const [isFilterOpen, setFilterOpen] = useState(false)

  const handleClickFiltersOpen = () => {
    setFilterOpen(!isFilterOpen)
  }

  const handleChangeValueNumber = ({ target: { value } }) => {
    setValueNumber(value)
  }

  const handleClearValueNumber = () => {
    setValueNumber('')
  }

  return (
    <header className={styles.header}>
      <div className={styles.firstLine}>
        <h1>Список заказов</h1>
        <Button
          color="white"
          icon={icon.sun}
          className={styles.buttonSizeMedium}
        >
          Светлая тема
        </Button>
      </div>
      <div className={styles.secondLine}>
        <div className={styles.smallBlock}>
          <Input
            className={styles.searchbar}
            placeholder="Номер заказа или ФИО"
            value={valueNumber}
            onChange={handleChangeValueNumber}
            onReset={handleClearValueNumber}
            icon={icon.xMedium}
            classNameButton={styles.buttonPositionSmall}
          />
          <Button
            color={!isFilterOpen ? 'white' : 'blue'}
            icon={icon.filter}
            onClick={handleClickFiltersOpen}
            className={styles.buttonSizeSmall}
          >
            Фильтры
          </Button>
          {/*</div>*/}
          {isFilterOpen && (
            <Button color="white" size="big" className={styles.buttonSizeBig}>
              Сбросить фильтры
            </Button>
          )}
        </div>
        <div>
          <Button
            color="white"
            className={styles.buttonSizeMini}
            icon={icon.refresh}
          >
            Загрузка
          </Button>
        </div>
      </div>
      {isFilterOpen && (
        <div className={styles.filter}>
          <Filter />
        </div>
      )}
    </header>
  )
}
