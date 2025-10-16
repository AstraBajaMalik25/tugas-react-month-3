import useCounter from "./useCounter";
import useToggle from "./useToggle";

export default function useCounterWithToggle() {
  const counter = useCounter();
  const [isVisible, toggleVisible] = useToggle(true);
  return { ...counter, isVisible, toggleVisible };
}
