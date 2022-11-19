import { ReactComponent as IconAbort } from './abort.svg'
import { ReactComponent as IconBin } from './bin.svg'
import { ReactComponent as IconCheckmark } from './checkmark.svg'
import { ReactComponent as IconDot } from './dot.svg'
import { ReactComponent as IconFilter } from './filter.svg'
import { ReactComponent as IconLocked } from './locked.svg'
import { ReactComponent as IconMoon } from './moon.svg'
import { ReactComponent as IconPencil } from './pencil.svg'
import { ReactComponent as IconRefresh } from './refresh.svg'
import { ReactComponent as IconSearch } from './search.svg'
import { ReactComponent as IconSun } from './sun.svg'
import { ReactComponent as IconVArrow } from './v_arrow.svg'
import { ReactComponent as IconXLarge } from './x-large.svg'
import { ReactComponent as IconXMedium } from './x-medium.svg'

export const icon = {
  abort: IconAbort,
  bin: IconBin,
  checkmark: IconCheckmark,
  dot: IconDot,
  filter: IconFilter,
  locked: IconLocked,
  moon: IconMoon,
  pencil: IconPencil,
  refresh: IconRefresh,
  search: IconSearch,
  sun: IconSun,
  vArrow: IconVArrow,
  xLarge: IconXLarge,
  xMedium: IconXMedium,
}

export default function Icon({ type, className, ...props }) {
  const IconComponent = icon[type]
  return IconComponent ? (
    <IconComponent className={className} {...props} />
  ) : null
}
