import { useState, useEffect, useCallback } from 'react';

const MAX_CLAPS = 50;

// Simulates fetching total claps (e.g., from a database)
const getTotalClaps = (slug: string, initialClaps: number): number => {
  try {
    const stored = localStorage.getItem(`claps_total_${slug}`);
    return stored ? parseInt(stored, 10) : initialClaps;
  } catch {
    return initialClaps;
  }
};

// Gets the number of claps from the current user
const getUserClaps = (slug: string): number => {
  try {
    const stored = localStorage.getItem(`claps_user_${slug}`);
    return stored ? parseInt(stored, 10) : 0;
  } catch {
    return 0;
  }
};

export const useClaps = (articleSlug: string, initialClaps: number) => {
  const [totalClaps, setTotalClaps] = useState(() => getTotalClaps(articleSlug, initialClaps));
  const [userClaps, setUserClaps] = useState(() => getUserClaps(articleSlug));
  const [isClapping, setIsClapping] = useState(false);

  const handleClap = useCallback(() => {
    if (userClaps < MAX_CLAPS) {
      const newUserClaps = userClaps + 1;
      const newTotalClaps = totalClaps + 1;

      setUserClaps(newUserClaps);
      setTotalClaps(newTotalClaps);
      
      localStorage.setItem(`claps_user_${articleSlug}`, String(newUserClaps));
      localStorage.setItem(`claps_total_${articleSlug}`, String(newTotalClaps));

      // For animation
      setIsClapping(true);
      setTimeout(() => setIsClapping(false), 300);
    }
  }, [userClaps, totalClaps, articleSlug]);

  return { totalClaps, userClaps, isClapping, handleClap };
};