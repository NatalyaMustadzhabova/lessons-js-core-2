import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableCellWithButton from './TableCellWithButton'
// import { useState } from 'react';
import styles from './Table.module.css'
// import clsx from 'clsx'
import { ReactComponent as IconVArrow } from '../../../../shared/Icon/icons/v_arrow.svg'

export default function TableHeader() {
  // const [chosen, setChosen] = useState(null);
  return (
    <>
      <TableHead className={styles.header}>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCellWithButton text={'Дата'} icon={IconVArrow} />
          <TableCell>Статус</TableCell>
        </TableRow>
      </TableHead>
    </>
  )
}
