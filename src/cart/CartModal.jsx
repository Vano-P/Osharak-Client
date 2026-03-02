import { useEffect } from 'react'
import { useCartStore } from './cart.store'
import CartItem from './CartItem'
import Portal from '../components/ui/Portal'

const CartModal = ({ open, onClose }) => {
  const items = useCartStore(s => s.items)
  const clearCart = useCartStore(s => s.clearCart)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <Portal>
      <div className="cart-overlay" onClick={onClose}>
        <div
          className="cart-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex justify-between items-start'>
            <h3>Your Request</h3>
            <button
              className="cart-close"
              onClick={onClose}
            >
              X
            </button>
          </div>

          {items.length === 0 && (
            <p>Cart is empty</p>
          )}

          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          {items.length > 0 && (
            <div className="cart-footer flex justify-between">
              <button onClick={clearCart}>
                Clear
              </button>

              <button className="btn btn--primary">
                Proceed to Order
              </button>
            </div>
          )}


        </div>
      </div>
    </Portal>
  )
}

export default CartModal