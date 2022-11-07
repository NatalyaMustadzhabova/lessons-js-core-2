import styles from './TableRow.module.css'
import classnames from 'classnames'

export default function TableRow({ className, children }) {
  const blockClass = classnames(styles.row, className)
  return <div className={blockClass}>{children}</div>
}
