import TableHeader from '../../../../../shared/TableHeader/TableHeader'
import TableHeaderCell from '../../../../../shared/TableHeaderCell/TableHeaderCell'
import Checkbox from '../../../../../shared/Checkbox/Checkbox'
import TableRow from '../../../../../shared/TableRow/TableRow'
import { ReactComponent as IconVArrow } from '../../../../../shared/Icon/icons/v_arrow.svg'
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
            Дата
            <Button icon={IconVArrow} color="blue" />
          </TableHeaderCell>
          <TableHeaderCell className={styles.status}>
            Статус
            <Button icon={IconVArrow} color="blue" />
          </TableHeaderCell>
          <TableHeaderCell className={styles.position}>
            Позиций
            <Button icon={IconVArrow} color="blue" />
          </TableHeaderCell>
          <TableHeaderCell className={styles.amount}>
            Сумма
            <Button icon={IconVArrow} color="blue" />
          </TableHeaderCell>
          <TableHeaderCell>ФИО покупателя</TableHeaderCell>
        </TableRow>
      </TableHeader>
    </>
  )
}
