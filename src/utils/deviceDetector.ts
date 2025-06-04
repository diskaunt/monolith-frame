'use client';

export default function deviceDetector() {
	if (typeof navigator === 'undefined') {
		return false;
	}

	return Boolean(navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ))
}