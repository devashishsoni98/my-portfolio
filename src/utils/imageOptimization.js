// Image optimization utilities

/**
 * Generate responsive image URLs for different screen sizes
 */
export const generateResponsiveImageUrls = (baseUrl, sizes = [400, 800, 1200]) => {
  return sizes.map(size => ({
    size,
    url: `${baseUrl}?w=${size}&q=80&f=webp`
  }));
};

/**
 * Get optimal image size based on container width
 */
export const getOptimalImageSize = (containerWidth) => {
  if (containerWidth <= 400) return 400;
  if (containerWidth <= 800) return 800;
  if (containerWidth <= 1200) return 1200;
  return 1600;
};

/**
 * Convert image to WebP format if supported
 */
export const getWebPImageUrl = (originalUrl) => {
  // Check if browser supports WebP
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  })();

  if (supportsWebP && originalUrl && !originalUrl.includes('.svg')) {
    // For local images, you might want to have WebP versions
    return originalUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  
  return originalUrl;
};

/**
 * Preload critical images
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Batch preload multiple images
 */
export const preloadImages = async (imageUrls) => {
  try {
    const promises = imageUrls.map(url => preloadImage(url));
    await Promise.all(promises);
    console.log('All images preloaded successfully');
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

/**
 * Create optimized image element with loading states
 */
export const createOptimizedImage = (src, alt, options = {}) => {
  const {
    className = '',
    loading = 'lazy',
    priority = false,
    placeholder = '/placeholder.svg'
  } = options;

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.className = className;
  img.loading = priority ? 'eager' : loading;
  
  // Add error handling
  img.onerror = () => {
    img.src = placeholder;
  };

  return img;
};