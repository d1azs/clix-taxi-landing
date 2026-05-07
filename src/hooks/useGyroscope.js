import { useState, useEffect, useCallback } from 'react';

/**
 * Hook that provides gyroscope-based tilt data for mobile devices.
 * Falls back to mouse position on desktop.
 * Returns { x, y } in range [-1, 1].
 */
export function useGyroscope(sensitivity = 0.5) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isGyroAvailable, setIsGyroAvailable] = useState(false);

  const requestPermission = useCallback(async () => {
    // iOS 13+ requires explicit permission
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permission = await DeviceOrientationEvent.requestPermission();
        return permission === 'granted';
      } catch {
        return false;
      }
    }
    return true; // Android / older iOS – no permission needed
  }, []);

  useEffect(() => {
    let mounted = true;

    const handleOrientation = (e) => {
      if (!mounted) return;
      const gamma = e.gamma || 0; // left-right tilt [-90, 90]
      const beta = e.beta || 0;   // front-back tilt [-180, 180]
      
      // Normalize to [-1, 1] and apply sensitivity
      const x = Math.max(-1, Math.min(1, (gamma / 45) * sensitivity));
      const y = Math.max(-1, Math.min(1, ((beta - 45) / 45) * sensitivity));
      
      setTilt({ x, y });
    };

    const handleMouse = (e) => {
      if (!mounted || isGyroAvailable) return;
      const x = ((e.clientX / window.innerWidth) * 2 - 1) * sensitivity;
      const y = ((e.clientY / window.innerHeight) * 2 - 1) * sensitivity;
      setTilt({ x, y });
    };

    const init = async () => {
      const hasPermission = await requestPermission();
      if (hasPermission && 'DeviceOrientationEvent' in window) {
        // Test if the device actually sends orientation events
        const testHandler = (e) => {
          if (e.gamma !== null) {
            setIsGyroAvailable(true);
            window.removeEventListener('deviceorientation', testHandler);
            window.addEventListener('deviceorientation', handleOrientation);
          }
        };
        window.addEventListener('deviceorientation', testHandler);
        
        // Fallback to mouse if no gyro events after 1s
        setTimeout(() => {
          if (!isGyroAvailable) {
            window.removeEventListener('deviceorientation', testHandler);
            window.addEventListener('mousemove', handleMouse);
          }
        }, 1000);
      } else {
        window.addEventListener('mousemove', handleMouse);
      }
    };

    init();

    return () => {
      mounted = false;
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [sensitivity, requestPermission, isGyroAvailable]);

  return tilt;
}
