import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * A custom React hook that tracks the intersection of a component with the viewport.
 * @param options - Configuration for the IntersectionObserver.
 * @returns A ref to attach to the element and a boolean indicating if it's intersecting.
 */
export const useIntersectionObserver = (
  options: IntersectionObserverOptions = {}
): [RefObject<HTMLDivElement>, boolean] => {
  const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
            if (!triggerOnce) {
                setIntersecting(false);
            }
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return [ref, isIntersecting];
};
