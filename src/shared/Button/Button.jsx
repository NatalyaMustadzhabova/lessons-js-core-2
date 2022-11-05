import styles from './Button.module.css'
import classnames from 'classnames'

export default function Button({
  icon: Icon,
  onClick,
  color,
  size,
  children,
  className,
  ...props
}) {
  const colorButton = {
    colorBlue: 'blue',
    colorWhite: 'white',
    colorGrey: 'grey',
  }

  const sizeButton = {
    sizeMini: 'mini',
    sizeSmall: 'small',
    sizeMedium: 'medium',
    sizeBig: 'big',
  }

  const blockClass = classnames(styles.button, className, {
    [styles.colorBlue]: color === colorButton.colorBlue,
    [styles.colorWhite]: color === colorButton.colorWhite,
    [styles.colorGrey]: color === colorButton.colorGrey,
    [styles.sizeMini]: size === sizeButton.sizeMini,
    [styles.sizeSmall]: size === sizeButton.sizeSmall,
    [styles.sizeMedium]: size === sizeButton.sizeMedium,
    [styles.sizeBig]: size === sizeButton.sizeBig,
  })

  return (
    <button className={blockClass} color={color} onClick={onClick} {...props}>
      {Icon && <Icon className={styles.iconSize} />}
      {children}
    </button>
  )
}
