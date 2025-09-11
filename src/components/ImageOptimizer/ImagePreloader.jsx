import { useEffect } from 'react';

const ImagePreloader = ({ images = [], priority = false }) => {
  useEffect(() => {
    if (!images.length) return;

    const preloadImages = () => {
      images.forEach((src) => {
        if (typeof src === 'string') {
          const img = new Image();
          img.src = src;
          
          // For priority images, add to document head for faster loading
          if (priority) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
          }
        }
      });
    };

    // Preload immediately for priority images, otherwise wait a bit
    if (priority) {
      preloadImages();
    } else {
      const timer = setTimeout(preloadImages, 100);
      return () => clearTimeout(timer);
    }
  }, [images, priority]);

  return null;
};

export default ImagePreloader;