import styles from './Input.module.css'

export default function Input({
  placeholder,
  label,
  value,
  onChange,
  className,
  prefix,
}) {
  return (
    <label className={styles.text}>
      {label}
      <div>
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </label>
  )
}
