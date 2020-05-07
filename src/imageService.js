const ACCESS_KEY = "HMFeaCvvd8FxdLbiTD925AUjDkhhXFAaHNUX7iI0K2U";

export const getImages = queryString => {
  return fetch(getSearchImagesApiUrl(queryString));
};

export const getLatestImages = () => {
  return fetch(getLatestImagesApiUrl());
};

const getSearchImagesApiUrl = queryString => {
  return `https://api.unsplash.com/search/photos/?query=${queryString}&client_id=${ACCESS_KEY}&page=1&per_page=150`;
};

const getLatestImagesApiUrl = () => {
  return `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&page=1&per_page=150`;
};
