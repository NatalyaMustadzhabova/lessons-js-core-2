import styles from './TableHeader.module.css'
import classnames from 'classnames'

export default function TableHeader({ children, className }) {
  const blockClass = classnames(styles.header, className)
  return <div className={blockClass}>{children}</div>
}
