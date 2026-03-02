import { FiPlus, FiMinus, FiTrash } from 'react-icons/fi'
import { useCartStore } from './cart.store'

const CartItem = ({ item }) => {
  const increase = useCartStore(s => s.increase)
  const decrease = useCartStore(s => s.decrease)
  const removeItem = useCartStore(s => s.removeItem)

  return (
    <div className="cart-item">
      <div>
        <strong>{item.name}</strong>
        <div>{item.volume}</div>
      </div>

      <div className="cart-item__controls">
        <button onClick={() => decrease(item.id)}>
          <FiMinus size={14} />
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => increase(item.id)}>
          <FiPlus size={14} />
        </button>

        <button onClick={() => removeItem(item.id)}>
          <FiTrash size={14} />
        </button>
      </div>
    </div>
  )
}

export default CartItem