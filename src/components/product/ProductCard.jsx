import { FiShoppingCart } from 'react-icons/fi'
import { useCartStore } from '../../cart/cart.store'

const ProductCard = ({ product }) => {
  const addItem = useCartStore(s => s.addItem)
  return (
    <div className="product-card">
      <div className="product-card__image">
        {/* placeholder for image */}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">
          {product.name}
        </h3>

        <p className="product-card__desc">
          {product.description}
        </p>

        <span className="product-card__volume">
          {product.volume}
        </span>
      </div>

      <div className="product-card__footer">
        <button
          className="btn btn--outline"
          onClick={() => addItem(product)}
        >
          <FiShoppingCart size={16} />
          Add to request
        </button>
      </div>
    </div>
  )
}

export default ProductCard