/*
  getImageVariants: a utility function to generate different mock variants of the image based on an image object based on photos returned from paveapi
*/
import { types as sdkTypes } from './sdkLoader';
const { UUID } = sdkTypes;

export const getImageVariants = images => {
  if (!images) return [];
  return images.map(image => ({
    ...image,
    type: 'image',
    id: new UUID(image.url),
    attributes: {
      variants: {
        facebook: { height: 630, width: 1200, name: 'facebook', url: image.url },
        twitter: { height: 314, width: 600, name: 'twitter', url: image.url },
        'square-small': { height: 240, width: 240, name: 'square-small', url: image.url },
        'square-small2x': { height: 480, width: 480, name: 'square-small2x', url: image.url },
        'listing-card': { height: 400, width: 400, name: 'listing-card', url: image.url },
        'listing-card-2x': { height: 800, width: 800, name: 'listing-card-2x', url: image.url },
        'listing-card-4x': { height: 1600, width: 1600, name: 'listing-card-4x', url: image.url },
        'listing-card-6x': { height: 2400, width: 2400, name: 'listing-card-6x', url: image.url },
        'scaled-small': { height: 180, width: 320, name: 'scaled-small', url: image.url },
        'scaled-medium': { height: 421, width: 750, name: 'scaled-medium', url: image.url },
        'scaled-large': { height: 576, width: 1024, name: 'scaled-large', url: image.url },
        'scaled-xlarge': { height: 1350, width: 2400, name: 'scaled-xlarge', url: image.url },
      },
    },
  }));
};
