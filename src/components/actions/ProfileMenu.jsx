import Dropdown from '../ui/Dropdown'
import { FiUser, FiLogOut, FiSettings } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../auth/auth.store'

const ProfileMenu = () => {
  const navigate = useNavigate()
  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)

  return (
    <Dropdown
      trigger={
        <div className="profile-trigger">
          <FiUser />
          <span>{user?.firstName}</span>
        </div>
      }
    >
      <button onClick={() => navigate('/profile')}>
        <FiSettings /> Profile
      </button>

      <button onClick={logout}>
        <FiLogOut /> Logout
      </button>
    </Dropdown>
  )
}

export default ProfileMenu
