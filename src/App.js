import "./style/global.css";

import Hero from "./components/Hero";
import PricingSelector from "./components/PricingSelector";
import DetailsList from "./components/DetailsList";
import Button from "./components/Button";
import MainContainer from "./components/MainContainer";
import InnerContainer from "./components/InnerContainer";
import DetailsContainer from "./components/DetailsContainer";

export default function App() {
  return (
    <MainContainer>
      <Hero />
      <InnerContainer>
        <PricingSelector />
        <DetailsContainer>
          <DetailsList />
          <Button>Start my trial</Button>
        </DetailsContainer>
      </InnerContainer>
    </MainContainer>
  );
}
