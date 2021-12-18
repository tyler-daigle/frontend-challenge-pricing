import Slider from "@mui/material/Slider";

export default function PriceSlider({ changeHandler }) {
  return (
    <div className="slider-container">
      <Slider step={1} min={0} max={4} onChange={(e) => changeHandler(e)} />
    </div>
  );
}
