import Switch from "@mui/material/Switch";

export default function FrequencySwitch({ onChangeHandler, checked }) {
  return <Switch checked={checked} onChange={(e) => onChangeHandler(e)} />;
}
