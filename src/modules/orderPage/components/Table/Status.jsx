import styles from './Status.css'
import classnames from 'classnames'
import Icon from '../../../../shared/Icon/Icon'

export default function Status({ status, color }) {
  const statusDict = {
    new: { text: 'Новый', icon: 'dot', iconColor: 'orange' },
    calculation: { text: 'Расчет', icon: 'dot', iconColor: 'blue' },
    completed: { text: 'Выполнен', icon: 'checkmark', iconColor: 'green' },
    cancelled: { text: 'Отменен', icon: 'abort', iconColor: 'purple' },
    delayed: { text: 'Отложен', icon: 'dot', iconColor: 'orange' },
    confirmed: { text: 'Подтверджен', icon: 'dot', iconColor: 'yellow' },
  }

  const colorIcon = {
    orange: 'orange',
    blue: 'blue',
    green: 'green',
    purple: 'purple',
    yellow: 'yellow',
  }

  const colorForIcon = classnames(styles.icon, {
    [styles.orange]: color === colorIcon.orange,
    [styles.blue]: color === colorIcon.blue,
    [styles.green]: color === colorIcon.green,
    [styles.purple]: color === colorIcon.purple,
    [styles.yellow]: color === colorIcon.yellow,
  })

  return (
    <>
      <Icon
        type={statusDict[status].icon}
        fill={statusDict[status].iconColor}
        className={colorForIcon}
      />
      <div className={colorForIcon}>{statusDict[status].text}</div>
    </>
  )
}
