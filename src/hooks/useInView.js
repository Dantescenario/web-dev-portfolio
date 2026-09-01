import { useEffect, useRef, useState } from 'react';

/**
 * useInView – fires once when the element enters the viewport.
 * @param {Object} options – IntersectionObserver options
 * @param {number} options.threshold – 0–1, portion of element visible to trigger (default 0.15)
 * @param {string} options.rootMargin – e.g. "0px 0px -60px 0px" (default)
 */
const useInView = ({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // Only fire once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};

export default useInView;
