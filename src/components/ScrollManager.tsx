import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Router-aware scrolling.
 *
 * Anchor links like `/#projects` need to work from any route, which the router
 * does not do on its own: it changes the URL but never moves the viewport. So
 * we scroll to the hash target when there is one, and to the top when there is
 * not — otherwise navigating to a post leaves you halfway down the page.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // The target may not be mounted yet on a fresh cross-route navigation.
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
      const frame = requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}

export default ScrollManager;
