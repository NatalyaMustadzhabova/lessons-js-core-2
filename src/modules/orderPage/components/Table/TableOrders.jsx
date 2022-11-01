// import React from 'react';
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material';
// import TableCell from '@mui/material';
import TableBody from '@mui/material/TableBody'
import TableHeader from './TableHeader'
import styles from './Table.module.css'
// import clsx from 'clsx';

export default function TableOrders() {
  return (
    <TableContainer className={styles.table}>
      <Table>
        <TableHeader />
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  )
}
