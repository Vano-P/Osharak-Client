import ProductCard from '../components/product/ProductCard'
import { PRODUCTS } from '../dataMock/products.mock.js'

const ProductsSection = () => {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            Our Products
          </h2>
          <p className="section__subtitle">
            Professional syrups for bars, cafés and restaurants.
          </p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection