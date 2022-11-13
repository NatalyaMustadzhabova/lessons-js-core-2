import styles from './Table.module.css'
import classnames from 'classnames'

export default function Table({ className, children }) {
  const blockClass = classnames(styles.table, className)
  return <div className={blockClass}>{children}</div>
}
