import styles from './Button.module.css'
import classnames from 'classnames'

export default function Button({
  icon: Icon,
  onClick,
  color,
  children,
  className,
  ...props
}) {
  const colorButton = {
    colorBlue: 'blue',
    colorWhite: 'white',
    colorGrey: 'grey',
  }

  const blockClass = classnames(styles.button, className, {
    [styles.colorBlue]: color === colorButton.colorBlue,
    [styles.colorWhite]: color === colorButton.colorWhite,
    [styles.colorGrey]: color === colorButton.colorGrey,
  })

  return (
    <button className={blockClass} color={color} onClick={onClick} {...props}>
      {Icon && <Icon className={styles.iconSize} />}
      {children}
    </button>
  )
}
