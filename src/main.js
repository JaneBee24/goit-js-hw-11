import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");

let query = "";
let page = 1;
const perPage = 40;
let totalHits = 0;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  query = event.currentTarget.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({
      title: "Увага",
      message: "Введіть запит для пошуку!",
    });
    return;
  }

  page = 1;
  clearGallery();
  loadMoreBtn.classList.add("hidden");
  showLoader();

  try {
    const data = await getImagesByQuery(query, page, perPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({
        title: "Інформація",
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });
      return;
    }

    createGallery(data.hits);

    if (totalHits > perPage) loadMoreBtn.classList.remove("hidden");
  } catch (error) {
    iziToast.error({
      title: "Помилка",
      message: "Не вдалося завантажити зображення.",
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener("click", async () => {
  page++;
  showLoader();

  try {
    const data = await getImagesByQuery(query, page, perPage);
    createGallery(data.hits);

    if (page * perPage >= totalHits) {
      loadMoreBtn.classList.add("hidden");
      iziToast.info({
        title: "Інформація",
        message: "Це останні зображення.",
      });
    }

    const { height } = document
      .querySelector(".gallery-item")
      .getBoundingClientRect();

    window.scrollBy({ top: height * 2, behavior: "smooth" });
  } catch (error) {
    iziToast.error({
      title: "Помилка",
      message: "Не вдалося завантажити зображення.",
    });
  } finally {
    hideLoader();
  }
});
