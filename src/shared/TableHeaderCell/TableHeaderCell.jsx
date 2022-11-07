import styles from './TableHeaderCell.module.css'
import classnames from 'classnames'
import TableCell from '../TableCell/TableCell'
// import Button from "../Button/Button";

export default function TableHeaderCell({ children, className }) {
  const blockClass = classnames(styles.cell, className)
  return (
    <div>
      <TableCell className={blockClass}>{children}</TableCell>
      {/*<Button icon={icon}></Button>*/}
    </div>
  )
}
