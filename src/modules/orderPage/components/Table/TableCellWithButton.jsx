// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell'
import Button from '../../../../shared/Button/Button'
import styles from './Table.module.css'
import clsx from 'clsx'
// import { ReactComponent as IconVArrow } from '../../../../shared/Icon/icons/v_arrow.svg'

export default function TableCellWithButton({ text, icon }) {
  return (
    <>
      <TableCell className={clsx(styles.cell)}>
        <span>{text}</span>
        <Button icon={icon} className={clsx(styles.button)} />
      </TableCell>
    </>
  )
}
