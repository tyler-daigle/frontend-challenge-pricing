import "./style/global.css";

import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="app">
      <div className="main-container">
        <Hero />

        <div className="inner-container">
          <div className="details-container">
            <section>
              <ul className="details-list">
                <li className="details-list-item">
                  <span className="checkmark">✔️</span>Unlimited websites
                </li>
                <li className="details-list-item">
                  <span className="checkmark">✔️</span>100% data ownership
                </li>
                <li className="details-list-item">
                  <span className="checkmark">✔️</span>Email reports
                </li>
              </ul>
            </section>
            <button type="button" className="cta-button">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
