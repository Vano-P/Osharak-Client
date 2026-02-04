import { NAV_ITEMS } from './nav.config'
import { useNav } from './useNav'
import { useTranslation } from 'react-i18next'

const Nav = ({ onNavigate, variant = 'header' }) => {
  const { t } = useTranslation()
  const { navigateTo } = useNav(onNavigate)

  return (
    <nav className={`nav nav--${variant}`} aria-label="Main navigation">
      <ul className="nav__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.key}>
            <button className="nav__link" onClick={() => navigateTo(item)} >
              {t(item.label)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
