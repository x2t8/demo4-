import { useState, useEffect } from 'react';

// Key for localStorage
const DISCLAIMER_BANNER_KEY = 'disclaimer_banner_dismissed';

export function useDisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Load state from localStorage on mount
  useEffect(() => {
    const dismissed = localStorage.getItem(DISCLAIMER_BANNER_KEY);
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem(DISCLAIMER_BANNER_KEY, 'true');
  };

  return {
    isVisible,
    dismissBanner,
  };
}
