import styles from './TableFooter.module.css'
import classnames from 'classnames'

export default function TableFooter({ className, children }) {
  const blockClass = classnames(styles.footer, className)
  return <div className={blockClass}>{children}</div>
}
