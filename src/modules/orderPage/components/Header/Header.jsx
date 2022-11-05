import Button from '../../../../shared/Button/Button'
import Input from '../../../../shared/Input/Input'
import Filter from '../Filter/Filter'
import styles from './Header.module.css'
import clsx from 'clsx'
import { ReactComponent as IconSun } from '../../../../shared/Icon/icons/sun.svg'
import { ReactComponent as IconFilter } from '../../../../shared/Icon/icons/filter.svg'
import { ReactComponent as IconRefresh } from '../../../../shared/Icon/icons/refresh.svg'
import { useState } from 'react'
import { ReactComponent as IconXMedium } from '../../../../shared/Icon/icons/x-medium.svg'

export default function Header() {
  const [valueNumber, setValueNumber] = useState('')
  const [isFilterOpen, setFilterOpen] = useState(false)

  const handleClickFiltersOpen = () => {
    setFilterOpen(!isFilterOpen)
  }

  const handleChangeValueNumber = (event) => {
    setValueNumber(event.target.value)
  }

  const handleClearValueNumber = () => {
    setValueNumber('')
  }

  return (
    <header className={styles.header}>
      <div className={styles.firstLine}>
        <h1>Список заказов</h1>
        <Button color="white" size="medium" icon={IconSun}>
          Светлая тема
        </Button>
      </div>
      <div className={styles.secondLine}>
        <div>
          <div className={styles.smallBlock}>
            <Input
              className={styles.searchbar}
              placeholder="Номер заказа или ФИО"
              value={valueNumber}
              onChange={handleChangeValueNumber}
              onClick={handleClearValueNumber}
              icon={IconXMedium}
            />
            <Button
              color={!isFilterOpen ? 'white' : 'blue'}
              size="small"
              icon={IconFilter}
              onClick={handleClickFiltersOpen}
            >
              Фильтры
            </Button>
            {isFilterOpen && (
              <Button color="white" size="big">
                Сбросить фильтры
              </Button>
            )}
          </div>
          {isFilterOpen && (
            <div className={clsx(styles.filter)}>
              <Filter />
            </div>
          )}
        </div>
        <div>
          <Button color="white" size="mini" icon={IconRefresh}>
            Загрузка
          </Button>
        </div>
      </div>
    </header>
  )
}
