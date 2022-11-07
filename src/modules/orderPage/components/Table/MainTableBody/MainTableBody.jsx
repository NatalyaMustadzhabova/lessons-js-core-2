import TableCell from '../../../../../shared/TableCell/TableCell'
import Checkbox from '../../../../../shared/Checkbox/Checkbox'
import TableRow from '../../../../../shared/TableRow/TableRow'
import { mocks } from '../../mocks/mocks'
import styles from '../MainTableBody/MainTableBody.module.css'
import TableBody from '../../../../../shared/TableBody/TableBody'

export default function MainTableBody() {
  return (
    <>
      <TableBody>
        {mocks.map((mock) => (
          <TableRow key={mock.id}>
            <TableCell className={styles.checkbox}>
              <Checkbox />
            </TableCell>
            <TableCell className={styles.number}>{mock.number}</TableCell>
            <TableCell className={styles.date}>{mock.date}</TableCell>
            <TableCell className={styles.status}>{mock.status}</TableCell>
            <TableCell className={styles.position}>{mock.position}</TableCell>
            <TableCell className={styles.amount}>{mock.amount}</TableCell>
            <TableCell className={styles.name}>{mock.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  )
}
