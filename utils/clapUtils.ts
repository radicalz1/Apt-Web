export const getTotalClaps = (slug: string, initialClaps: number): number => {
  try {
    const stored = localStorage.getItem(`claps_total_${slug}`);
    return stored ? parseInt(stored, 10) : initialClaps;
  } catch {
    return initialClaps;
  }
};

export const getUserClaps = (slug: string): number => {
  try {
    const stored = localStorage.getItem(`claps_user_${slug}`);
    return stored ? parseInt(stored, 10) : 0;
  } catch {
    return 0;
  }
};
