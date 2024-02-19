import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ refs }) {
  const { pathname } = useLocation();

  useEffect(() => {
    refs?.current?.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
