/* empty css                      */import{a as c,S as u}from"./assets/vendor-DTuICwlt.js";import"izitoast";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="49034890-15d0e202b9bb59c7b310d7a4f",d="https://pixabay.com/api/";async function f(a,t=1,o=40){try{const s=await c.get(d,{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}});return{images:s.data.hits,total:s.data.totalHits}}catch(s){throw console.error("Ошибка при получении данных:",s),new Error("Не удалось загрузить изображения")}}const m=document.querySelector(".gallery");let g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(a){const t=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:n,comments:i,downloads:l})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img class="gallery-image" src="${o}" alt="${e}" loading="lazy" />
            </a>
            <div class="image-info">
                <p><strong>Likes:</strong> ${r}</p>
                <p><strong>Views:</strong> ${n}</p>
                <p><strong>Comments:</strong> ${i}</p>
                <p><strong>Downloads:</strong> ${l}</p>
            </div>
        </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),g.refresh()}const h=document.querySelector("#search-form"),b=document.querySelector(".gallery");h.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements.searchQuery.value.trim();if(!t){alert("Введите поисковый запрос!");return}b.innerHTML="";try{const o=await f(t);if(o.hits.length===0){alert("Картинки не найдены. Попробуйте другой запрос.");return}y(o.hits)}catch(o){console.error("Ошибка загрузки изображений:",o)}});
//# sourceMappingURL=index.js.map
