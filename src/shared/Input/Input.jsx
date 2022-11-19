import Button from '../Button/Button'

import styles from './Input.module.css'
import classnames from 'classnames'

export default function Input({
  placeholder,
  label,
  value,
  onChange,
  className,
  onReset,
  prefix,
  readOnly,
  classNameButton,
  icon,
  incorrect,
  blocked,
}) {
  const blockClass = classnames(styles.input, className, {
    [styles.incorrect]: incorrect,
    [styles.blocked]: blocked,
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
        />
        {value && (
          <Button
            color="white"
            icon={icon}
            onClick={onReset}
            className={buttonClass}
          ></Button>
        )}
      </div>
    </label>
  )
}
