import styles from './TableCell.module.css'
import classnames from 'classnames'

export default function TableCell({ className, children }) {
  const blockClass = classnames(styles.cell, className)
  return <div className={blockClass}>{children}</div>
}
