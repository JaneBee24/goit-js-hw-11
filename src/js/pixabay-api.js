const API_KEY = '49034890-15d0e202b9bb59c7b310d7a4f'; 
const BASE_URL = 'https://pixabay.com/api/';

async function fetchImages(query) {
    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`);

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (data.totalHits === 0) {
            console.warn("❌ Изображения не найдены!");
            return [];
        }

        return data.hits; 
    } catch (error) {
        console.error('Ошибка при запросе к API:', error);
    }

fetchImages('flowers').then(images => console.log(images));
