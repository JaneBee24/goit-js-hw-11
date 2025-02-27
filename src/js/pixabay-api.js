import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '49034890-15d0e202b9bb59c7b310d7a4f'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 40) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });

    if (response.data.hits.length === 0) {
      iziToast.warning({
        title: 'Внимание',
        message: 'По вашему запросу ничего не найдено!',
        position: 'topRight',
      });
    }

    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Ошибка',
      message: 'Не удалось загрузить изображения. Попробуйте позже!',
      position: 'topRight',
    });
    console.error('Ошибка при загрузке изображений:', error);
    throw error;
  }
}
