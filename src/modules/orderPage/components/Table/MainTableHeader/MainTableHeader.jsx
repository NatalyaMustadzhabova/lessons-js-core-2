import TableHeader from '../../../../../shared/TableHeader/TableHeader'
import TableHeaderCell from '../../../../../shared/TableHeaderCell/TableHeaderCell'
import Checkbox from '../../../../../shared/Checkbox/Checkbox'
import { ReactComponent as IconSun } from '../../../../../shared/Icon/icons/sun.svg'
import TableRow from '../../../../../shared/TableRow/TableRow'
import styles from './MainTableHeader.module.css'
import Button from '../../../../../shared/Button/Button'

export default function MainTableHeader() {
  return (
    <>
      <TableHeader>
        <TableRow>
          <TableHeaderCell className={styles.checkbox}>
            <Checkbox />
          </TableHeaderCell>
          <TableHeaderCell className={styles.number}>#</TableHeaderCell>
          <TableHeaderCell className={styles.date}>
            <Button icon={IconSun}>1</Button>
            Дата
          </TableHeaderCell>
          <TableHeaderCell className={styles.status}>Статус</TableHeaderCell>
          <TableHeaderCell>Позиций</TableHeaderCell>
          <TableHeaderCell>Сумма</TableHeaderCell>
          <TableHeaderCell>ФИО покупателя</TableHeaderCell>
        </TableRow>
      </TableHeader>
    </>
  )
}
