import { types as sdkTypes } from './sdkLoader';
const { UUID } = sdkTypes;

export const transformListing = payload => {
  if (isTypeListing(payload)) {
    const [data, included] = getModifiedListings(payload.data.data);
    return {
      ...payload,
      data: {
        ...payload.data,
        data,
        included: [...payload.data.included, ...included],
      },
    };
  }
  return payload;
};

export const isTypeListing = payload => {
  if (!payload?.data?.data) {
    return false;
  }
  if (Array.isArray(payload.data.data)) {
    if (!payload.data.data.length) return false;
    return payload.data.data[0].type.toLowerCase().includes('listing');
  }
  return payload.data.data.type.toLowerCase().includes('listing');
};

export const getModifiedListings = listings => {
  let data;
  const included = [];

  if (Array.isArray(listings)) {
    data = [];
    for (let listing of listings) {
      let [modifiedListing, modifiedImages] = modifyListing(listing);
      data.push(modifiedListing);
      included.push(...modifiedImages);
    }
  } else {
    let [modifiedListing, modifiedImages] = modifyListing(listings);
    data = modifiedListing;
    included.push(...modifiedImages);
  }
  return [data, included];
};

export const modifyListing = listing => {
  const modifiedImages = getImageVariants(listing);
  const modifiedListing = {
    ...listing,
    relationships: {
      ...listing.relationships,
      images: {
        ...listing.relationships.images,
        data: modifiedImages,
      },
    },
    attributes: {
      ...listing.attributes,
      title: listing.attributes.title || getTitle(listing.attributes.publicData?.pave?.vehicle),
      publicData: {
        ...listing.attributes.publicData,
        // brand: getBrand(listing.attributes.publicData?.vehicle),
      },
    },
  };
  return [modifiedListing, modifiedImages];
};

export const getTitle = vehicle => {
  return `${vehicle?.year || ''} ${vehicle?.make || ''} ${vehicle?.model || ''}`.trim();
};

export const getImageVariants = listing => {
  return (listing.attributes.publicData?.pave?.photos || []).map(image => ({
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

const getBrand = vehicle => {
  return vehicle?.make || '';
};
