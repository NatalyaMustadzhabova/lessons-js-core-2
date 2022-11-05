import styles from './Input.module.css'
import Button from '../Button/Button'
import clsx from 'clsx'
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
            className={clsx(styles.button)}
          />
        )}
      </div>
    </label>
  )
}
