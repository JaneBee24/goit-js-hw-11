import axios from "axios";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const API_KEY = "49034890-15d0e202b9bb59c7b310d7a4f";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query, page = 1, perPage = 40) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page,
                per_page: perPage,
            },
        });

        return {
            images: response.data.hits,
            total: response.data.totalHits,
        };
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw new Error("Не удалось загрузить изображения");
    }
}
