import Button from '../../../../shared/Button/Button'
import Input from '../../../../shared/Input/Input'
import Dropdown from '../../../../shared/Dropdown/Dropdown'
import Filter from '../Filter/Filter'
import styles from './Header.module.css'
import clsx from 'clsx'
import { ReactComponent as IconSun } from '../../../../shared/Icon/icons/sun.svg'
import { ReactComponent as IconFilter } from '../../../../shared/Icon/icons/filter.svg'
import { ReactComponent as IconRefresh } from '../../../../shared/Icon/icons/refresh.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.firstLine}>
        <h1>Список заказов</h1>
        <Button
          className={clsx(
            styles.button,
            styles.buttonColorWhite,
            styles.buttonBig
          )}
          icon={IconSun}
        >
          Светлая тема
        </Button>
      </div>
      <div className={styles.secondLine}>
        <div className={styles.secondLine_firstBlock}>
          <Input
            className={clsx(styles.searchbar)}
            placeholder={'Номер заказа или ФИО'}
          />
          <Dropdown
            trigger={
              <Button
                icon={IconFilter}
                className={clsx(
                  styles.button,
                  styles.buttonColorBlue,
                  styles.buttonSmall
                )}
              />
            }
            overlay={
              <>
                <Filter />
              </>
            }
          />
          <Button
            className={clsx(
              styles.button,
              styles.buttonColorWhite,
              styles.buttonMedium
            )}
          >
            Сбросить фильтры
          </Button>
        </div>
        <div>
          <Button
            className={clsx(
              styles.button,
              styles.buttonColorWhite,
              styles.buttonMini
            )}
            icon={IconRefresh}
          >
            Загрузка
          </Button>
        </div>
      </div>
    </header>
  )
}
