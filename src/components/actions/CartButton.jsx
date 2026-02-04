import { FiShoppingCart } from 'react-icons/fi'

const CartButton = ({ onClick }) => {
  return (
    <button className="icon-btn" onClick={onClick}>
      <FiShoppingCart size={20} />
    </button>
  )
}

export default CartButton
