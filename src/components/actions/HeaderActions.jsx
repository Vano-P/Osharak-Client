import { useAuthStore } from '../../auth/auth.store'

import CartButton from './CartButton'
import ThemeToggle from './ThemeToggle'
import LanguageMenu from './LanguageMenu'
import ProfileMenu from './ProfileMenu'
import {Link} from "react-router-dom";
import {FiLogIn} from 'react-icons/fi'

const HeaderActions = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

  return (
    <div className="header__actions flex items-center gap-2">
      {!isAuthenticated ? (
        <Link to='/login' className='flex items-center gap-1' >Login<FiLogIn size={20} /></Link>
      ) : (
        <ProfileMenu />
      )}
      <CartButton onClick={() => console.log('open cart')} />
      <ThemeToggle theme="light" onToggle={() => console.log('toggle theme')} />
      <LanguageMenu />
    </div>
  )
}

export default HeaderActions
