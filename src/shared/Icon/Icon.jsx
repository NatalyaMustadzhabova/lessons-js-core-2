import { ReactComponent as IconAbort } from '../../shared/Icon/icons/abort.svg'
import { ReactComponent as IconBin } from '../../shared/Icon/icons/bin.svg'
import { ReactComponent as IconCheckmark } from '../../shared/Icon/icons/checkmark.svg'
import { ReactComponent as IconDot } from '../../shared/Icon/icons/dot.svg'
import { ReactComponent as IconFilter } from '../../shared/Icon/icons/filter.svg'
import { ReactComponent as IconLocked } from '../../shared/Icon/icons/locked.svg'
import { ReactComponent as IconMoon } from '../../shared/Icon/icons/moon.svg'
import { ReactComponent as IconPencil } from '../../shared/Icon/icons/pencil.svg'
import { ReactComponent as IconRefresh } from '../../shared/Icon/icons/refresh.svg'
import { ReactComponent as IconSearch } from '../../shared/Icon/icons/search.svg'
import { ReactComponent as IconSun } from '../../shared/Icon/icons/sun.svg'
import { ReactComponent as IconVArrow } from '../../shared/Icon/icons/v_arrow.svg'
import { ReactComponent as IconXLarge } from '../../shared/Icon/icons/x-large.svg'
import { ReactComponent as IconXMedium } from '../../shared/Icon/icons/x-medium.svg'

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
