import styles from './TableBody.module.css'
import classnames from 'classnames'

export default function TableBody({ className, children }) {
  const blockClass = classnames(styles.body, className)
  return <div className={blockClass}>{children}</div>
}
