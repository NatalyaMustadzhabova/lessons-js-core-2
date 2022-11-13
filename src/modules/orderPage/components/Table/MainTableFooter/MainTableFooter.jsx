import TableFooter from '../../../../../shared/TableFooter/TableFooter'
import styles from '../MainTableFooter/MainTableFooter.module.css'
import Button from '../../../../../shared/Button/Button'
import { ReactComponent as IconPencil } from '../../../../../shared/Icon/icons/pencil.svg'
import { ReactComponent as IconBin } from '../../../../../shared/Icon/icons/bin.svg'
import clsx from 'clsx'

export default function MainTableFooter() {
  return (
    <TableFooter className={styles.footer}>
      <div className={styles.leftBLock}>
        <span>Выбрано записей: -</span>
        <Button
          color="blue"
          icon={IconPencil}
          className={clsx(styles.button, styles.buttonChange)}
        >
          Изменить статус
        </Button>
        <Button
          color="red"
          icon={IconBin}
          className={clsx(styles.button, styles.buttonDelete)}
        >
          Удалить
        </Button>
      </div>
      <div className={styles.rightBLock}>
        <div className={styles.smallBlock}>
          <Button
            color="blue"
            className={clsx(styles.button, styles.buttonPage)}
          >
            1
          </Button>
          <Button
            color="grey"
            className={clsx(styles.button, styles.buttonPage)}
          >
            2
          </Button>
          <Button
            color="grey"
            className={clsx(styles.button, styles.buttonPage)}
          >
            3
          </Button>
          <Button
            color="grey"
            className={clsx(styles.button, styles.buttonPage)}
          >
            ...
          </Button>
          <Button
            color="grey"
            className={clsx(styles.button, styles.buttonPage)}
          >
            18
          </Button>
        </div>
        <div>
          <Button
            color="grey"
            className={clsx(styles.button, styles.buttonPage)}
          >
            #
          </Button>
        </div>
      </div>
    </TableFooter>
  )
}
