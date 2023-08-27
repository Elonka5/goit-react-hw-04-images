import axios from 'axios';

const API_KEY = '38604662-9af2d9097b98875eae7599d57';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    page: 1,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getImages = async (query, page) => {
  const { data } = await instance.get(`/`, {
    params: { q: query, page: page },
  });

  return data;
};
