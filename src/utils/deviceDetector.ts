'use client';

export default function deviceDetector() {
  if (typeof navigator.userAgent === 'undefined') {
    return false;
  }

  const isMobile = Boolean(
    navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i),
  );

  return isMobile;
}
