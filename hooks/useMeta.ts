import { useEffect } from 'react';

export const useMeta = (name: string, content: string) => {
  useEffect(() => {
    let metaElement = document.querySelector(`meta[name="${name}"]`);

    if (!metaElement) {
      metaElement = document.createElement('meta');
      metaElement.setAttribute('name', name);
      document.head.appendChild(metaElement);
    }

    metaElement.setAttribute('content', content);

  }, [name, content]);
};
