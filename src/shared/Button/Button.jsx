import styles from './Button.module.css'

export default function Button({ icon: Icon, className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {Icon && <Icon className={styles.iconSize} />}
      {children}
    </button>
  )
}
