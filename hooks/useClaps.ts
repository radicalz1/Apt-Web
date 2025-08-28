import { useState, useCallback } from 'react';
import { getTotalClaps, getUserClaps } from '../utils/clapUtils.ts';

const MAX_CLAPS = 50;

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

      setIsClapping(true);
      setTimeout(() => setIsClapping(false), 300);
    }
  }, [userClaps, totalClaps, articleSlug]);

  return { totalClaps, userClaps, isClapping, handleClap };
};