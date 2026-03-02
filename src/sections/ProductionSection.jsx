import React from 'react';

const ProductionSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">
          Our Production
        </h2>

        <p className="section__subtitle">
          We use high-quality ingredients and
          strict quality control standards.
        </p>

        <div className="production__grid">
          <div className="card">Natural ingredients</div>
          <div className="card">No artificial flavors</div>
          <div className="card">Controlled production</div>
        </div>
      </div>
    </section>
  )
}

export default ProductionSection