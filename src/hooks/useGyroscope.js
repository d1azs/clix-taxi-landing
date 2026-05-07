import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook that applies gyroscope-based 3D tilt directly to a DOM element.
 * Uses refs + rAF instead of React state to avoid re-renders (zero lag).
 * On desktop, falls back to mouse position tracking.
 *
 * @param {number} sensitivity - tilt multiplier (0–1), default 0.5
 * @returns {React.RefObject} - ref to attach to the element you want to tilt
 */
export function useGyroscope(sensitivity = 0.5) {
  const ref = useRef(null);
  const tiltRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const gyroDetected = useRef(false);

  const lerp = (a, b, t) => a + (b - a) * t;

  // Smooth animation loop – runs via rAF, never triggers React re-render
  const animate = useCallback(() => {
    tiltRef.current.x = lerp(tiltRef.current.x, targetRef.current.x, 0.08);
    tiltRef.current.y = lerp(tiltRef.current.y, targetRef.current.y, 0.08);

    if (ref.current) {
      const rx = -tiltRef.current.y * 8;  // rotateX
      const ry = tiltRef.current.x * 12;  // rotateY
      ref.current.style.transform =
        `perspective(1000px) rotateY(${ry}deg) rotateX(${rx}deg)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  const requestPermission = useCallback(async () => {
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const p = await DeviceOrientationEvent.requestPermission();
        return p === 'granted';
      } catch { return false; }
    }
    return true;
  }, []);

  useEffect(() => {
    let mounted = true;

    const handleOrientation = (e) => {
      if (!mounted) return;
      const gamma = e.gamma || 0;
      const beta = e.beta || 0;
      targetRef.current.x = Math.max(-1, Math.min(1, (gamma / 45) * sensitivity));
      targetRef.current.y = Math.max(-1, Math.min(1, ((beta - 45) / 45) * sensitivity));
    };

    const handleMouse = (e) => {
      if (!mounted || gyroDetected.current) return;
      targetRef.current.x = ((e.clientX / window.innerWidth) * 2 - 1) * sensitivity;
      targetRef.current.y = ((e.clientY / window.innerHeight) * 2 - 1) * sensitivity;
    };

    const init = async () => {
      const ok = await requestPermission();
      if (ok && 'DeviceOrientationEvent' in window) {
        const test = (e) => {
          if (e.gamma !== null) {
            gyroDetected.current = true;
            window.removeEventListener('deviceorientation', test);
            window.addEventListener('deviceorientation', handleOrientation);
          }
        };
        window.addEventListener('deviceorientation', test);
        setTimeout(() => {
          if (!gyroDetected.current) {
            window.removeEventListener('deviceorientation', test);
            window.addEventListener('mousemove', handleMouse);
          }
        }, 1000);
      } else {
        window.addEventListener('mousemove', handleMouse);
      }
    };

    // Start the rAF loop
    rafRef.current = requestAnimationFrame(animate);
    init();

    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [sensitivity, requestPermission, animate]);

  return ref;
}
