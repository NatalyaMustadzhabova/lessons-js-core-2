import styles from '../Dropdown/Dropdown.module.css'
import { useState } from 'react'

export default function Dropdown({ overlay }) {
  const [isOpen] = useState(false)
  // const refDropdown = useRef();

  // useEffect(() => {
  //     const onClick = (e) => {
  //         if (!refDropdown.current.contains(e.target)) {
  //             setIsOpen(false);
  //         }
  //     };
  //     document.addEventListener("mousedown", onClick);
  //     return () => {
  //         document.removeEventListener("mousedown", onClick);
  //     };
  // }, []);

  // const toggleDropdown = () => {
  //     setIsOpen((is) => !is)
  // }

  // const myToggle = cloneElement(trigger, {onClick: toggleDropdown})

  return (
    <div className={styles.dropdown}>
      {/*{myToggle}*/}
      {!isOpen && <div className={styles.overlay}>{overlay}</div>}
    </div>
  )
}
