import { useState } from "react";
import FrequencySwitch from "./FrequencySwitch";
import PriceSlider from "./PriceSlider";

export default function PricingSelector() {
  const pricingList = [
    { views: "10K PAGEVIEWS", priceMonthly: "$8", priceYearly: "$6" },
    { views: "50K PAGEVIEWS", priceMonthly: "$12", priceYearly: "$8" },
    { views: "100K PAGEVIEWS", priceMonthly: "$16", priceYearly: "$12" },
    { views: "500K PAGEVIEWS", priceMonthly: "$24", priceYearly: "$18" },
    { views: "1M PAGEVIEWS", priceMonthly: "$36", priceYearly: "$27" },
  ];

  const [yearlyBilling, setYearlyBilling] = useState(true);
  const [pageViewSelector, setPageViewSelector] = useState(0);
  const [currentPricing, setCurrentPricing] = useState(0);

  const { views } = pricingList[currentPricing];
  const price = yearlyBilling
    ? pricingList[currentPricing].priceYearly
    : pricingList[currentPricing].priceMonthly;

  const onSliderChange = (e) => setCurrentPricing(e.target.value);
  const frequencyChangeHandler = (e) => setYearlyBilling(e.target.checked);

  return (
    <section>
      <div className="pricing-container">
        <h2 className="pageview-count">{views}</h2>
        <PriceSlider changeHandler={onSliderChange} />

        <div className="discount-price-container">
          <span className="discount-price">{price}.00</span>
          <span className="yearly-monthly">
            / {yearlyBilling ? " year" : " month"}
          </span>
        </div>

        <div className="billing-frequency-container">
          <label className="billing-type-label" htmlFor="frequency-toggle">
            Monthly Billing
          </label>
          {/* <input type="checkbox" id="frequency-toggle" /> */}
          <FrequencySwitch
            checked={yearlyBilling}
            onChangeHandler={frequencyChangeHandler}
          />
          <label className="billing-type-label" htmlFor="frequency-toggle">
            Yearly Billing
          </label>
          <span className="discount-amount">-25%</span>
        </div>
      </div>
    </section>
  );
}
