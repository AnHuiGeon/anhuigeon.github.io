import { useState, useEffect } from "react"

const HamburgerHook = () => {
  const [hamburger, setHamburger] = useState(false)
  useEffect(() => {
    const scrollOverflow = document.getElementsByTagName('body')[0]
    const asideOverflow = document.getElementsByTagName('aside')[0]
    if (hamburger) {
      scrollOverflow.style.overflow = 'hidden';
      asideOverflow.style.transform = "translateX(0px)"
      asideOverflow.style.webkitTransform = "translateX(0px)"
      asideOverflow.style.msTransform = "translateX(0px)"
    } else {
      scrollOverflow.style.overflow = 'visible';
      asideOverflow.style.transform = "translateX(-125%)"
      asideOverflow.style.webkitTransform = "translateX(-125%)"
      asideOverflow.style.msTransform = "translateX(-125%)"
    }
  }, [hamburger]);
  return [setHamburger]
}

export default HamburgerHook