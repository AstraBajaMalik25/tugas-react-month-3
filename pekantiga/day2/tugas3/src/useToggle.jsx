import { useState } from "react";

export default function useToggle(initialValue = true) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}