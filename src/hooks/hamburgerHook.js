import { useState, useEffect } from "react"

const HamburgerHook = () => {
  const [hamburger, setHamburger] = useState(false)
  useEffect(() => {
    const scrollOverflow = document.getElementsByTagName('body')[0]
    const asideOverflow = document.getElementsByTagName('aside')[0]
    if (hamburger) {
      scrollOverflow.style.overflow = 'hidden';
      asideOverflow.className += ' hamburgerClicked';
    } else {
      scrollOverflow.style.overflow = 'visible';
      asideOverflow.classList.remove('hamburgerClicked');
    }
  }, [hamburger]);
  return [setHamburger]
}

export default HamburgerHook