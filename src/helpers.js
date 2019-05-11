// Placeholder image
import placeholder from './assets/placeholder.png';

/**
 * @desc Parse number to string with formatting
 * @param {number} num - Number to be parsed
 * @return {string} with formatting
 */
export const numFormatter = (num) => {
  // Return null if num is not present
  if (!num) return null;

  // Handle >=1B
  if (num > 999999999) {
    return `${(num / 1000000000).toFixed(1)}B`;
  }

  // Handle >=1M
  if (num > 999999) {
    return `${(num / 1000000).toFixed(1)}M`;
  }

  // Handle >=100K
  if (num > 99999) {
    return `${Math.floor(num / 1000)}K`;
  }

  // Handle >=1K
  if (num > 999) {
    return `${(num / 1000).toFixed(1)}K`;
  }

  // Handle <1K
  return num.toString();
};

/**
 * @desc Get image url based on path
 * @param {string} path - Path to image
 * @return {string} image url
 */
export const ImageUrlSelector = (path) => {
  // Return placeholder if path is not present
  if (!path) {
    return placeholder;
  }

  // Return image url
  return `https://image.tmdb.org/t/p/w500${path}`;
};
