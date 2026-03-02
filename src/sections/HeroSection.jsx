import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="section section--hero">
      <div className="container hero">
        <div className="hero__content">
          <h1>Premium Syrups for Bars & Cafés</h1>
          <p>
            Natural ingredients. Professional quality.
            Created for HoReCa.
          </p>

          <div className="hero__actions">
            <button className="btn btn--primary">
              View Products
            </button>

            <button className="btn btn--secondary">
              Contact Us
            </button>
          </div>
        </div>

        <div className="hero__image">
          {/* placeholder */}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

