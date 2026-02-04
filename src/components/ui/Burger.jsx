import { FiMenu, FiX } from 'react-icons/fi'

const Burger = ({ open, onToggle }) => {
  return (
    <button
      className="burger"
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={onToggle}
    >
      {open ? <FiX size={24}/> : <FiMenu size={24} />}
    </button>
  )
}

export default Burger
