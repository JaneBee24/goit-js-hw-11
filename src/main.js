import fetchImages from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();
  
  if (!query) {
    alert('Введите поисковый запрос!');
    return;
  }

  gallery.innerHTML = ''; 

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      alert('Картинки не найдены. Попробуйте другой запрос.');
      return;
    }

    renderGallery(data.hits);
  } catch (error) {
    console.error('Ошибка загрузки изображений:', error);
  }
});
