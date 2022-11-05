import Button from '../Button/Button'

import styles from './Input.module.css'
import classnames from 'classnames'

export default function Input({
  placeholder,
  label,
  value,
  onChange,
  className,
  onClick,
  prefix,
  icon,
  readOnly,
  size,
  classNameButton,
}) {
  const sizeInput = {
    sizeSmall: 'small',
    sizeMedium: 'medium',
    sizeBig: 'big',
  }

  const blockClass = classnames(styles.input, className, {
    [styles.sizeSmall]: size === sizeInput.sizeSmall,
    [styles.sizeMedium]: size === sizeInput.sizeMedium,
    [styles.sizeBig]: size === sizeInput.sizeBig,
  })

  const buttonClass = classnames(styles.button, classNameButton)

  return (
    <label className={styles.text}>
      {label}
      <div>
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input
          className={blockClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          size={size}
        />
        {value && (
          <Button
            color="white"
            icon={icon}
            onClick={onClick}
            className={buttonClass}
          />
        )}
      </div>
    </label>
  )
}
