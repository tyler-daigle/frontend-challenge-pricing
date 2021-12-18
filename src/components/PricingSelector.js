export default function PricingSelector() {
  <section>
    <div className="pricing-container">
      <h2 className="pageview-count">100K PAGEVIEWS</h2>
      <div className="slider-container"></div>

      <div className="discount-price-container">
        <span className="discount-price">$16.00</span>
        <span className="yearly-monthly">/ month</span>
      </div>

      <div className="billing-frequency-container">
        <label className="billing-type-label" htmlFor="frequency-toggle">
          Monthly Billing
        </label>
        <input type="checkbox" id="frequency-toggle" />
        <label className="billing-type-label" htmlFor="frequency-toggle">
          Yearly Billing
        </label>
        <span className="discount-amount">-25%</span>
      </div>
    </div>
  </section>;
}
