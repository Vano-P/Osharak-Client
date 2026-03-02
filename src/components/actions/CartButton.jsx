import { FiShoppingCart } from 'react-icons/fi'
import CartModal from "../../cart/CartModal.jsx";
import {useCartStore} from "../../cart/cart.store.js";
import {useState} from "react";

const CartButton = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const items = useCartStore(s => s.items)

  const totalCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )
  return (
    <>
      <button
        className="cart-btn"
        onClick={() => setCartOpen(true)}
      >
        <FiShoppingCart size={20} />

        {totalCount > 0 && (
          <span className="cart-badge">
                {totalCount}
              </span>
        )}
      </button>

      <CartModal
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  )
}

export default CartButton
