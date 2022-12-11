import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?key=';
const PRIVATE_KEY = '31999586-240a3670e2fb6198507061565';
export const PER_PAGE = 40;

const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

export async function fetchPhotoApi(searchValue, pageNumber = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}${PRIVATE_KEY}&q=${searchValue}&${searchParams}&page=${pageNumber}&per_page=${PER_PAGE}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
