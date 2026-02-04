import {useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Nav from "../components/navigation/Nav.jsx";
import HeaderActions from "../components/actions/HeaderActions.jsx";
import Burger from "../components/ui/Burger.jsx";

const Header = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])


  return (
    <header className={`header ${menuOpen ? 'is-open' : ''}`}>
      <div className='container header__inner'>
        {/* Logo */}
        <Link to='/' className='header__logo'> Osharak </Link>
        {/* Menu */}
        <Nav onNavigate={() => setMenuOpen(false)} variant="header" />
        {/* Actions */}
        <HeaderActions />
        {/* Mobile Menu */}
        <Burger open={menuOpen} onToggle={() => setMenuOpen((v) => !v)} />
      </div>

    </header>
  )
}

export default Header