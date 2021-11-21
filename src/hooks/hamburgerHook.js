import { useState } from "react";

const HamburgerHook = () => {
  const [hamburger, setHamburger] = useState(false)
  return [hamburger, setHamburger]
}

export default HamburgerHook