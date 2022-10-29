import { cloneElement } from 'react'
import { useState } from 'react'
import styles from './Dropdown.module.css'

export default function Dropdown({ trigger, overlay }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen((is) => !is)
  }

  const myToggle = cloneElement(trigger, { onClick: toggleDropdown }, 'Фильтры')

  return (
    <div className={styles.dropdown}>
      {myToggle}
      {!isOpen && <div className={styles.overlay}>{overlay}</div>}
    </div>
  )
}
