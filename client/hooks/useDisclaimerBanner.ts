import { useState, useEffect } from 'react';

// Key for localStorage
const DISCLAIMER_BANNER_KEY = 'disclaimer_banner_dismissed';

export function useDisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(DISCLAIMER_BANNER_KEY);
      if (dismissed === 'true') {
        setIsVisible(false);
      }
    } catch (error) {
      console.warn('Cannot access localStorage:', error);
      // Continue with default visible state
    }
  }, []);

  const dismissBanner = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(DISCLAIMER_BANNER_KEY, 'true');
    } catch (error) {
      console.warn('Cannot write to localStorage:', error);
      // UI still updates even if storage fails
    }
  };

  return {
    isVisible,
    dismissBanner,
  };
}
