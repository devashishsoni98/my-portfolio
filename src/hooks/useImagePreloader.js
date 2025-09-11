import { useEffect, useState } from 'react';

/**
 * Custom hook for preloading images
 */
export const useImagePreloader = (imageUrls, priority = false) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setIsLoading(false);
      return;
    }

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]));
          resolve(src);
        };
        
        img.onerror = () => {
          setErrors(prev => [...prev, src]);
          reject(new Error(`Failed to load image: ${src}`));
        };
        
        img.src = src;
      });
    };

    const loadImages = async () => {
      setIsLoading(true);
      
      try {
        if (priority) {
          // Load priority images immediately
          await Promise.all(imageUrls.map(preloadImage));
        } else {
          // Load non-priority images with a slight delay
          await new Promise(resolve => setTimeout(resolve, 100));
          await Promise.all(imageUrls.map(preloadImage));
        }
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [imageUrls, priority]);

  return {
    loadedImages,
    isLoading,
    errors,
    isImageLoaded: (src) => loadedImages.has(src)
  };
};

/**
 * Hook for lazy loading images with intersection observer
 */
export const useLazyImage = (ref, options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const {
    threshold = 0.1,
    rootMargin = '50px',
    priority = false
  } = options;

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, priority]);

  return {
    isInView,
    isLoaded,
    setIsLoaded
  };
};